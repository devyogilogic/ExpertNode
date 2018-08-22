function armstr()
{
var arm=0,a,b,c,d,num;
var count=Number(0)
var result=[]
var i=Number(0)
num=Number(process.argv[2])
var number2=Number(process.argv[3])
for(i= num;i<=number2;++i){

    temp=i;
    while(temp>0)
    {
    a=temp%10;
    temp=parseInt(temp/10); 
    arm=arm+a*a*a;
    
    }
   let ad = arm
   arm=0 
    if(ad==i)
{
result[count]=i
console.log(result[count])
++count


}
    
}



}
armstr()
