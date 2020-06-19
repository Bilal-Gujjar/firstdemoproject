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
**********Add value in Arry***********
var food = [];
  console.log(food);

food[0]= "pizza";
food[1]="Burger";
food[2]="snakes";
/*console.log(food);
console.log(food[2]);
console.log(food[223]);
food[8]="Sandwitch";
console.log(food);
food[1]="bbr"
console.log(food[1]);
console.log(food[8]);
*
*********Arry.push*******
var food = [];
food.push(prompt("Enter 1st Item"))
food.push(prompt("Enter 2st Item"))
food.push(prompt("Enter 3st Item"))
food.push(prompt("Enter 4st Item"))
console.log(food);
console.log(food[2]);*
console.log("Before");

for (var i= 0; i<3;i++){
    for(var j=0;j<2;j++){
    console.log("I = "+i+" J = "+j);
    }
    
}
console.log("After");
*************Stack************
var food = []
food.push("Pizza");
food.push("NAN");
food.push("Chicken");
console.log(food);
console.log("Lenght = "+food.length);
var a1 = food.pop()
var a2 = food.pop()
console.log(food);
console.log("Length = "+food.length);
console.log(a1);
console.log(a2);
food.push("Burgr");
console.log(food);
console.log("Length = "+food.length);
*******************Queue****************
var food = [];
food.push("Pizza");
food.push("Burger");
food.push("Sbacks");
console.log(food);
console.log("Length = " +food.length);
var a = food.shift();
console.log(food);
console.log("Length = " +food.length);
**************UNshift**********
var food = ["Piazza","BArger","Snacks"];
console.log(food);
food.unshift("Sandwich");
console.log(food);
console.log(food[0]);
****************Arry with loops**********

var food = ["Pizza","Burger","Snacks",1,78,54,5,6];

for(var i=0; i < food.length; i++){
    console.log(food[i]);
    
}
var arr = [34,23,56,87,1,45,88];

var input = parseInt(prompt("Enter the number"));
console.log("User Input ",input);

for(var i=0;i<arr.length;i++){
    //console.log(arr[i]);
    if(arr[i] === input){
        console.log("Found "+input+" on the Index = "+i);}
    else{
        console.log("Not found");
        
    }    
 
         
}
************Splice function***********
var food = ["Pizza","Burger","Snacks","Fries"];
console.log(food);
var arr = food.splice(1,2,"Sandwich");
console.log(food);
console.log(arr);

*******************String/leanght******
var a = "hello World";
alert(a.length);
********Escape Chratarter***************
var a = "Hello World"
var b = "Hello \"World"
var c = "Hello\nWorld"
var d = "Hello \'World'"
console.log(a);
console.log(b);
console.log(c);
console.log(d);
*************Lower and UPper case **************
var food = "Pizza";
var input ="pizza"
if (food.toLowerCase()=== input.toLowerCase() ){
    console.log("Match");
    
}
else{
    console.log("Not Match");
    
}
***********String Sclice**************
var a ="Hello World"
var b = a.slice(-5,-2);
console.log(b);

****************indexOF************
var a = "To be or not to be";
console.log("length = "+a.length);

var b = a.indexOf("not")
console.log(b);

var a = "To be or not to be";
var b = a.lastIndexOf("or",5)
console.log(b);
*************Random Function***********
var a = Math.random()
console.log("A = "+a);

var num1 = a * 6 ;
console.log("Num1 = "+num1);


var num2 = num1 +1 ;
console.log("Num2 = "+num2);

var num3 = Math.floor(num2);
console.log("Num3 = "+num3);
******toFixed Function***********
var a = (12+22+39)/3
console.log(a.toFixed(3));
*******Data Object**********
var d = new Date();
console.log(d);
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getUTCFullYear());
d.setFullYear(2021);
console.log(d);
d.setHours(15);
console.log(d);
***************Function************
console.log("Before F");

function showMassage() {
    console.log("Hello World");
    
}
console.log("After F");

showMassage();
console.log("After function call");

*
function sun(a,b) {
    console.log(a+b);
    
    
}
sun(4,5);
sun(6,1);
sun(14);

function findGrade(score) {
    if (score> 80 && score <=100) {
        console.log("Grade B");
    } else if (score>70 && score <=80) {
        console.log("Grade B");}

      else if (score>60 && score <=70) {
          console.log("Grade C");
      }     
      else{
          console.log("Grade F");   
      }     
}
findGrade(12);
findGrade(90);        
findGrade(81);



 function calcuteScore(sub1,sub2,sub3) {
     return (sub1+sub2+sub3) / 3 ; 
     
 }
function findGrade(score) {
    if (score> 80 && score <=100) {
        console.log("Grade A");
    } else if (score>70 && score <=80) {
        console.log("Grade B");}

      else if (score>60 && score <=70) {
          console.log("Grade C");
      }     
      else{
          console.log("Grade F");   
      }     
}
findGrade(12);
findGrade(90);        
findGrade(81);

var score1 = calcuteScore(45,67,89);
var score2 = calcuteScore(87,95,72);
console.log("Score "+score1);
console.log("Score "+score2);
findGrade(score1)
findGrade(score2)
*/


  











































//alert("139 Compeled ----   81  Opitional          ");
