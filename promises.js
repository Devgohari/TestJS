console.log('promises');
function fun1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (error) {   
                console.log('PROMISE RESOLVED');
                resolve()
            }
            else{
                console.log('PROMISE Rejected');
                reject()
            }
        }, 2000);
    })
}
fun1().then(function() {
    console.log("PROMISE HAS BEEN RESOLVEd");
}).catch(function() {
    console.log('PROMISE HAS BEEN Rejected');
})
