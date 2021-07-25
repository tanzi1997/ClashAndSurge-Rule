const yaml = require("js-yaml");
const axios = require("axios");

const fs = require("fs");

const CNIpCidr = fs.readFileSync("./CN-ip-cidr.txt", "utf8");

const CNIpCidrArray = CNIpCidr.split('\n')

const payload = [];

for (const IpCidr of CNIpCidrArray) {
  if (IpCidr === '') return
  payload.push(`IP-CIDR,${IpCidr},DIRECT`)
}

const dump = yaml.dump({
  payload
})

fs.writeFileSync("./NodeList_Clash.yml", dump);



// const object = yaml.load(Nexitally_Clash);

// const Proxy2 = [];

// for (const proxy of object.proxies) {
//   if (proxy.name.indexOf('Premium') !== -1) continue;
//   if (proxy.name.indexOf('Hong Kong') !== -1) {
//     Proxy2.push(proxy.name.trim())
//   }
// }

// console.log(Proxy2)

// const dump = yaml.dump({
//   port: 7890, // https端口号
//   'socks-port': 7891, // socks5端口号
//   'allow-lan': false, // 开启远程访问
//   'log-level': 'info', // 日记
//   profile: {
//     'store-selected': false, // store
//     tracing: true // 监控
//   },
//   //dns
//   dns: {
//     enable: false,
//   },
//   // tun 模式
//   tun: {
//     enable: true,
//     stack: 'system'
//   },
//   //代理
//   proxies: object.proxies,
//   // 代理组
//   'proxy-groups': {
//     Proxy: Proxy2
//   },
//   //规则
//   rules: [
//     'GEOIP,CN,DIRECT',
//     'MATCH,Proxy'
//   ]
// });

