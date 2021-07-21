# SurgeRule
最好的分流规则是，国内走国内ip，国外走代理。
这个使用GeoIP2就可以搞定了
Geoip2 推荐使用
https://github.com/Hackl0us/GeoIP2-CN/tree/a97f6e835d7200731311540ab93edff5e1434d61
但是遇到了几个问题。

## 规则组的想法
一个选择性的规则组(Proxy)，走美国还是日本新加坡由自己选择


## 为什么要分流
一开始我也是用GeoIP就搞定了 但是遇到了几个问题

比如我在美国节点 Telegram(就很慢 延迟在300多)
新加坡就很快

还有我youtube 需要看不同地区的

google要搜索不同地区的

## 个人推荐走法
大部分人只能看懂 英文 所以美国节点走日常的

Telegram走新加坡

规则不够我后面会加的