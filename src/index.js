// 工具方法集合
function Tools() {
}

Tools.prototype.typeOf = require('zhf.type-of'); // 判断类型
Tools.prototype.extend = require('zhf.extend'); // 对象的扩展
Tools.prototype.objRemoveQuote = require('zhf.obj-remove-quote'); // 对象移除引用
Tools.prototype.constructorInherit = require('zhf.constructor-inherit'); // 面向对象继承
Tools.prototype.arrayRemoveRepeat = require('zhf.array-remove-repeat'); // 数组去重
Tools.prototype.secondsToTime = require('zhf.seconds-to-time'); // 秒转时间
Tools.prototype.timeCountDown = require('zhf.time-count-down'); // 倒计时
Tools.prototype.jsonToArray = require('zhf.json-to-array'); // json转数组
Tools.prototype.fillZero = require('zhf.fill-zero'); // 补零函数
Tools.prototype.strToHump = require('zhf.str-to-hump'); // 字符串转驼峰
Tools.prototype.randomNum = require('zhf.random-num'); // 随机数
Tools.prototype.checkStr = require('zhf.check-str'); // 检测字符串里是什么类型的值
Tools.prototype.queryString = require('zhf.query-string'); // 解析URL查询字符串
Tools.prototype.keepDecimal = require('zhf.keep-decimal'); // 保留几位小数
Tools.prototype.dateFormat = require('zhf.date-format'); // 日期格式化
Tools.prototype.isLeapYear = require('zhf.is-leap-year'); // 检测是否是闰年

/**
 * 使用innerHTML的时候,又不想渲染标签,可以使用这个方法过滤一下,或者使用innerText
 * */
Tools.prototype.strEncode = function (str) {
    if (Object.prototype.toString.call(str).slice(8, -1).toLowerCase() !== 'string') {
        return '';
    }
    const arr = str.split('');
    arr.forEach(function (v, i, a) {
        if (v === '>') {
            a[i] = '&#62;';
        }
        if (v === '<') {
            a[i] = '&#60;';
        }
    });
    return arr.join('');
};

/**
 * @description 字符串限制最大长度
 * @param {String} str - 字符串
 * @param {Number} maxLength - 限制最大长度
 * */
Tools.prototype.strLimitLength = function (str, maxLength) {
    if (!str) {
        return '';
    }
    if (Number(str.length) > maxLength) {
        str = str.substring(0, maxLength);
    }
    return str;
};

// 输出
module.exports = new Tools();
