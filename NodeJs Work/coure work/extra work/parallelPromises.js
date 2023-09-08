const p1 = new Promise((resolve => {
  setTimeout(()=>{
    console.log('Async operation 1...');
    resolve(1);
  }, 5000);
}));

const p2 = new Promise((resolve => {
  setTimeout(()=>{
    console.log('Async operation 2...');
    resolve(2);
  }, 2000);
}));

// .all when we wanna return a result after all promises are completed.
Promise.all([p1, p2])
.then(result => console.log(result))


// we use Promis.race when we wanna show result after any one of promise  retuns something.