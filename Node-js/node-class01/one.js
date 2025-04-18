let getData=require('./conn.js');

const main=async()=>{
  let showData=await getData();
  let data=await showData.find().toArray();
  console.log(data);
  
}
main();

// Insert Data

// const insertStudent=async()=>{
//     let addStudent=await getData();
//     let data=await addStudent.insertOne({name:"hamza",age:20,city:"faisalabad"});

    
// }
// insertStudent()


// Delete 
// const deleteStudent=async()=>{
//     let deletestu=await getData();
//     let data=await deletestu.deleteOne({name:"hamza"})
//     console.log("delete user",data);
    
// }
// deleteStudent();

// Update

// const updateStudent=async()=>{
//     let update=await getData();
//     let data=await update.updateOne({name:"Ali"},{$set:{name:"Ahmad"}});
//     console.log("update");
    
// }
// updateStudent();