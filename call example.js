
function foo() {
    console.log(this.a)

}
var obj ={
    a:2,
};
foo.call(obj);


function foo() {
    console.log(this.a)

}
var obj ={
    a:2,
};
foo.bind(obj);


Array.prototype.push = function(element) {

}
var array = [];

array.push.apply(array,[1,2,3]);

these all are expicity function//in this function you call a function with the obejcts name