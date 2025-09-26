//taska
function hi(){
let name=prompt("Enter ur name");
let age=prompt("Enter ur age");
let a=Number(age);
if (a>=18){
    alert("Hello "+name + " you are eligible to vote");
}
else {
    alert("Sorry"+ name+ ", you are not eligible to vote");
}

let again = confirm("Do you want to check again?");
    if (again) {
        hi();
    } else {
        alert("Goodbye! 👋");
    }
}
hi()


