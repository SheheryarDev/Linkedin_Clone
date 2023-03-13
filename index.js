window.onscroll = function() {myFunction()};
    
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    function openNav() {
  document.getElementById("chatBox").style.height = "600px";
  document.getElementById("chatBox").style.height = "600px";
}

function closeNav() {
  document.getElementById("chatBox").style.height = "48px";
}