// RUN THIS FILE WHENEVER SAMPLE DATA IS NEED TO BE ADDED IN THE DATA BASE

const mongoose =require("mongoose");
const Chat=require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

}
 let allChats=[
        {
        from:"Neha",
        to:"Priya",
        msg:"send me your exam sheets",
        created_at:new Date(),  // Date()->It is a constructor of class Date which generates random dates. 
        },
        {
        from:"Vivek",
        to:"Pratik",
        msg:"Heloo Pratik Verma !! Nice to meet you",
        created_at:new Date(),
        },
        {
        from:"Vivek",
        to:"Amlan",
        msg:"Heloo Amlan Prasad Sahoo !! Nice to meet you",
        created_at:new Date(),
        },
        {
        from:"Vivek",
        to:"Rachna",
        msg:"Heloo Rachna Choubey !! Nice to meet you",
        created_at:new Date(),
        },
        {
        from:"Vivek",
        to:"Sahil",
        msg:"Heloo Sahil Kumar !! Nice to meet you",
        created_at:new Date(),
        },
        {
        from:"Vivek",
        to:"Varsha Jha",
        msg:"Heloo Varsha Jha !! Nice to meet you",
        created_at:new Date(),
        },
        {
        from:"Vivek",
        to:"Aditya Sinha",
        msg:"Heloo Aditya Sinha !! Nice to meet you",
        created_at:new Date(),
        },
        {
        from:"Vivek",
        to:"Farhan Azzam",
        msg:"Heloo Farhan Azzam !! Nice to meet you",
        created_at:new Date(),
        },
 ]

Chat.insertMany(allChats);

// chat1.save().then((res)=>{
//     console.log(res);
// });

