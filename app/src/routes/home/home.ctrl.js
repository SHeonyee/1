"use strict";

// 컨트롤러
const home = (req, res) =>  { // => 는 function과 같음
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = { 
    home,
    login,
};