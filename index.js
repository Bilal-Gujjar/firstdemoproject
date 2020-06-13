//alert("Hellow world")
//alert("Peak time is running please wait for 5 s")
//var a;
//a = 36;
//console.log(a+20)
//var age = 21; 
//var name = "Hello world";    
//var isFeepaid = false;
//console.log(typeof age);
//console.log(typeof name);
//console.log(typeof isFeepaid);
//isFeepaid = 70;
//console.log(typeof isFeepaid);
//var a = 6 ;var b =4;var c = a+b;alert(a);alert(b);alert(c);
//var name = prompt("what is your name" , "Gujjar");
//console.log(name);
//var age = prompt("what is your age");
//console.log(age);
//var a = 6 ;
/*var b = "5" ;
var c = a+b;
console.log(c);
var a = 6 ;
var b = prompt("What is your age?", "10") ;
var c = parseInt(b);
var d = a+c;
var c = a+parseInt(b);
console.log(c);
console.log(d);

var a = 6 ;
var b = prompt("What is your age?", "10") ;
var c = Number(b);
var d = a+c;
var c = a+Number(b);
console.log(c);
var a = 5;
var b = 6;
console.log(a===b);
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

and operater

var a = 5;
var b = 6;
 
var c = a < b && b < 10 && b == 4 ;
console.log(c)

var a = 5;
var b = 6;P
var c = a < 10 || a > 20
console.log(c)
NOT Operator
var a = 50;
var b = a < 100;
var c = !b;
var d = !(a < 100);
console.log("A = "+a);
console.log("B = "+b);
console.log("C = "+c);
console.log("D = "+d);


var a = -5;
var b = !a;
var c = !!a;
console.log("A = "+a)
console.log("B = "+b)
console.log("C = "+c)
************If-else********
var age = 50;
if (age < 60){ 
    console.log("In if Age "+age);
    console.log("Hellow World")
}
else{
    console.log("In else Age "+age); 
}
************else-if***************
var score = prompt("What is your score");
score=parseInt(score)
if (score > 80) {
    console.log("Grade A")
}
else if(score > 70){
    console.log("Grade B")
}
else if(score > 60){
    console.log("Grade C")
}
else if(score >= 50){
    console.log("Grade D")
}
else if(score >= 40){
    console.log("Grade E")
}
else {
    console.log("Failed!")
    
}
************Nested-If***********

var score = prompt("What is your scrore")
score = parseInt(score)
if (score > 80) {
    console.log("Passed Grade A");
    if (score >= 90) {
         console.log("Reward 100 $");
    }
    else if (score >= 85) {
        console.log("Reward 50$");
    }
    else {
        console.log("Reward 20$");
    }
}
else{
    console.log("Failed!!");
}

var alphabet = prompt("Enter the Alphabet and Check the vowel")
if (alphabet == "A" || alphabet == "E" || alphabet == "I" || alphabet == "O" || alphabet == "U")
    {console.log("it is the Vowel");
 
} else {
    console.log("It is a consonats");
}
**************For Loop******
var num = prompt("Enter the Number");
num = parseInt(num)
for (var i=1;i<10;i++ ){
    console.log(num + "x"+i+"="+(num * i));
}
***************** Break and continous *************
console.log("Before");

for (var i=0;i<5;i++){
    if (i == 3) {
        continue;
    }
    console.log("I = "+i);
}
console.log("After");
***************Task --- Prime Number**********

var num = parseInt(prompt("enterr"));
var isprime = true;
for(var i=2;i<num;i++){
    var result = num%i;
    if(result==0){
        console.log("Number is not prime = "+num +" I " +i);
        isprime = false;
        break;
    }/*
    else{
        console.log("Number is prime "+num + "I = "+i);
        
    }*/

/*   
if(isprime==true){
    console.log("Number is prime  " +num);    

}
*
var food = ["Pizza","Burger","Sandwich"];
var food2 = new Array("Pizza","Burger","Sanwich");

var a = food[0];
var b = food[1];
alert(a);
alert(b);
alert(food[2]);
***********Arry********

var arr1 =[23,45,56,78,12,45];
var arr2 = [true.false,true,false,true];

var arr3 = [23,"Hello world",true];
var arr4 = [{name:"ALi"},{name:"khan"}];
console.log(arr1[3]);
console.log(arr3[2]);
*

var food = ["Pizza","Burger","Snacks"];
//alert(food);
console.log(food);
console.log(food[4]);
**********Add value in Arry***********/ 
var food = [];
console.log(food);

food[0]= "pizza";
food[1]="Burger";
food[2]="snakes";
/*console.log(food);
console.log(food[2]);
console.log(food[223]);
food[8]="Sandwitch";
console.log(food);*/
food[1]="bbr"
console.log(food[1]);
console.log(food[8]);



















alert("100 Compeled ----   81  Opitional          ");
