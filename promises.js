console.log('promises');
function fun1(cb1, cb2) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {   
                console.log('PROMISE RESOLVED');
                cb1()
            }
            else{
                console.log('PROMISE Rejected');
                cb2()
            }
        }, 2000);
    })
}
function cb1() {
    console.log("PROMISE HAS BEEN RESOLVEd");
}
function cb2() {
    console.log("PROMISE HAS BEEN REJECT");
}
fun1(cb1, cb2)