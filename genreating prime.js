// q 6 Write a program to generate Prime Numbers less than N and Generate ‘N’ Prime Numbers/ingivenrange.


for( var i = 0 ; i <= 100 ; i++) {

    var notAPrime = false ;

    for (var p = 2 ; p <= i ; i++) {
        if ( p%i===0 && p!==i) {
     notAPrime = true ;
        }
    }
    if (notAPrime === false ){
        console.log(i);
    }
}

