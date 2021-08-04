/**
 * 配置请求地址，支持多环境
 * @param sit==>>测试开发环境
 * @param prod==>正式上线环境
 * */
module.exports = {

	// sit: "http://192.168.1.38:8106/",//王毅豪本地
	// sit:"http://192.168.1.98:8105/",//马晓强本地
	// sit: "http://192.168.1.35:8106/", //赵陈博本地

	//sit: "http://192.168.1.13:8102/",//王毅豪本地
	// sit:"http://192.168.1.66:8102/",//马晓强本地
	//sit: "http://192.168.1.11:8102/", //赵陈博本地

  sit: "https://qimao.tkkj.ltd/",

	// sit: "http://192.168.1.14:8082/memorial-hall-admin/",
	// sit: "https://1chalk.com/yiliang-admin/",//王毅豪本地,
	// sit: "http://192.168.1.9:8102/",
	// sit: "https://1chalk.com/mall-admin/",
  //   sit: "https://www.yfishing.cn/mall-admin/",
  //sit: "https://www.yfishing.cn/mall-admin-temp/",
	// -----------------------------------------------------------------
	prod: "http:正式环境"
}


