//Q 7 Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz"instead of the number and for the multiples of '5' print "Buzz"

for (var i=1; i <= 100; i++) {
    if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
}