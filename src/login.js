


window.addEventListener('load', () => {
    const defaultInput = document.getElementById('user');
    defaultInput.focus(); //enable focus on input element
});

window.addEventListener('load', () => {
    const defaultInput = document.getElementById('user');
    defaultInput.focus(); 
});



document.addEventListener('click',function(e){
    const inputid = document.querySelector('#user')
    const inputuser=document.querySelector('.inputuser')
    const errortext=document.querySelector('.text')

    if(!inputid.contains(e.target) && inputid.value.trim()===''){
        errortext.classList.remove('hidden')
        inputuser.style.border='1px solid #ad0f0f';
   }
})