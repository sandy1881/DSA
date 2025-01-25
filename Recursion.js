const RecursivePrint = (num)=>{
  if(num <= 10){
  console.log(num);
  RecursivePrint(num+1);
  }
}
RecursivePrint(1);