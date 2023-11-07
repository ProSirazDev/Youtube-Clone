var menuIcon=document.querySelector('.bi-list');
var sidebar=document.querySelector('.side-bar');
var container=document.querySelector('.container');


menuIcon.addEventListener('click',function(){
   sidebar.classList.toggle('small-sidebar')
   container.classList.toggle('large-container')
});

/*Theme Test
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }*/