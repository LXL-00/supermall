export function debounce(func,delay){
  let timer=null;
  return function(...args){
    if(timer){
      clearTimeout(timer);
    }
    else{
      timer=setTimeout(()=>{
        func.apply(this.args);
      },delay);
    }
  };
 
}

//时间戳格式化
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
//正则表达式：就是用来字符串匹配，有很多规则
//y+：1个或多个y
//y*:0个或多个y
//y?:0个或1个y
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }

  }

  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};
