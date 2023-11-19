"use strict";

//모듈
const express = require("express");
const session = require('express-session');
const wep = express();

//라우팅
const home = require("./src/routes/home");

// 웹 세팅
wep.set("views", "./src/views");
wep.set("view engine", "ejs");

wep.use(express.static(`${__dirname}/src/public`));
wep.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = wep;