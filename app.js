"use strict";
const express = require('express');
const bodyPraser = require("body-parser");
const app = express();
const home = require("./src/routes/home");


app.use(express.static(`${__dirname}/src/public`));
//앱 세팅
app.set('views',"./src/views");
app.set("view engine",'ejs');
app.use(bodyPraser.json());
//url 전달되는 데이터 한글,컴머 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyPraser.urlencoded({extended : true}));

app.use("/",home);

module.exports = app;