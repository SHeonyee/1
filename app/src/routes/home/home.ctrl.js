"use strict";

// 컨트롤러
// => 는 function과 같음

const output = {
    home: (req, res) =>  { 
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["dltmdgjs", "hello", "나에요"],
    passwd: ["1234", "1234", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
          passwd = req.body.passwd;

        if (users.id.includes(id)) {
         const idx = users.id.indexOf(id);
         if (users.passwd[idx] === passwd) {
            return res.json({
                success: true,
            });
         }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    }, 
}

module.exports = { 
    output,
    process,
};