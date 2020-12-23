// function to search for a element in a array of strings
var search = (s)=>{
    let arr = new Array("js" , "element" , "string")
    //  var s = "js";
     for(var i = 0; i < arr.length; i++){
        if(arr[i] == s){
            console.log(i);
        }
     }
} 
search("js");    