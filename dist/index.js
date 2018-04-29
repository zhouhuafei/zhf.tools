'use strict';

// 工具方法集合
function Tools() {}

Tools.prototype.typeOf = require('zhf.type-of'); // 判断类型
Tools.prototype.extend = require('zhf.extend'); // 对象的扩展
Tools.prototype.objRemoveQuote = require('zhf.obj-remove-quote'); // 对象移除引用
Tools.prototype.constructorInherit = require('zhf.constructor-inherit'); // 面向对象继承
Tools.prototype.arrayRemoveRepeat = require('zhf.array-remove-repeat'); // 数组去重
Tools.prototype.secondsToTime = require('zhf.seconds-to-time'); // 秒转时间
Tools.prototype.timeCountDown = require('zhf.time-count-down'); // 倒计时
Tools.prototype.fillZero = require('zhf.fill-zero'); // 补零函数
Tools.prototype.jsonToArray = require('zhf.json-to-array'); // json转数组
Tools.prototype.strToHump = require('zhf.str-to-hump'); // 字符串转驼峰
Tools.prototype.randomNum = require('zhf.random-num'); // 随机数
Tools.prototype.checkStr = require('zhf.check-str'); // 检测字符串里是什么类型的值
Tools.prototype.queryString = require('zhf.query-string'); // 解析URL查询字符串
Tools.prototype.keepDecimal = require('zhf.keep-decimal'); // 保留几位小数
Tools.prototype.dateFormat = require('zhf.date-format'); // 日期格式化
Tools.prototype.isLeapYear = require('zhf.is-leap-year'); // 检测是否是闰年
Tools.prototype.howManyDays = require('zhf.how-many-days'); // 某年某月有多少天
Tools.prototype.createUniqueChar = require('zhf.create-unique-char'); // 生成唯一字符
Tools.prototype.htmlEncode = require('zhf.html-encode'); // 把html里面的尖括号字符转义成十进制编码
Tools.prototype.dataType = require('zhf.data-type'); // 数据类型检测
Tools.prototype.multipleCalls = require('zhf.multiple-calls'); // 至少调用多次才会触发函数

// 输出
module.exports = new Tools();