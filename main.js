let x=fetch('https://api.adviceslip.com/advice').then((data)=>{
    let myData = data.json();
    return myData;
}).then((myData)=>{
    console.log(myData.slip.advice)
    document.getElementById('qu').innerHTML = `"${myData.slip.advice}"`
    document.querySelector('span').innerText = myData.slip.id;
})
function reload(){
    setTimeout(() => {
        location.reload()
    }, 1000);
}