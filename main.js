const yaml = require("js-yaml");
const fs = require("fs");

// const Nexitally_Clash = fs.readFileSync("./Nexitally_Clash.yml", "utf8");

// const object = yaml.load(Nexitally_Clash);

const auto = [
  'https://binance.ankr.com/',
  'https://bsc-dataseed1.binance.org',
  'https://bsc-dataseed2.binance.org',
  'https://bsc-dataseed3.binance.org',
  'https://bsc-dataseed4.binance.org',
  'https://bsc-dataseed1.defibit.io',
  'https://bsc-dataseed2.defibit.io',
  'https://bsc-dataseed3.defibit.io',
  'https://bsc-dataseed4.defibit.io',
  'https://bsc-dataseed1.ninicoin.io',
  'https://bsc-dataseed2.ninicoin.io',
  'https://bsc-dataseed3.ninicoin.io',
  'https://bsc-dataseed4.ninicoin.io',
]; 

// for (const proxy of object.proxies) {
//   if (proxy.name.indexOf('Premium') !== -1) continue;
//   if (proxy.name.indexOf('Hong Kong') !== -1) {
//     Proxy2.push(proxy.name.trim())
//   }
// }

// console.log(Proxy2)

const proxyGroups = []

for (const testUrl of auto) {
  proxyGroups.push({
    name: testUrl,
    type: 'url-test',
    proxies: [

    ],
    url: testUrl,
    interval: 300,
  })
}

const dump = yaml.dump({
  'proxy-groups': proxyGroups
});

fs.writeFileSync("./so.yml", dump);
