const btnAdd = document.querySelector('.addnew');
const btnCancel = document.querySelector('.btn_cancel')
const addview = document.querySelector('.add-account');
const blur = document.querySelector('.blur');
const updateUser = document.querySelectorAll('.update_user')
const updateView = document.querySelector('.update-account')
// const hanleClick = (node,elementShow1={},elementShow2={},active='active',type='add')=>{
//     node.addEventListener('click',()=>{
//         if(type ==='add'){
//             elementShow1.classList.add(active)
//             elementShow2.classList.add(active)
//         }else{
//             elementShow1.classList.remove(active)
//             elementShow2.classList.remove(active)
//         }
//         console.log('click done');
//     })
// }
const handleClass = (node1={},node2={},type='add',classname='active')=>{
    type==='add'?node1.classList.add(classname):node1.classList.remove(classname);
}
const btnClose = document.querySelector('.add-account .btn_close');
// Click icon update account
console.log(updateUser)
updateUser.forEach(node => {
    hanleClick(node,updateView,blur);

});
// click btn adduser account
hanleClick(btnAdd,addview,blur,'active')
hanleClick(btnClose,addview,blur,'active','remove')
hanleClick(blur,addview,blur,'active','remove')
hanleClick(btnCancel,addview,blur,'active','remove')
