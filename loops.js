var array=[];

function forLoop(array){

  for(let i = 0; i<25; i = i++){
    var t= i+1;
    if (i==0){
      array[i]="I am 1 strange loop.";
    } else{
    array[i]=`I am ${t} strange loops.`;
    }
  }
  return array;
}

function whileLoop(n){
  while(n>0){
    console.log(n);
    n--;
  }
  return "done";
}

function doWhileLoop(array){
  var i = 0;
  function maybeTrue(){
    return Math.random()>=0.5
  }

  do{

    array.pop();

  }while(maybeTrue() ||  array.length > 0);
}

// forLoop(array);
whileLoop(5);
doWhileLoop(array);
