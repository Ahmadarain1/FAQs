if(data1.style.display = 'block' && data2.style.display != 'none' 
&& data3.style.display != 'none' && data4.style.display != 'none' )
{
    data1.style.display = 'none';
    data2.style.display = 'none';
    data3.style.display = 'none';
    data4.style.display = 'none';
}

function openbtn1(){
    let btn1= document.getElementById('btn1');
    let data1 = document.getElementById('data1');
    if(data1.style.display != 'block'){
        data1.style.display = 'block';
    }else{
        data1.style.display = 'none';
    }
}
function openbtn2(){
    let btn2= document.getElementById('btn2');
    let data2 = document.getElementById('data2');
    if(data2.style.display != 'block'){
        data2.style.display = 'block';
    }else{
        data2.style.display = 'none';
    }
}
function openbtn3(){
    let btn3= document.getElementById('btn3');
    let data3 = document.getElementById('data3');
    if(data3.style.display != 'block'){
        data3.style.display = 'block';
    }else{
        data3.style.display = 'none';
    }
}
function openbtn4(){
    let btn4= document.getElementById('btn4');
    let data4 = document.getElementById('data4');
    if(data4.style.display != 'block'){
        data4.style.display = 'block';
    }else{
        data4.style.display = 'none';
    }
}
