const btnAdd = document.querySelector('.addnew');
const btnCancel = document.querySelector('.btn_cancel')
const addview = document.querySelector('.add-account');
const blur = document.querySelector('.blur');
const hanleClick = (node,elementShow1={},elementShow2={},active,type='add')=>{
    node.addEventListener('click',()=>{
        if(type ==='add'){
            elementShow1.classList.add(active)
            elementShow2.classList.add(active)
        }else{
            elementShow1.classList.remove(active)
            elementShow2.classList.remove(active)
        }
    })
}
const btnClose = document.querySelector('.add-account .btn_close');
// click btn adduser account
hanleClick(btnAdd,addview,blur,'active')
hanleClick(btnAdd,addview,blur,'active','remove')

btnClose.addEventListener('click',function () {
    addview.classList.remove('active');
    blur.classList.remove('active');
})
blur.addEventListener('click',()=>{
        addview.classList.remove('active');
        blur.classList.remove('active')   
})
