// Сайдбар выезжает и заезжает по клику на burger (добаляем класс)
function burger_menu(){

   var button = document.getElementById("sidebar");
   button.classList.toggle("active_button");     
    }   

// Изменяем размер шрифта
var Size = document.getElementById("changeSize");
Size.onchange = function fontSize() {
  var fSize = document.getElementById("changeSize").value;
  fSize = Math.round(parseInt(fSize));
    if (fSize>=8 && fSize<=24) {
      var par = document.getElementsByTagName('p');
      for(m=0;m<par.length;m++){
      par[m].style.fontSize = fSize + "px";
      } 
    }
    else {
    alert("Введите целое число от 8 до 24");
    }
}
// Меняем цвет background
var bg_color = document.getElementsByName("bg_color");
for(var i=0;i<bg_color.length;i++){

bg_color[i].onclick = function(event) {
  event = event || window.event;
  if (event.target.id == "bg_green"){
    document.body.style.backgroundColor = "green";
  }
  else if (event.target.id == "bg_blue"){
    document.body.style.backgroundColor="blue";
  }
  else if (event.target.id == "bg_yellow"){
    document.body.style.backgroundColor = "yellow";
  }
  else {
    document.body.style.backgroundColor="#ebebeb";
  }
}
}



// Меняем шрифт
var font_text = document.getElementsByName("font");
for(var j=0;j<font_text.length;j++){
  font_text[j].onclick = function(event) {
    var elems = document.getElementsByTagName('*');
    for (var k=0; k<elems.length; k++) {
      if (event.target.id == "font_arial"){
        elems[k].style.fontFamily = "Arial";
      }
      else if (event.target.id == "font_tnr"){
        elems[k].style.fontFamily="Times New Roman";
      }
      else if (event.target.id == "font_ss"){
        elems[k].style.fontFamily = "sans-serif";
      }
      else {
        elems[k].style.fontFamily="";
      }
  }
}
}
// Удаляем последний параграф
var del= document.getElementById("del");
del.onclick = function push_button() { 
  var remove_p = document.getElementsByTagName('p');
  var lastItem=remove_p[remove_p.length -1];
  lastItem.remove();
}






 
