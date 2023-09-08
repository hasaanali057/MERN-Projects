const { result } = require("underscore");

// promise always returns somthing. value or error from an async operations
// we use them catch block to get the work done
const p = new Promise ((resolve, reject)=> {
  // kick off some async work
  // ...
  setTimeout(()=> {
    //resolve(1);
    reject(new Error('Error message')); 
  }, 2000)

})
.then(result => console.log("result: ", result))
.catch(err => console.log('Error: ', err.message));


// replacing callbacks with promises
// function getUser (id, callback){
//   setTimeout(()=>{
//     console.log('Reading a user from DataBase');
//     callback({id: id, gitHubUsername:'Hasaan'});
//   },2000);
// }

// converting to promises. getUser will return a promise
function getUser (id){
  return new Promise(function (resolve, reject){
    setTimeout(()=>{
      if(id>=20) resolve({id: id, gitHubUsername:'Hasaan'});
      else reject( new Error('Id should be greater than or equal to 20'));
    },2000);
  })
  .then(result => console.log(result))
  .catch(err => console.log(err.message));
}
getUser(2);
