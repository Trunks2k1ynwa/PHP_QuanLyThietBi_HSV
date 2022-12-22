const btnAdd = document.querySelector('.addnew');
const btnCancel = document.querySelector('.btn_cancel')
const addview = document.querySelector('.add-account');
const overlay = document.querySelector('.overlay');
const updateUser = document.querySelectorAll('.table_row .update_user')
const updateView = document.querySelector('.update-account')
console.log(overlay)
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
btnAdd.onclick = function () {
    handleClass(addview,overlay);
}
overlay.onclick = function() {
    handleClass(addview,overlay,'remove',)
}
btnCancel.onclick = function() {
    handleClass(addview,overlay,'remove',)
    handleClass(updateView,overlay,'remove',)
}
// Click icon update account
console.log(updateUser)
for(node of updateUser){
    console.log(node)
    node.onclick = ()=>{
        console.log(this);
    }
}
