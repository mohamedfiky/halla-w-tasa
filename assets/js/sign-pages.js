let show_password = document.querySelector("i.fa-eye");
let hide_password = document.querySelector("i.fa-eye-slash");
let input_password = document.querySelector(".password-eye input");

show_password.addEventListener("click", function(){
    input_password.setAttribute("type", "text");
    show_password.style.display = "none";
    hide_password.style.display = "block";
});

hide_password.addEventListener("click", function(){
  input_password.setAttribute("type", "password");
  hide_password.style.display = "none";
  show_password.style.display = "block";
});