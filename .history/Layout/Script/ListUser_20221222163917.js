
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


const navActiveP = getY('.nav-active').top;
// Menu navigation
const menuNav = $$('.nav-menu>*')
const contentList = $$('.sectionbar-content>*')
const menuSub = $$('.menu_item-sub');
for (const item of menuSub) {
    item.classList.add('hidden');
}
// Side bar action 
// $('.nav-menu_Dashboard').children[1].classList.remove('hidden');
const listView = $$('.sectionbar-content>*')
for (let i = 0; i < [...menuNav].length; i++) {
    [...menuNav][i].onclick = (e)=>{
        for (let index=0;index<[...menuNav].length;index++) {
            [...menuNav][index].classList.remove('item-active');
            // [...menuNav][index].children[1].classList.add('hidden');
            [...listView][index].classList.remove('view_active');
        }
        [...menuNav][i]?.children[1].classList.toggle('hidden');
        [...menuNav][i].classList.add('item-active');
        $('.nav-active').style.top = `${getY([...menuNav][i]).top-145}px`;
        [...listView][i].classList.add('view_active');
    }
    
}
// click menu item to show main content
// const listView = $$('.sectionbar-content>*')
// for(let i=0; i<[...menuNav].length;i++){
//     [...menuNav][i].onclick = ()=>{
//         for (const iterator of [...listView]) {
//             iterator.classList.remove('view_active');
//         }
//         [...listView][i].classList.add('view_active');
//     }
// }
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
