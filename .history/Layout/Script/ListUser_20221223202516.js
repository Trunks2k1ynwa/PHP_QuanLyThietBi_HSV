$('.nav-menu_Dashboard').classList.add('item-active');

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

$('.user-logOut').onclick = function(){
    console.log(this);
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
$('.nav-menu_Dashboard')?.children[1]?.classList.remove('hidden');
const listView = $$('.sectionbar-content>*')
for (let i = 0; i < [...menuNav].length; i++) {
    [...menuNav][i].onclick = (e)=>{
        for (let index=0;index<[...menuNav].length;index++) {
            [...menuNav][index].classList.remove('item-active');
            [...menuNav][index]?.children[1]?.classList.add('hidden');
            [...listView][index].classList.remove('view_active');
        }
        [...menuNav][i]?.children[1]?.classList.toggle('hidden');
        [...menuNav][i].classList.add('item-active');
        [...listView][i].classList.add('view_active');
        $('.nav-active').style.top = `${getY('.item-active').top-145}px`;
    }
    
}
// Page DashBoard
// Page List User

// click btn addUser
$('.addnew').onclick=(e)=>{
    handleClass($('.add-account'),$('.overlay'));
}
// click btn thietbi
$('.Thiet_bi .addnew').onclick=(e)=>{
    handleClass($('.add-thietbi'),$('.overlay'));
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
    handleClass($('.add-thietbi'),e.target,'remove',)
    handleClass($('.update-thietbi'),e.target,'remove',)
}
// fn handle add or remove class of nodes when click on btn child
function handleClose (viewparent,btnchild) {
    $(`${viewparent} ${btnchild}`).onclick = ()=>{
        handleClass($(viewparent),$('.overlay'),'remove','active')
    }
}
// account user
handleClose('.update-account','.btn_close')
handleClose('.update-account','.btn_cancel')
handleClose('.add-account','.btn_cancel')
handleClose('.add-account','.btn_close')
handleClose('.role-account','.btn_cancel')
handleClose('.role-account','.btn_close')
// Thiet bi
handleClose('.update-thietbi','.btn_close')
handleClose('.update-thietbi','.btn_cancel')
handleClose('.add-thietbi','.btn_cancel')
handleClose('.add-thietbi','.btn_close')


for(node of $$('.update_user>i')){
    node.onclick = (e)=>{
        handleClass($('.update-account'),$('.overlay'),"add",)
    }
}
for(node of $$('.update_thietbi>i')){
    node.onclick = (e)=>{
        handleClass($('.update-thietbi'),$('.overlay'),"add",)
    }
}
$('.dsnhanvien').onclick = ()=>{
    $('.List_user').classList.add('view_active');
    $('.nav-menu_Dashboard').classList.remove('item-active');
    $('.nav-menu_ControlUser').classList.add('item-active');
    $('.nav-active').style.top = `${getY('.item-active').top-145}px`;
}
$('.dsthietbi').onclick = ()=>{
    $('.Thiet_bi').classList.add('view_active');
    $('.nav-menu_Dashboard').classList.remove('item-active');
    $('.nav-menu_Thietbi').classList.add('item-active');
    $('.nav-active').style.top = `${getY('.item-active').top-145}px`;
}