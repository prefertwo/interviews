// 从身份证截取出生年月
const idcard  = '13063419930303093X'
const newstr = idcard.replace(/^\d{6}(\d{4})(\d{2})(\d{2})[0-9A-Za-z]{4}$/g, '$1-$2-$3')
console.log(newstr) // 1993-03-03

// 去掉字符串的空格
const phone = " 180 8932 8479         "
const newphone = phone.replace(/\s/g, '')
console.log(newphone);

// 获取传参对象
const search = "tid=123&appId=87&redirect=true"
const getUrlParams = (search) => {
  let obj = {}
  search.replace(/([^&=]+)=([^&=]*)/gi, function(rs, $1, $2) {
    obj[$1] = $2
  })
  console.log(obj)
}
getUrlParams(search)
