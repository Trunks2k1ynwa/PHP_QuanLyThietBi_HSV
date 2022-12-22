
function $(classname) {
    return document.querySelector(classname)
}
function $$(classname) {
    return document.querySelectorAll(classname)
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
// click btn addUser
$('.addnew').onclick=(e)=>{
    handleClass($('.add-account'),$('.overlay'));
}
// click overlay
$('.overlay').onclick = (e)=>{
    handleClass($('.add-account'),e.target,'remove',)
    handleClass($('.update-account'),e.target,'remove',)
    handleClass($('.role-account'),e.target,'remove',)
}
// fn handle add or remove class of nodes when click on btn child
function handleClose (viewparent,btnchild) {
    $(`${viewparent} ${btnchild}`).onclick = ()=>{
        handleClass($(viewparent),overlay,$('.overlay'),'active')
    }
}
handleClose('.update-account','.btn_close')
handleClose('.update-account','.btn_cancel')
handleClose('.add-account','.btn_cancel')
handleClose('.add-account','.btn_close')

for(node of $$('.update_user>i')){
    node.onclick = (e)=>{
        handleClass($('.update-account'),$('.overlay'),"add",)
    }
}
