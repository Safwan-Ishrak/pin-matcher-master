//generate pin

const pin=document.getElementById('GeneratePinForm');

function GeneratePin(){
    const randomNum=Math.round(1000+Math.random()*9000);

    pin.value=randomNum;
}