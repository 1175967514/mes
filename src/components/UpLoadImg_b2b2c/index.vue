<template>
  <div>
    <el-upload
      :limit="1"
      :action="actionUrl"
      :on-exceed="handleExceed"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :http-request="uploadFile"
      :file-list="fileList"
      class="upload-demo"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  /* eslint-disable vue/require-prop-types */
  props: ['imgLogoUrl', 'dialogType'],
  data() {
    return {
      actionUrl: '',
      fileList: []
    }
  },
  created() {
    this.initUploadFileurl()
    if (this.dialogType === 1) {
      this.fileList = []
    } else if (this.dialogType === 2) {
      if (this.imgLogoUrl === null) {
        this.fileList = []
      } else {
        const obj = {}
        obj.url = this.imgLogoUrl
        this.fileList.push(obj)
      }
    }
  },
  methods: {
    initUploadFileurl() {
      this.actionUrl = process.env.BASE_API + 'file/uploadImageAndCrtThumbImagesRichEdit'
    },
    uploadFile(condent) {
      const file = condent.file
      const isJPG =
        file.type === 'image/jpeg' ||
        file.type === 'image/png' ||
        file.type === 'image/gif'
      const isLt2M = file.size < 1048576
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 jpg、png、gif 格式!')
        this.fileList = []
        return false
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 1M!')
        this.fileList = []
        return false
      }
      const fd = new FormData()
      fd.append('images', condent.file)
      fd.append('resPath', this.resPath)
      const loading = this.$loading({
        lock: true,
        text: '保存中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      axios.post(condent.action, fd).then(res => {
        loading.close()
        if (res.data.code === 1) {
          this.$emit('emitSuccess', res.data.data[0].maxImageUrl)
          this.$message({
            message: '上传成功',
            type: 'success'
          })
          console.log(res.data.data)
        } else {
          this.$message({
            message: res.data.msg,
            type: 'warning'
          })
        }
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
      this.$emit('emitSuccess', '')
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message({
        message: '最多长传一张',
        type: 'warning'
      })
    }
  }
}
</script>

<style   scoped>
</style>
