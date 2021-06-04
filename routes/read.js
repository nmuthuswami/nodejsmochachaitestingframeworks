const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/getDirectoryDetails',(req, res)=>{
    fs.readdir("C:\\Nirmal\\My Learnings\\ninja\\Source_Files",(err,data)=>{
        if(err) console.error(err.stack);

        var fileDetails= [];

        data.forEach(file=>{
            fileDetails.push({"fileName": file});
        });
        res.json({fileDetails});
    });
   
});

router.get('/getFileContent/:fName',(req,res)=>{
    let fileName = req.params.fName;
    if(!fileName || fileName == "") res.json({"error":"Filename is not specified in the querystring"});
    else{
        fs.readFile("C:\\Nirmal\\My Learnings\\ninja\\Source_Files" + "\\" + fileName,(err, data)=>{
            if(err) console.error(err.stack);
            var fileContent=[],fileChunk={};
            var slitContent = data.toString().split('\r\n');
            
            for(let i=0;i<=slitContent.length;i++){
                if(slitContent[i]){
                    let splitKeyValue = slitContent[i].split(":");
                    fileChunk[splitKeyValue[0]] = splitKeyValue[1].trim();
                    if(splitKeyValue[0] == "mobile"){
                        fileContent.push(fileChunk);
                        fileChunk={};
                    }
                }
            }            
            res.json({"fileContents": fileContent});
        });
    }
});

module.exports = router;