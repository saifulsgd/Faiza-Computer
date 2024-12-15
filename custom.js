                  "use strict"
const btn=document.querySelector('.butn');

btn.addEventListener('click',getValue);

function getValue(){
    var input=document.querySelector('.gval').value;
    if(input=='faiza'){
        console.log('ok');
    }else{
        alert('Sorry,Please input correct user name');
    }
};
$(document).ready(function(){
    $('.cbtn').mouseover(function(){
        $('body').css({
           "background":"green"
        });
    });
    $('.cbtn').mouseout(function(){
        $('body').css({
           "background":"darkred"
        });
        $(this).css({'width':'200px'});
    });
});
$('h1').text('Saiful Tech');
$('h1').css('letter-spacing','50px');
$('h1').css('background','green');
$('h1').css('color','white');
$('h1').css('text-transform','uppercase');

$(document).ready(function(){
    $('.cbtn').click(function(){
        $('.getb').fadeToggle(2000,abc);

    });
});
function abc(){
    let x,y,z;
    x=8;
    y=5;
    z=((x+y)-(x-y));
    alert('Your lucky number is'+ z)
};

const to_top=document.querySelector('.topb');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>50){
        to_top.classList.add('xyz');
    }else{
        to_top.classList.remove('xyz');
    }
});
 const somay=document.querySelector('.somay');
 somay.addEventListener('click',()=>{
   const timed=document.querySelector('.timed');
   timed.innerHTML=Date();
 });

 const red=document.querySelector('.red');
 const green=document.querySelector('.green');
 const blue=document.querySelector('.blue');
 const body=document.querySelector('body');

 const getBGcolor= (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
 };

 const magicColor= (element,color) => {
    return element.addEventListener('mouseenter',()=>{
        body.style.background=color;
    })
 };
magicColor(red,getBGcolor(red));
magicColor(green,getBGcolor(green));
magicColor(blue,getBGcolor(blue));
 