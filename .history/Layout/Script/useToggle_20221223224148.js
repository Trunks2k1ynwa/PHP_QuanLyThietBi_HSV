export default function ToggleClass (Obj1,Ob2,clasname) {
    Obj1.onclick = function(){
        if(Obj2.classList.contains(classname)){
            Obj2.classList.remove(classname)
        }else{
            Obj2.classList.add(classname)
        }
    }
}
export default function $(classname) {
    return document.querySelector(classname)
}
function $$(classname) {
    return document.querySelectorAll(classname)
}