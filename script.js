
document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu'), nav=document.querySelector('.navin');
 if(menu) menu.onclick=()=>nav.classList.toggle('open');
 const c=document.querySelector('.cookie');
 const key='arya-cookie';
 if(c && localStorage.getItem(key)) c.remove();
 document.querySelectorAll('.cookie button').forEach(b=>b.onclick=()=>{localStorage.setItem(key,'1');c.remove()});
});
