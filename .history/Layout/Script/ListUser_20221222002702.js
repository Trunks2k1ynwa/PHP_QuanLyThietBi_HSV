const btnAdd = document.querySelector('.addnew');
const btnCancel = document.querySelector('.btn_cancel')
const addview = document.querySelector('.add-account');
const overlay = document.querySelector('.overlay');
const updateUser = document.querySelectorAll('.update_user')
const updateView = document.querySelector('.update-account')
btnCancel.onclick = function(){
    console.log('cancel')
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

// Click icon update account

for(node of updateUser){
    node.onclick = ()=>{
        handleClass(updateView,overlay);
    }
}