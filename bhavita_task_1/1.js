//search for a particular character in a string
let sea = (input) =>{
 var newstring = input.search("i");
 if(newstring>=0){
     console.log(newstring);
 }
 else{
     console.log("character not found");
 }
};
sea("bhavitha");
