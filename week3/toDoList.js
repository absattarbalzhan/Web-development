// делит(просто скрывает) возле каждого листового айтема
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// просто скрывает то что выбрал в листе
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";//то что исчезает при удалении
  }
}

// "checked" если выбрать именно эту строчку
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {//its for 2 functions work together
  if (ev.target.tagName === 'LI') {//Target определенное событие, то есть мы определенную цель, удалять только то что выбрал в данном случае LI
    ev.target.classList.toggle('checked');//class to change true, false and vice verse отобразить или скрыть элементы
  } 
});

// "add" кнопка
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);// add child
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}