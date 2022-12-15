//获取cookie 
export const Getcookie = (a)=> {
  let d;
  let b = document.cookie;
  // console.log(b)
  let c = b.split(";");
  for (let e = 0; e < c.length; e++) {
    let f = c[e].split("=");
    if (a == f[0].toString().trim()) {
      d = f[1];
      break;
    }
  } if (void 0 == d || null == d) {
    return false;
  }
  else {
    var g = unescape(d.trim());
    return g;
  }

}