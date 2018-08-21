function prime()
{
    var  number =Number(process.argv[2])
    var flag=Number('123')
    console.log( flag)
    for( var i=2; i<=number/2;++i){
        if(number%i==0){
           
flag=1;
break;
        }


    }
    if(flag==0){
        console.log(" yessss it's a  prime  number:)")

    }
    else {
        console.log("not");
    }
}
prime();
