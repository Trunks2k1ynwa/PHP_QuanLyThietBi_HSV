// Add user account
const btnAdd = document.querySelector('.addnew');
const btnCancel = document.querySelector('.btn_cancel')
const addview = document.querySelector('.add-account');
const blur = document.querySelector('.blur');
const hanleShowUp = (node,elementShow={},elementShow2={},active)=>{
    node.addEventListener('click',()=>{
        elementShow1.classList.add(active)
        elementShow2.classList.add(active)
    })
}
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
hanleShowUp(btnAdd,addview,'active')
