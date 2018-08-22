var decimal_number=123
var count = 0
var result=[]
if(decimal_number%2==0){
    result[0]=0
    console.log(result[0])
}
else {
    result[0]=1
}

decimal_number=parseInt(decimal_number/2)
console.log(typeof decimal_number)
for(var i=Number(1);decimal_number!=0;++i){
    if(decimal_number%2==0)
    result[i]=0;
    else if (decimal_number==1)
    result[i]=1
    else
    result[i]=1
    decimal_number=parseInt(decimal_number/2)
    ++count
}
//console.log(count)
var len= count
while(len>=0){
    console.log(result[len])
    --len
}

