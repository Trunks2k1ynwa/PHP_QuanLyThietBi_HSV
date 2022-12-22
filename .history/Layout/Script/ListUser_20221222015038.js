const btnAdd = document.querySelector('.addnew');
const btnCancel = document.querySelectorAll('.btn_cancel')
// const btnClose = document.querySelectorAll('.btn_close');
const addview = document.querySelector('.add-account');
const overlay = document.querySelector('.overlay');
const updateUser = document.querySelectorAll('.update_user>i')
const updateView = document.querySelector('.update-account')

function Selector(classname) {
    return document.querySelector(classname)
}

Selector('.update-account .btn_close').onclick = ()=>{
    console.log(1)
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
// click btn adduser account
btnAdd.onclick = function () {
    handleClass(addview,overlay);
}
overlay.onclick = function(e) {
    handleClass(addview,e.target,'remove',)
}


// Click icon update account
for(node of updateUser){
    node.onclick = (e)=>{
        handleClass(updateView,overlay,"add",)
    }
}
