const btnAdd = document.querySelector('.addnew');
const btnCancel = document.querySelector('.btn_cancel')
const addview = document.querySelector('.add-account');
const blur = document.querySelector('.blur');
const hanleShowUp = (node,elementShow1={},elementShow2={},active,action)=>{
    node.addEventListener('click',()=>{
        elementShow1.classList.action(active)
        elementShow2.classList.action(active)
    })
}
const btnClose = document.querySelector('.add-account .btn_close');
// click btn adduser account
hanleShowUp(btnAdd,addview,blur,'active')
btnClose.addEventListener('click',function () {
    addview.classList.remove('active');
    blur.classList.remove('active');
})
blur.addEventListener('click',()=>{
        addview.classList.remove('active');
        blur.classList.remove('active')   
})
