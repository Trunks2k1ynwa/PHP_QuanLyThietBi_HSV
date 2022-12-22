const btnAdd = document.querySelector('.addnew');
const btnCancel = document.querySelector('.btn_cancel')
const addview = document.querySelector('.add-account');
const blur = document.querySelector('.blur');
const updateUser = document.querySelectorAll('.update_user')
const updateView = document.querySelector('.update-account')
btnCancel.onclick = function(){
    console.log('cancel')
}
const hanleClick = (node,elementShow1={},elementShow2={},active='active',type='add')=>{
    node.addEventListener('click',()=>{
        if(type ==='add'){
            elementShow1.classList.add(active)
            elementShow2.classList.add(active)
        }else{
            elementShow1.classList.remove(active)
            elementShow2.classList.remove(active)
        }
        console.log('click done');
    })
}
const handleClass = (node1={},node2={},type='add',classname='active')=>{
    if(type ==='add'){
        node1.classList.add(classname);
        node2.classList.add(classname);
    }else{
        node1.classList.remove(classname);
        node2.classList.remove(classname);
    }
}
const btnClose = document.querySelector('.add-account .btn_close');
// click btn adduser account
hanleClick(btnAdd,addview,blur,'active')
hanleClick(btnClose,addview,blur,'active','remove')
hanleClick(blur,addview,blur,'active','remove')
hanleClick(btnCancel,addview,blur,'active','remove')
// Click icon update account
updateUser.forEach(node => {
    node.onclick = function(){
        handleClass(updateView,blur)
    }
});


