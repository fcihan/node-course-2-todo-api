//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if(err){
  return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Todos').find({
//   _id:new ObjectID('59d3709efcc3861d809e9480')
// }).toArray().then((docs)=>{
//
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//
//   console.log('Unable to fech todos',err);
// });


// db.collection('Todos').find().count().then((count)=>{
//
//   console.log(`Todos count:${count}`);
//
// },(err)=>{
//
//   console.log('Unable to fech todos',err);
// });

db.collection('Users').find({name:'Cihan'}).toArray().then((docs)=>{

  console.log('Users you are looking for');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{

  console.log('Unable to fech todos',err);
});


//db.close();
});
