let btn1 = document.querySelector("#btn1");
let taskInput1 = document.querySelector("#taskInput1");
btn1.addEventListener("click", () => {
    let taskText = taskInput1.value;
    if (taskText.trim() !== "") {
        let div = document.createElement("div");
        div.className="task1";
        let del=document.createElement("button");
        del.className="del-btn";
        let cBox=document.createElement("INPUT");
        cBox.setAttribute("type","checkbox");
        cBox.className="done-btn";
        div.appendChild(document.createTextNode(taskText));
        del.appendChild(document.createTextNode("delete"));
        let taskList = document.querySelector("#taskList1");
        taskList.appendChild(div);
        div.append(del);
        div.prepend(cBox);
        taskInput1.value = "";
    }
});

let btn2 = document.querySelector("#btn2");
let taskInput2 = document.querySelector("#taskInput2");
btn2.addEventListener("click", () => {
    let taskText = taskInput2.value;
    if (taskText.trim() !== "") {
        let div = document.createElement("div");
        div.className = "task2";
        let del=document.createElement("button");
        del.className="del-btn";
        let cBox=document.createElement("INPUT");
        cBox.setAttribute("type","checkbox");
        cBox.className="done-btn";
        div.appendChild(document.createTextNode(taskText));
        del.appendChild(document.createTextNode("delete"));
        let taskList = document.querySelector("#taskList2");
        taskList.appendChild(div);
        div.append(del);
        div.prepend(cBox);
        taskInput2.value = "";
    }
});

let btn3 = document.querySelector("#btn3");
let taskInput3 = document.querySelector("#taskInput3");
btn3.addEventListener("click", () => {
    let taskText = taskInput3.value;
    if (taskText.trim() !== "") {
        let div = document.createElement("div");
        div.className = "task3";
        let del=document.createElement("button");
        del.className="del-btn";
        let cBox=document.createElement("INPUT");
        cBox.setAttribute("type","checkbox");
        cBox.className="done-btn";
        div.appendChild(document.createTextNode(taskText));
        del.appendChild(document.createTextNode("delete"));
        let taskList = document.getElementById("taskList3");
        taskList.appendChild(div);
        div.append(del);
        div.prepend(cBox);
        taskInput3.value = "";
    }
});

let modeBtn=document.querySelector(".mode");
let body=document.querySelector("body");
let currMode="light";
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});

const list1=document.querySelector("#container-1 ul");
list1.addEventListener("click",(e)=>{
    if(e.target.className =='del-btn'){
        const div=e.target.parentElement;
        div.parentNode.removeChild(div);
    }
});
const list2=document.querySelector("#container-2 ul");
list2.addEventListener("click",(e)=>{
    if(e.target.className =='del-btn'){
        const div=e.target.parentElement;
        div.parentNode.removeChild(div);
    }
});
const list3=document.querySelector("#container-3 ul");
list3.addEventListener("click",(e)=>{
    if(e.target.className =='del-btn'){
        const div=e.target.parentElement;
        div.parentNode.removeChild(div);
    }
});
