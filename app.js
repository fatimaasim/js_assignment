// alert("Welcome to my website");

// alert("Error! Please enter a valid password");

// alert("Welcome to Js Land.... \nHappy Coding!");

// alert("Welcome to Js Land...")

// alert("Happy Coding!");

// alert ("Hello.... I can run Js on my browser's console");

var  username;
var myname="Syeda Fatima Asim";



var message="Hello World";
// alert(message);

// var student=["Areesha","16 years old","CS Engineering Student"]
// alert(student[0]);
// alert(student[1]);
// alert(student[2]);

// var name=["PIZZA"];

// alert(name+"\n"+name.slice(0,4)+"\n"+
// name.slice(0,3)+"\n"+name.slice(0,2)+"\n"+name.slice(0,1));

// var email="abc123@gmail.com";
// alert("My email address is"+" "+email);

// var book="A Smarter Way to learn Java Script";
// alert("I am trying to learn from a book"+" "+book);

// var a=" Yah ! I can write html content through JS"
// document.getElementById("demo").innerHTML=a;

// var str="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(str)

// var age=20
// alert("My age is "+20);

// var i=6;
// alert("You have visted the site" + " "+ i+"times");

// var birthYear="My birth Year is"+ 2000;

// document.getElementById("demo1").innerHTML=birthYear;

// var vistorsName="Fatima";
// var Prouct="Lawn Suits";
// var Quantity=7;

// document.getElementById("demo2").innerHTML=vistorsName+" "+"orderd"
// +" "+Quantity+Prouct+" "+"on XYZ clothing";


var uni,year,depart;
// 5 legal variables names

// var name;
// var age;
// var year;
// var dateOfBirth;
//  var $graduationYear;

// 5 illegal variables name

// var 1st;
// var in;
// var for;
// var while;
// var true;

document.getElementById("demo3").innerHTML="Variables name can only contain, numbers, $ and"+"_"
+"For example: $my_1stVariable";

document.getElementById("demo4").innerHTML="Variables must begin with a letter, $ or"+"_."
+"For example: $name,_name or name";

document.getElementById("demo5").innerHTML="Variables are case sensitive";
document.getElementById("demo6").innerHTML="Variables names should  not be JS keywords";


function add(){
   var num1=8;
   var num2=9;
   sum=num1+num2;
   
    document.getElementById("demo7").innerHTML= "The sum of " + " " +num1 +" "+
    "and" + " " +num2 +" "+ "is"+ " "+ sum;


}
add();

function sub(){
    var num1=8;
   var num2=9;
   subtract=num1-num2;
   
    document.getElementById("demo7").innerHTML= "The sum of " + " " +num1 +" "+
    "and" + " " +num2 +" "+ "is"+ " "+ subtract;



}
sub();

function multiply(){
    var num1=8;
    var num2=9;
    mul=num1*num2;
   
    document.getElementById("demo7").innerHTML= "The sum of " + " " +num1 +" "+
    "and" + " " +num2 +" "+ "is"+ " "+ mul;
}
multiply();

function divide(){
    var num1=8;
   var num2=9;
   div=num1/num2;
   
    document.getElementById("demo7").innerHTML= "The sum of " + " " +num1 +" "+
    "and" + " " +num2 +" "+ "is"+ " "+div;
}
divide();