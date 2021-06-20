//Question 1
function is_array(arr) {
    return(Array.isArray(arr));
}
console.log(is_array('w3resource'));  //false
console.log(is_array([1, 2, 4, 0]));  //true

//Question 2
num = ["1" , "2" ,"3" , "4" ,"5"];
num2 = Array. from (num);
console.log(num2); //0: "1" 1: "2" 2: "3"3: "4" 4: "5"

//Question 3
function function3(a,n){
    if(n==null)
    {
        return a[0];
    }
    else
    // a.slice(0,5);
    return (a.slice(0,n));
}
console.log(function3([7, 9, 0, -2]));
console.log(function3([],3));
console.log(function3([7, 9, 0, -2],3));
console.log(function3([7, 9, 0, -2],6));
console.log(function3([7, 9, 0, -2],-3));

//Question 4
