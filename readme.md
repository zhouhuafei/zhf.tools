# 工具方法
* 此包不在维护，不建议使用此包。需要哪个包就引入哪个包即可。不应该像现在这样把其他包整合到这个包里，导致里面有任何包更新，我这个包都需要跟着更新一下，增加了维护成本
```
const tools = require('zhf.tools');

tools.typeOf(123); // 'number'

tools.fillZero(9, 2); // '09'
tools.fillZero(9, 3); // '009'

tools.keepDecimal(10, 2); // '10.00'
tools.keepDecimal(10, 3); // '10.000'
tools.keepDecimal(1000, 3, true); // '1,000.000'
tools.keepDecimal(1000, 3, false); // '1000.000'

tools.extend({a: 1, c: [1, 2]}, {b: 2, c: [3]}); // { a: 1, b: 2, c: [3, 2] }

其他方法请参阅源码0.0
```
