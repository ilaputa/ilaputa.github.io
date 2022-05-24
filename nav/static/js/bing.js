/***
 +----------------------------------------------------------------------
 | Copyright (c) 2021 https://wwww.laputa.icu All Rights Reserved.
 +----------------------------------------------------------------------
 | Licensed ( https://laputa.icu )
 +----------------------------------------------------------------------
 | Author: Nathan
 +----------------------------------------------------------------------
 ***/
console.log("\n %c  %c https://laputa.icu \n", "color: #ffffff; background: #f1404b; padding:5px 0;", "background: #030307; padding:5px 0;");

var imgArr = [
    './nav/img/00.jpg',
    './nav/img/01.jpg',
    './nav/img/02.jpg',
    './nav/img/03.jpg',
    './nav/img/04.jpg',
    './nav/img/05.jpg',
    './nav/img/06.jpg',
    './nav/img/07.jpg',
    './nav/img/08.jpg',
    './nav/img/09.jpg',
    './nav/img/10.jpg',
    './nav/img/11.jpg',
    './nav/img/12.jpg',
    './nav/img/13.jpg',
    './nav/img/14.jpg',
    './nav/img/15.jpg',
    './nav/img/16.jpg',
    './nav/img/17.jpg',
    './nav/img/18.jpg',
    './nav/img/19.jpg',
    './nav/img/20.jpg',
    './nav/img/21.jpg',
    './nav/img/22.jpg',

    './nav/img/01.png',
    './nav/img/02.png'
]
bgImg = imgArr[Math.floor(Math.random() * imgArr.length)];
$('.img-bg').css('background-image', 'url(' + bgImg + ')');
var theme = {
    "ajaxurl": "",
    "addico": "/static/index/picture/add.png",
    "order": "asc",
    "formpostion": "top",
    "defaultclass": "io-grey-mode",
    "isCustomize": "1",
    "icourl": "",
    "icopng": ".png",
    "urlformat": "1",
    "customizemax": "10",
    "newWindow": "0",
    "lazyload": "1",
    "minNav": "1",
    "loading": "1",
    "hotWords": "baidu",
    "classColumns": " col-sm-6 col-md-4 col-xl-5a col-xxl-6a ",
    "apikey": ""
};
var localize = {
    "liked": "您已经赞过了!",
    "like": "谢谢点赞!",
    "networkerror": "网络错误 --.",
    "selectCategory": "为什么不选分类。",
    "addSuccess": "添加成功。",
    "timeout": "访问超时，请再试试，或者手动填写。",
    "lightMode": "日间模式",
    "nightMode": "夜间模式",
    "editBtn": "编辑",
    "okBtn": "确定",
    "urlExist": "该网址已经存在了 --.",
    "cancelBtn": "取消",
    "successAlert": "成功",
    "infoAlert": "信息",
    "warningAlert": "警告",
    "errorAlert": "错误",
    "extractionCode": "网盘提取码已复制，点“确定”进入下载页面。"
};