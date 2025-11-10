//(1)Create a promise that resolves with "Hello World" after 2 seconds.
// function main(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        resolve("Hello World");
//     },2000)
// })
// }main()
// .then((data)=>{console.log(data)
// })

//(2)Create a promise that rejects with "Error occurred" and handle it using .catch().
// function main(){
//    return new Promise((resolve,reject)=>{
//     let found=false;
//     if(found){
//     setTimeout(()=>{
//        resolve("Hello World");
//     },2000)
// }else{
//     reject("Error occured");
// }

// })
// }main()
// .then((data)=>{console.log(data)
// })
// .catch((error)=>{console.log(error)
// })

//(3)Make a promise that checks if a number is even. If yes → resolve "Even", else → reject "Odd".
// function main(value){
// return new Promise((resolve,reject)=>{
 
//  if(value%2==0){
//     resolve("Even") ;
//  }else{
//     reject("odd");
//  }
// })
// }main(9).then((data)=>{console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

//(4)Chain .then() to print data in uppercase.
// function main(){
// return new Promise((resolve,reject)=>{
// let text="hello world";
// resolve(text);
// })
// }main()
// .then((data)=>{console.log(data.toUpperCase());
// })

//(5)Create two promises and use Promise.all() to print results together.
// function main(){
// let promise1=new Promise((resolve,reject)=>{
//     resolve("hello");
// })

// let promise2= new Promise((resolve,reject)=>{
//  resolve("world");
// })
// return Promise.all([promise1,promise2])
// }main().then((data)=>{console.log(data);
// })