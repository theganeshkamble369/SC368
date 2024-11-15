// // const title = document.getElementById("title");
// // title.innerText = "Good Night";

// // let age = prompt("your age?")
// // if (age>18){
// //     title.style.color = "green";
// // } else{
// //     title.innerText = "Cannot vote";
// //     title.style.color = "red";
// // }
// const inputText = document.getElementById("title")
// function onClickSubmitButton(){
//    console.log(inputText);
// }
const inputText = document.getElementById("TodoTitle");
const Todos = [];
const inputText = document.getElementById("TodoTitle");


function onClickSubmitButton() {
  console.log(Todos);
  inputText.value = "";
  Todos.forEach((todo) =>{
    list.innerHTML += "<li>"+ todo+ "<li>";
  })
}
