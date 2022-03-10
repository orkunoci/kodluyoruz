var getName = prompt("İsminiz");
console.log(getName);

document.getElementById("myName").innerText = getName;

function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  var time = h + ":" + m + ":" + s + "";
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;
  setTimeout(showTime, 1000);
}
showTime();
