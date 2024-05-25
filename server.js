/* This code snippet is a basic Node.js application using Express framework to create a simple API for
file operations. Here's a breakdown of what the code does: */
import express from "express";
import fs from 'fs';
import {format} from 'date-fns';

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/create',(req,res)=>{
    let today = format(new Date(),'dd-mm-yyyy-HH-mm-ss')
    //console.log(today);
    const filepath = `Timestamps/${today}.txt`;
    fs.writeFileSync(filepath,`${today}`,'utf8');
    res.status(200).send("File Created");
})

app.get('/read',(req,res)=>{
    const TimestampsDir = 'Timestamps';
    try{
        const files = fs.readdirSync(TimestampsDir);
    //  console.log(files); files stores all files in the directory 
        let Data = []; 
        files.forEach((file)=>{
            const filepath = `${TimestampsDir}/${file}`;
            const fileData = fs.readFileSync(filepath,'utf8')
            Data.push({fileName:file,FileContent:fileData});
        })
        res.status(200).json(Data);
    }catch(err){
        console.error('Error reading directory:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT,()=>{
    console.log(`App is running on port  ${4000}`);
});