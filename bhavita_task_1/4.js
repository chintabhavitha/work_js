//display only elements containing 'a' in them from a array
let element = (arr) => {
   for(i=0;i<arr.length;i++){
      var y = arr[i]
      for(j=0;j<y.length;j++){
          if(y[j]=="a"){
            console.log(y); 
            break;
          }     
        }
    }
}
element(["bhavitha",1234,"hyyy"]);