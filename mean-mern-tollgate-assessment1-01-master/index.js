const task = document.getElementById("taskName");
const orderList = document.getElementById("orderList");
const addbtn = document.getElementById("Add");
let taskList = [];
const basePath = "http://localhost:5000/todos";
const getData = async () => {
  await fetch(basePath)
    .then((res) => res.json())
    .then((data) => (taskList = data))
    .catch((err) => console.log(err));
  console.log(taskList);
};
const displayTask = () => {
  console.log("afkndkj");
  console.log(taskList);
  taskList.map((ele) => {
    console.log(ele);
    const list = document.createElement("li");
    list.innerHTML = `<div class="d-flex row m-4">
    <h5 class="mb-4 col-sm-9 d-flex">${ele.taskName}</h5>
    
  <button id="${ele.id}" class="btn btn-outline-danger col-sm-3 align-items-center btn-sm rounded-3"  style="height: 35px;box-shadow: 0px 0px 4px gray;">
  Remove
</button></div>`;
    orderList.append(list);
  });
};
const deleteData=async(id)=>{
    await fetch(`${basePath}/${id}`,{
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    }
  })

}
const updateUi=async()=>{
  await getData()
  displayTask()
}
updateUi()

const postData = async (task) => {
  await fetch(basePath, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

addbtn.addEventListener('click',(e)=>{
  e.preventDefault();
  e.stopPropagation();
   if (task.value!="" && task.value!=" ")
   {
     const task={
    taskName:taskName.value
  }
  postData(task)
}else{
  alert("must enter task")
  console.error("must enter task");
}
  // updateUi()
})

orderList.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("ssfjs");
  if (e.target.classList.contains("btn-outline-danger")) {
    const btnTar=e.target.id
    deleteData(btnTar)
    const trTarget = e.target.parentElement.parentElement;
    console.log(btnTar);
    orderList.removeChild(trTarget);
  }
});
