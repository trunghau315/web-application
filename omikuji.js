var username;
var userresult;
var name;


username = prompt("お名前を教えて下さい。");
if (username ==""){
  username="名無し"
}
document.getElementById("name").textContent = username;

var rand = Math.floor( Math.random() * 5);
if (rand == 0) {
  userresult = "大吉";
}
if (rand == 1) {
  userresult = "中吉";
}
if (rand == 2) {
  userresult = "小吉";
}
if (rand == 3) {
  userresult = "吉";
}
if (rand == 4) {
  userresult = "凶";
}
document.getElementById("result").textContent = userresult;
if (document.getElementById("").textContent == username){
  　username= "名無し"
}