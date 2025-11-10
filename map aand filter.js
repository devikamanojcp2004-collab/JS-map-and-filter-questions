//1.double the number

// let arr=[1, 5, 2, 8]
// let result=arr.map((value)=>console.log(value*2));

//2.Input: [{first: 'Alice', last: 'Smith'}, {first: 'Bob', last: 'Johnson'}, {first: 'Charlie', last: 'Brown'}]
//Task: Create a new array of strings containing the full name (first name and last name, separated by a space) for each person.
// Expected Output: ['Alice Smith', 'Bob Johnson', 'Charlie Brown']

// let arr=[{first: 'Alice', last: 'Smith'}, {first: 'Bob', last: 'Johnson'}, {first: 'Charlie', last: 'Brown'}];
// let result=arr.map((value,index)=>console.log(value.first,value.last));

// 3.Input: [3, 0, 4, 2]
// Task: Create a new array where each number is first squared and then has 1 added to it.
//Expected Output: [10, 1, 17, 5] (since 32+1=10, 02+1=1, etc.)

// let arr=[3, 0, 4, 2];
// let result=arr.map((value)=>(value*value)+1);
// console.log(result);

//4.find the length of each value
// let arr=["hii","helloo","good"];
//let result=arr.map((value)=>{console.log(value.length);
//})

// 1.Filter Even Numbers:
// Input: [12, 5, 8, 17, 20, 3]
// Task: Create a new array containing only the even numbers.
// Expected Output: [12, 8, 20]

// let arr=[12, 5, 8, 17, 20, 3];
// let result=arr.filter((value)=>value%2==0);
// console.log(result);

// 2.Filter Long Strings:
// Input: ['cat', 'dog', 'elephant', 'mouse', 'giraffe']
// Task: Create a new array containing only the strings that have a length of 5 or more characters.
// Expected Output: ['elephant', 'mouse', 'giraffe']

// let arr=['cat', 'dog', 'elephant', 'mouse', 'giraffe'];
// let result=arr.filter((value)=>value.length>=5);
// console.log(result);

// 3.Filter Active Users:
// Input: [{name: 'A', isActive: true}, {name: 'B', isActive: false}, {name: 'C', isActive: true}]
// Task: Create a new array containing only the user objects where the isActive property is true.
// Expected Output: [{name: 'A', isActive: true}, {name: 'C', isActive: true}]

// let arr= [{name: 'A', isActive: true}, {name: 'B', isActive: false}, {name: 'C', isActive: true}];
// let result=arr.filter((value)=>value.isActive==true);
// console.log(result);



