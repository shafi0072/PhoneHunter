let api = 'https://openapi.programming-hero.com/api'
let api2 = 'https://openapi.programming-hero.com/api/phone/'

let searchButton = document.getElementById('search')
searchButton.addEventListener('click', function () {
    let searchBox = document.getElementById('phone-name')
    getResult(searchBox.value)
    console.log(searchBox.value)
})

const getResult = (search) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
        .then(res => res.json())
        .then(data => displayResult(data))
}
 const displayResult = async (data) => {
    console.log(data.data.length)
    let myWrap = document.getElementsByTagName('h5')
    let myWrap2 = document.getElementsByTagName('img')
    let myWrap3 = document.getElementsByTagName('p')
    document.getElementById('wrap').style.display = 'none';
    if(data.data.length === 0){
        document.getElementById('wrap').style.display = 'none'
        document.getElementById('phoneUndfind').style.display = 'block'

    }
    else{
        document.getElementById('wrap').style.display = 'block'
        document.getElementById('phoneUndfind').style.display = 'none'
        for (let i = 0; i < myWrap.length; i++) {

            let myHtml = await data.data[i].phone_name
            let myHtml2 = await data.data[i].image
            let myHtml3 = await data.data[i].slug
            myWrap[i].innerText = myHtml
            myWrap2[i].src = myHtml2
            myWrap3[i].innerHTML = myHtml3

        }
    }
}
document.getElementById('seemore').addEventListener('click', function(){
let isSpinner = true;
setTimeout(() => {
    if(isSpinner){
        document.getElementById('spinner').style.display = 'block'
        
    }
    if(isSpinner){
        isSpinner = false;
       
    }
    if(!isSpinner){
        document.getElementById('RowHide').style.display = 'flex';
    document.getElementById('RowHide2').style.display = 'flex';
    document.getElementById('RowHide3').style.display = 'flex';
    document.getElementById('seemore').style.display = 'none';
    document.getElementById('less').style.display = 'block'
    
    }
}, 1000)
 if(!isSpinner){
    document.getElementById('spinner').style.display = 'none'
 }
})

document.getElementById('less').addEventListener('click', function(){
    document.getElementById('RowHide').style.display = 'none';
    document.getElementById('RowHide2').style.display = 'none';
    document.getElementById('RowHide3').style.display = 'none';
    document.getElementById('seemore').style.display = 'block';
    document.getElementById('less').style.display = 'none'
})