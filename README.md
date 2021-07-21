# SurgeRule
最好的分流规则是，国内走国内ip，国外走代理。  
这个使用GeoIP2就可以搞定了  
Geoip2 推荐使用  
https://github.com/Hackl0us/GeoIP2-CN/tree/a97f6e835d7200731311540ab93edff5e1434d61
但是遇到了几个问题。  
比如我在新加坡节点 Telegram(就很慢 延迟在500多)  
美国就很快(延迟在300多)  
这个时候就要考虑到分流
## 规则组的想法
一个选择性的规则组(Proxy)，走美国还是日本新加坡由自己选择


## 分流规则
Telegram 走美国
奈非根据自己喜欢的地区走
YouTube和Google也是
## 个人推荐走法
大部分人只能看懂 英文 所以美国节点走日常的

Telegram走

规则不够我后面会加的