function armstr()
{
var arm=0,a,b,c,d,num;
num=Number(process.argv[2]);

temp=num;
while(temp>0)
{
a=temp%10;
temp=parseInt(temp/10); 
arm=arm+a*a*a;
}
if(arm==num)
{
console.log("Armstrong number");
}
else
{
console.log("Not Armstrong number");
}
}
armstr()
