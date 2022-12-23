import handleToggle, { $, $$, getY, handleClass, handleClose } from "./Import.js";
$('.nav-menu_DashBoard').classList.add('item-active');
console.log($('.nav-menu_DashBoard').classList.contains('nav-menu_DashBoard'))
// Menu navigation
const menuNav = $$('.nav-menu>*')
const menuSub = $$('.menu_item-sub');
for (const item of menuSub) {
    item.classList.add('toggle');
}
// Side bar action 
$('.nav-menu_DashBoard')?.children[1]?.classList.remove('toggle');
const listView = $$('.sectionbar-content>*')
for (let i = 0; i < [...menuNav].length; i++) {
    [...menuNav][i].onclick = (e)=>{
        for (let index=0;index<[...menuNav].length;index++) {
            [...menuNav][index].classList.remove('item-active');
            [...menuNav][index]?.children[1]?.classList.add('hidden');
            [...listView][index].classList.remove('view_active');
        }
        [...menuNav][i].classList.add('item-active');
        [...listView][i].classList.add('view_active');
        $('.nav-active').style.top = `${getY('.item-active').top-145}px`;
    }
    
}

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

for(const node of [...$$('.update_user>i')]){
    node.onclick = (e)=>{
        handleClass($('.update-account'),$('.overlay'),"add",)
    }
}
for(const node of $$('.update_thietbi>i')){
    node.onclick = (e)=>{
        handleClass($('.update-thietbi'),$('.overlay'),"add",)
    }
}
$('.dsnhanvien').onclick = ()=>{
    $('.Tai_khoan').classList.add('view_active');
    $('.nav-menu_DashBoard').classList.remove('item-active');
    $('.nav-menu_TaiKhoan').classList.add('item-active');
    $('.nav-active').style.top = `${getY('.item-active').top-145}px`;
}
$('.dsthietbi').onclick = ()=>{
    $('.Thiet_bi').classList.add('view_active');
    $('.nav-menu_DashBoard').classList.remove('item-active');
    $('.nav-menu_ThietBi').classList.add('item-active');
    $('.nav-active').style.top = `${getY('.item-active').top-145}px`;
}
$('.ycthietbi').onclick = ()=>{
    $('.Yeu_cau').classList.add('view_active');
    $('.nav-menu_DashBoard').classList.remove('item-active');
    $('.nav-menu_YeuCau').classList.add('item-active');
    $('.nav-active').style.top = `${getY('.item-active').top-145}px`;
}