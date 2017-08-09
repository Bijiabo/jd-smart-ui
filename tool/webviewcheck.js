// 获取UserAgent
let u = navigator.userAgent;
// 安卓
let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
// IOS
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);


if (isAndroid) {
    global.PhoneType = 'android'
} else if (isiOS) {
    global.PhoneType = 'ios'
}