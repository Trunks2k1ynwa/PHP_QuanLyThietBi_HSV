export default function handleToggle (Obj2,classname) {
    console.log(Obj2.classList.contains(classname));
        if(Obj2.classList.contains(classname)){
            Obj2.classList.remove(classname)
        }else{
            Obj2.classList.add(classname)
        }
    }
export function $(classname) {
    return document.querySelector(classname)
}
export function $$(classname) {
    return document.querySelectorAll(classname)
}

export const handleClass = (node1={},node2={},type='add',classname='active')=>{
    if(type ==='add'){
        node1.classList.add(classname);
        node2.classList.add(classname);
    }else{
        node1.classList.remove(classname);
        node2.classList.remove(classname);
    }
}

export const getY = (classname)=>{
    if(typeof classname !== 'string'){
        return classname?.getBoundingClientRect();
    }else{
        return $(classname)?.getBoundingClientRect();
    }
}
export function handleClose (viewparent,btnchild) {
    $(`${viewparent} ${btnchild}`).onclick = ()=>{
        handleClass($(viewparent),$('.overlay'),'remove','active')
    }
}