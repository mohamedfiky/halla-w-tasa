

/******************************************************************* */ 
/******************************************************************* */
var angle = 0;

function galleryspin(sign) { 

 let spinner = document.querySelector("#spinner");

 if (!sign) {

    angle = angle + 90; 

 } else {

    angle = angle - 90;

   }

 spinner.setAttribute("style"," transform: rotateY("+ angle +"deg);");
};


 /****************************************************************************/