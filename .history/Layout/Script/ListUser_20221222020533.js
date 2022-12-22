
const addview = document.querySelector('.add-account');
const overlay = document.querySelector('.overlay');
const updateUser = document.querySelectorAll('.update_user>i')
const updateView = document.querySelector('.update-account')

function $(classname) {
    return document.querySelector(classname)
}
function $$(classname) {
    return document.querySelectorAll(classname)
}

$('.update-account .btn_close').onclick = ()=>{
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
$('.addnew').onclick=(e)=>{
    handleClass($('.add-account'),$('.overlay'));
}
$('.overlay').onclick = (e)=>{
    handleClass($('.add-account'),e.target,'remove',)
    handleClass($('.update-account'),e.target,'remove',)
    handleClass($('.role-account'),e.target,'remove',)
}
function updateClose (viewparent,btnchild) {
    $(`${viewparent} ${btnchild}`).onclick = ()=>{
        handleClass($(viewparent),overlay,'remove','active')
    }
}
updateClose('.update-account','btn_close')
updateClose('.update-account')
// $('.update-account .btn_close').onclick = ()=>{
//     handleClass($('.update-account'),overlay,'remove','active')
// }
// $('.update-account .btn_cancel').onclick = ()=>{
//     handleClass($('.update-account'),$('.overlay'),'remove','active')
// }
// Click icon update account
for(node of $$('.update_user>i')){
    node.onclick = (e)=>{
        handleClass($('.update-account'),$('.overlay'),"add",)
    }
}
