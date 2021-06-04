const express = require('express');
const router = express.Router();

router.get(['/','/home'],(req, res)=>{
    res.json({text: 'Hi this is welcome home page'});
});

module.exports = router;