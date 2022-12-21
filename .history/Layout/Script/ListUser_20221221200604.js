const btnAdd = document.querySelector('.addnew');
const addview = document.querySelector('.add-account');
const blur = document.querySelector('.blur');
btnAdd.addEventListener('click', function(){
    addview.classList.add('active');
    blur.classList.add('active');
})