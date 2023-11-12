"use strict";

const wep = require("../wep");
const PORT = 3000;

wep.listen(PORT, () => {
    console.log("서버 가동");
});