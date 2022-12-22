
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

const getY = (classname)=>{
    if(typeof classname !== 'string'){
        return classname?.getBoundingClientRect();
    }else{
        return $(classname)?.getBoundingClientRect();
    }
}

$('.item-active').onclick = (e) => {
    $('.item-active .menu_item-sub').classList.toggle('hidden');
}
let navActiveP = getY('.nav-active').top;
console.log(navActiveP);

// Menu navigation
const menuNav = $$('.nav-menu>*')
const contentList = $$('.sectionbar-content>*')
for (const menuItem of menuNav) {
    menuItem.onclick = (e)=>{
        for (const iterator of menuNav) {
            iterator.classList.remove('item-active');
        }
        menuItem.classList.add('item-active');
        console.log(navActiveP);
        console.log(getY(menuItem).top);
        $('.nav-active').style.top = `${navActiveP-getY(menuItem.top)}px`;
    }
}
// Page DashBoard
// Page List User

// click btn addUser
$('.addnew').onclick=(e)=>{
    handleClass($('.add-account'),$('.overlay'));
}
// click item role feature
$('.role-feature').onclick=(e)=>{
    handleClass( $('.role-account'),$('.overlay'));
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
        handleClass($(viewparent),$('.overlay'),'remove','active')
    }
}
handleClose('.update-account','.btn_close')
handleClose('.update-account','.btn_cancel')
handleClose('.add-account','.btn_cancel')
handleClose('.add-account','.btn_close')
handleClose('.role-account','.btn_cancel')
handleClose('.role-account','.btn_close')

for(node of $$('.update_user>i')){
    node.onclick = (e)=>{
        handleClass($('.update-account'),$('.overlay'),"add",)
    }
}
///