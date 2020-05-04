// let programmingLanguages=["C++","Java","Python","C#.Net"];
// function alertToConsole()
// {
//     alert(programmingLanguages);
// }
// //alertToConsole(programmingLanguages);
function log(message) {
    var message1 = document.getElementById('div_m');
    console.log(message1.innerHTML);
    message.innerHTML = message.innerHTML + message + "<br>";
} 

// let employee=
// {
//     name:'Abhinav',
//     no:007,
//     age:24,
//     department:'Computer Science'
// }
// function abhinav()
// {
//     var temp=document.getElementById('mydiv').textContent='Employee '+employee.name+" is working in "+employee.department;
// }
//     abhinav()
//document.write('<p>')

var small =" 2+3";
// // document.getElementById('mydiv').append(small+" ");
// small = 10;
// // document.getElementById('mydiv').append(small+" ");
// small = 3213;
// document.getElementById('mydiv').append(small+" ");





log ( small );


//Learning promises in JavaScript
let promise=new Promise((resolve,reject)=>
{
    //Now we are giving a test condition to see the working of the promise. The resolve and reject are the condition to check 
    //whether we were able to keep the promise or broke it and accrordingly we take actions.
    let a=1+1;
    if(a===3)
    {
        resolve('Promise was completed succesfully :)');
    }
    else
    {
        reject('Promise was not able to be completed sorry :(');
    }
})
//Now we make functions to ensure correct flow of our program.
promise.then
(
    (message)=>console.log('Message is'+message)
).catch
(
    (message)=>console.log('Message is'+message)
)
//As we saw we have a then in which we execute the statements in case we complete the promise and also we have a catch in which
// we execute statements in case we are not able to keep up the promise we made, also please note we are using the arrow 
//functions syntax in the following demonstration we could have also used annonymous functions but for the time being we are 
// sticking to arrow function feel free to use the latter

