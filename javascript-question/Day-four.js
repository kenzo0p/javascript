function checkTriangleType(a,b,c){
    if(a===b && b===c && a===c){ //a===b && b===c
        console.log("Equilateral Triangle");
    }else if(a===b || b===c || a===c){
        console.log("Isosceles Triangle");
    }else {
        console.log("Scalene Traingle");
    }
}

checkTriangleType(3,78,8);