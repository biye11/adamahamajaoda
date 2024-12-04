window.onscroll=function(){
    var header=document.querySelector('header');
    if(window.scrollY>100){
        header.style.background='#333';
    }else{
        header.style.background='#668';
    }
}
function tooggleSlideBar(){
    const slideBar=document.getElementById('slideBar');
    if(slideBar.style.left==='0px'){
        slideBar.style.left='-250px';
    }else{slideBar
        slideBar.style.left='0px';
    }
}
//image-haske
document.addEventListener('DOMContentLoaded',()=>{
    //bright
    function applyImageFilter(){
        const images=
        document.querySelectorAll('img');
        images.forEach(img=>{
            img.style.filter='brightness(50)'
            contrast(100);
            //adjust
        });
    }
});
//down.
document.getElementById('downloadBtn').addEventListener('click',function(){
    const image = document.getElementById('image');
    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'downloaded_image.jgp';
    link.click();
});
document.getElementById('downloadBtn-2').addEventListener('click',function(){
    const image = document.getElementById('image-2');
    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'downloaded_image.jgp';
    link.click();
});
document.getElementById('downloadBtn-3').addEventListener('click',function(){
    const image = document.getElementById('image-3');
    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'downloaded_image.jgp';
    link.click();
});
document.addEventListener('DOMContentLoaded',()=>{
    console.log('Bibliography page loaded');
});
//contk

document.addEventListener('DOMContentLoaded',()=>{
    const phonenumber='+237672805717';
    const phone=
    Document.querySelector('.contact-info a');
    phonelink.href='tel:$ {phoneNumber}';
    phone.link.textContent=phonenumber;
});
document.addEventListener('DOMContentLoaded',()=>{
    const phonenumber='+237695281394';
    const phone=
    Document.querySelector('.info a');
    phonelink.href='tel:$ {phoneNumber}';
    phone.link.textContent=phonenumber;
});
//interactiv part
document.addEventListener('DOMContentLoaded',(Event)=>{
    //cliks funtion
    function handleClick(Event){
        console.log('Element clicked:',Event.target);
        Event.target.style.backgroundColor='smoke';
        //example hghlight action

    }
    //mouse action
    function handleMouseMove(Event){
        console.log('mouse moved at:',
            Event.clientX, Event.clientY
        );
    }
    //funtion press
    function handlePress(Event){
        console.log('Key pressed:',Event.key);

    }
    //tag all items
    document.addEventListener('click', handleClick);
    document.addEventListener('mousemove',handleMouseMove);
    Document.addEventListener('keydown',handleKeyPress);
});
//body
document.body.style.fontFamily='"Arial",sans-serif'
document.body.style.fontSize='16px';
document.body.style.fontWeight='400'
//adjument for devices
function adjumentLayout(){
    const width=window.innerHeight.width;
    const container=document.querySelectorall('css');

    if (width<480){
        container.style.padding='5px';

    } else if (width<768){
        container.style.padding='10px';
    } else {
        container.style.padding='20px'
    }
}
//adjust
window.addEventListener('load',adjustLayout);
//window resize
window.addEventListener('resize',adjustLayout);