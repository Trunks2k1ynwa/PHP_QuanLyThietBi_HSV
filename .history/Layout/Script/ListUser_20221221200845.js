const btnAdd = document.querySelector('.addnew');
const addview = document.querySelector('.add-account');
const blur = document.querySelector('.blur');
const btnClose = document.querySelector('.add-account .btn-close');
btnAdd.addEventListener('click', function(){
    addview.classList.add('active');
    blur.classList.add('active');
})
btnClose.addEventListener('click',function () {
    addview.classList.remove('active');
    blur.classList.remove('active');
})