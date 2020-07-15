// 从身份证截取出生年月
const idcard  = '13063419930303093X'
const newstr = idcard.replace(/^\d{6}(\d{4})(\d{2})(\d{2})[0-9A-Za-z]{4}$/g, '$1-$2-$3')
console.log(newstr) // 1993-03-03
