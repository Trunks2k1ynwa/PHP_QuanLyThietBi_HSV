// Add user account
const btnAdd = document.querySelector('.addnew');
const btnCancel = document.querySelector('.btn_cancel')
const addview = document.querySelector('.add-account');
const blur = document.querySelector('.blur');
console.log(blur)
const btnClose = document.querySelector('.add-account .btn_close');
btnAdd.addEventListener('click', function(){
    addview.classList.add('active');
    blur.classList.add('active');
})
btnClose.addEventListener('click',function () {
    addview.classList.remove('active');
    blur.classList.remove('active');
})
blur.addEventListener('click',()=>{
        addview.classList.remove('active');
        blur.classList.remove('active')   
    })