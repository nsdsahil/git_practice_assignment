let str="sahil";
let rev=""
for(let i=str.length-1;i>=0;i--)
{
    rev+=str[i]
}
if(str==rev) console.log("it is a palindrome")
else console.log("it is not")