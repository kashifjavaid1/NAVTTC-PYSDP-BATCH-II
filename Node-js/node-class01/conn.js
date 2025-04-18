// let MongoClient=require('mongodb').MongoClient;

// alternate
let {MongoClient}=require('mongodb');
let url="mongodb://127.0.0.1:27017/";
let client=new MongoClient(url);
let dataBase="mydb";
let table="students";

async function getData(){
let results=await client.connect();
let data=results.db(dataBase);
let collect=data.collection(table);

return collect
}
module.exports=getData;