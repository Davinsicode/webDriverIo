let value = "i am testyantra employee"
let splitted = value.split(" ")

// ForEach Method
splitted.forEach((ans)=>{ans = ans.charAt(0).toUpperCase()+ans.substring(1)
console.log(ans);})

// For Loop
/* for (let i = 0; i < splitted.length; i++) 
{
    for (let j = 0; j < splitted[i].length; j++) 
    {
        splitted[i] = splitted[i].charAt(0).toUpperCase()+splitted[i].substring(1)
        
    }
    console.log(splitted[i]);
} */
