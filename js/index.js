function change() {
   var i=document.getElementById("changecol").value;
   var button1 = document.getElementById("button1");
   button1.onclick = function() {
	   document.body.style.backgroundColor= i ;
   }


}


change();