const getcolor = () => {
    const randomnumber = Math.floor(Math.random()*16777215);
    const randomcode = "#"+randomnumber.toString(16);//to convert into hexadecimal
    document.body.style.backgroundColor = randomcode;//this change the color
    document.getElementById("color-code").innerText = randomcode;

    // navigator.clipboard.writeText(randomcode) //to copy taxt in clipboard  

}

//eventcall
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)


//initial call 
getcolor();