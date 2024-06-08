var bookmarkName = document.getElementById("bookmark");
var websiteURL = document.getElementById("siteURL");
var dataList = [];
var x;
var invalidMsg;
if(localStorage.getItem("dataList") != null) {
    dataList = JSON.parse(localStorage.getItem("dataList"));
    displaydData(dataList);
}
console.log(bookmarkName.value);
function getData(){
    if(bookmarkName.value != "" && websiteURL.value != ""){
        var data = {
            name : bookmarkName.value,
            URL : websiteURL.value,
            id : dataList.length,
        }
        dataList.push(data);
        updateLocalStorage()
        clearData()
        displaydData(dataList)
        clearMsg()
    }else{
        displayInvalidation()
    }
}
function clearMsg() {
    invalidMsg = null;
    document.getElementById("invaledationMsg").innerHTML=invalidMsg;
}
function displayInvalidation() {
    invalidMsg = `<p class="fs-5 text text-danger">
        You must enter the Bookmark Name and Website URL.</p>`
  document.getElementById("invaledationMsg").innerHTML=invalidMsg;
}
function displaydData(list) {
    var container = "";
    for (var i= 0 ; i < list.length ; i++){
        container += `<tr>
        <td>${i+1}</td>
        <td>${list[i].name}</td>
        <td>
        <button onclick="visitURL(${i})" class="visit btn text-light"><i class="fa-regular fa-eye me-2"></i> Visit</button>
        </td>
        <td>
        <button onclick="deletData(${i})" class="delete btn btn-danger text-light"><i class="fa-solid fa-trash me-2"></i> Delete</button>
        </td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML=container;
}
function clearData() {
    bookmarkName.value = null;
    websiteURL.value = null;
}

function updateLocalStorage() {
    localStorage.setItem("dataList",JSON.stringify(dataList));
}
function deletData(index) {
    dataList.splice(index,1);
    updateLocalStorage();
    displaydData(dataList);
}
function visitURL(index) {
    x=dataList[index].URL;
    window.open(x , '_blank');
}

