/**
 * Created by jiachenpan on 16/11/18.
 */
function isvalidNull(str) {
  if (str === '') {
    return false;
  } else {
    return true;
  }
}

/* 合法uri*/
function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/* 小写字母*/
function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母*/
function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母*/
function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}
/* 用户名最短3个字符最长不超过16个字符*/
function validateUserName(str) {
  const reg = /[a-zA-Z0-9_]{3,16}/;
  return reg.test(str);
}

/* 匹配手机号码*/
function validatePhone(str) {
  const reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
  return reg.test(str);
}

/* 匹配密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)*/
function validatePassWord(str) {
  const reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(str);
}

/* 数字或者带小数点的数字（钱）*/
function validateMoney(str) {
  const reg = /^\d+(\.\d+)?$/;
  return reg.test(str);
}

/* 匹配邮箱*/
function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const re =/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
  return re.test(email);
}

/* 只能输入数字*/
function validateNumber(str) {
  const reg = /^[0-9]*$/;
  return reg.test(str);
}

/* 8个长度字符 */
function validateLength(str) {
  // let reg = /^[a-zA-Z\d\_\u2E80-\u9FFF]{1,10}$/
  // return reg.test(str)
}
/* 只能vin*/
function vin(str) {
  const reg = /^[A-Z0-9]*$/;
  return reg.test(str);
}
// 判断值是否为null  undefined  或空
function typeJudge(value) {
  //类型判断
  if (typeof value == 'undefined') {
    return true;
  }
  if (!value &&  value != 0) {
	return true;
  }
  if(value===''){
	return true;
  }
  return false
}

export {
  isvalidNull,
  validateURL,
  validateLowerCase,
  validateUpperCase,
  validateAlphabets,
  validatePhone,
  validatePassWord,
  validateMoney,
  validateEmail,
  validateNumber,
  validateLength,
  vin,
  typeJudge,
  validateUserName
};
