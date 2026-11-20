const fs=require("fs");

//creating 
 fs.writeFile("data.txt","Hello, This file is for students.",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File is created successfully!")
    }
});

//reading 
fs.readFile("data.txt","utf-8",(err,data)=>{
if(err){
    console.log("err");
}
else{
    console.log("Content of file :-");
    console.log(data);
}
});

//Updating
fs.appendFile("data.txt"," File of CSE 3rd semester file",(err)=>{
if(err) throw err
else{
    console.log("File is succesfully updated");
}
});

//deleting
fs.unlink("data.txt",(err)=>{
if(err) throw err
else{
    console.log("File is successfully deleted!")
}
});