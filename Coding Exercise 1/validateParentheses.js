// Coding exercise: You are tasked to write a checker that validates the parentheses of a LISP code.  Write a program (in Java or JavaScript) which takes in a string as an input and returns true if all the parentheses in the string are properly closed and nested.

function validateParentheses(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]==="("){
            count++;
        }

        if(str[i]===")"){
            count--;
        }
    }
    if(count === 0){
        console.log(true);
    }else{
        console.log(false);
    }
}

validateParentheses("(New)(patient list)(james, tim, sally)")
validateParentheses("(New)(patient list)james, tim, sally)")
