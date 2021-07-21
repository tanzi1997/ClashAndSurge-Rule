const fs = require('fs')

const center = fs.readFileSync('./SurgeRule.conf', 'utf-8')

const hang = center.split('\n')

const hanAa = []

for(let han of hang) {
  if (han.length !== 0){
    han = han.replace(' ', '')
    han.indexOf('=')
    if (han.indexOf('=') !== -1) {
      hanAa.push(han.split('='))
    }
  }
}

const obj = Object.fromEntries(hanAa);
console.log(obj)



