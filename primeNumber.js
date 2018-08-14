function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num !== 1;
<<<<<<< HEAD
}
isPrime(3); // it'll print the value as true .
=======
}
>>>>>>> a882c929e87f9a271d7ea868d39b7fed602b795f
