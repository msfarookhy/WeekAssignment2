function foo() {
    console.log(this.a)

}
 var obj ={
    a:2,
 };
foo.apply(obj)

// when you call function after obejct it knwn as implicity