"use strict";

//모듈
const express = require("express");
const session = require('express-session');
const bodyParser = require("body-parser");
const wep = express();

//라우팅
const home = require("./src/routes/home");

// 웹 세팅
wep.set("views", "./src/views");
wep.set("view engine", "ejs");
wep.use(express.static(`${__dirname}/src/public`));
wep.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
wep.use(bodyParser.urlencoded({ extended: true }));

wep.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = wep;