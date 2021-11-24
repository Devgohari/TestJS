// function trial() {
//     let count = 0
//     document.getElementById('trial').addEventListener('click', ()=>{
//         console.log('clicked' , ++count);
//     })
// }
// trial()
// let a = 10;
// {
// let  a = 55;
//    console.log(a);
// }
// console.log(a);
// const myFirstPromise = new Promise((resolve, reject) => { 
//    const condition = true;   
//    if(condition) {
//         setTimeout(function(){
//             resolve("Promise is resolved!"); // fulfilled
//        }, 300);
//    } else {    
//        debugger
//        reject('Promise is rejected!');  
//    }
// });
setTimeout(() => {
    console.log('THIS IS TIMER');
}, 2000);