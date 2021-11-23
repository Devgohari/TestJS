console.log('Callbacks');
setTimeout(() => {
    console.log("yoyoyoy");
}, 5000);
function x(y) {
    console.log('funcXXXXXXX');
    y();
}
x(function y() {
    console.log("funcYYYYYYYYYY");
})
function trial() {
    let count = 0
}