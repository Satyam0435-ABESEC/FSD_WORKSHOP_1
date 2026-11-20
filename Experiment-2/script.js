//firstly import fs(file system) module in your program 
const fs=require("fs");

//create file and also write some content in that file
fs.writeFile("student.txt","Hello, This file is for students.",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File is created successfully!")
    }
});

//now reading file content 
fs.readFile("student.txt","utf-8",(err,data)=>{
if(err){
    console.log("err");
}
else{
    console.log("Content of file :-");
    console.log(data);
}
});

//Update a file using appendFile method,it will only add extra content in already existed file
fs.appendFile("student.txt"," File of CSE 3rd semester file",(err)=>{
if(err) throw err
else{
    console.log("File is succesfully updated");
}
});

//Finally delete the file
fs.unlink("student.txt",(err)=>{
if(err) throw err
else{
    console.log("File is successfully deleted!")
}
});