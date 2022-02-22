let letter=[]
var word="racecar"
let rword=""

for(let i=0;i<word.length;i++)
{
    letter.push(word[i])
}

for (let i=0;i<word.length;i++)
{
    rword+=letter.pop()
}

if(rword===word)
{
    console.log(word + " is palindrome.")
}else{
    console.log(word +" is not palindrome")
}