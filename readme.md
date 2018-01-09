# 工具方法
```
const tools = require('zhf.tools');

tools.typeOf(123); // 'number'

tools.fillZero(9, 2); // '09'
tools.fillZero(9, 3); // '009'

tools.keepDecimal(10, 2); // '10.00'
tools.keepDecimal(10, 3); // '10.000'
tools.keepDecimal(1000, 3); // '1,000.000'
tools.keepDecimal(1000, 3, false); // '1000.000'

其他方法请参阅源码0.0
```
