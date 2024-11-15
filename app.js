const inputBox = document.querySelector(".inputBox");
const addBtn = document.querySelector(".addBtn");
const taskList = document.querySelector(".taskList");
addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("You must write something!!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value=''
  }
  saveData();
});
taskList.addEventListener("click", (a) => {
  if (a.target.tagName === "LI") {
    a.target.classList.toggle("checked");s
  } else if ((a.target.tagName = "SPAN")) {
    a.target.parentElement.remove();
    saveData();
  }
});
const saveData = () => {
  localStorage.setItem("data", taskList.innerHTML);
};
const showData=()=>{
  taskList.innerHTML=localStorage.getItem("data")
}
showData();