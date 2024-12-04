document.getElementById('downloadBtn').addEventListener('click',function(){
    const image = document.getElementById('image');
    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'downloaded_image.jgp';
    link.click();
});
function adjumentLayout(){
    const width=window.innerHeight.width;
    const container=document.querySelector('body');

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