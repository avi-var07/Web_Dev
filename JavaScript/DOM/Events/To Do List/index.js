document.getElementById("add").addEventListener('click', function(e){
    let task = document.getElementById("task").value;
    let li = document.createElement("li");
    li.innerText = task;
    li.className =  "text-black font-bold mt-2 flex justify-between items-center bg-white px-4 py-2 rounded";
    let dlt = document.createElement("button");
    dlt.innerText = "Delete";
    dlt.className = "ml-4 text-red-600 font-bold";
    dlt.addEventListener("click", function(){
        li.remove();
    });
    li.appendChild(dlt)
    document.getElementById("list").appendChild(li);
    document.getElementById("task").value = "";

});
