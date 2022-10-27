/******************************************************************* */ 
/******************************************************************* */

let spans = document.querySelectorAll(".main-products span");
  let products = document.querySelectorAll(".main-products .product")
  let product_page = Math.ceil(products.length/4);
  let l = 0;
  let movePer = 25.34;
  let maxMove = 250;

  // mobile_view	
  let mob_view = window.matchMedia("(max-width: 992px)");
  if (mob_view.matches)
   {
       movePer = 50.7;
       maxMove = 520;
   }

  let right_mover = ()=>{
      l = l + movePer;
      if (products == 1){l = 0; }
      for(const i of products)
      {
          if (l > maxMove){l = l - movePer;}
          i.style.left = l + '%';
      }

  }
  let left_mover = ()=>{
      l = l - movePer;
      if (l<=0){l = 0;}
      for(const i of products){
          if (product_page>1){
              i.style.left = l + '%';
          }
      }
  }

  spans[0].onclick = ()=>{left_mover();}
  spans[1].onclick = ()=>{right_mover();}

    /****************************************************************************/
  /****************************************************************************/

  let spans2 = document.querySelectorAll(".best-seller span");
  let products2 = document.querySelectorAll(".best-seller .product")
  let product2_page = Math.ceil(products.length/4);
  let l2 = 0;
  let movePer2 = 25.34;
  let maxMove2 = 250;

  // mobile_view	
  let mob_view2 = window.matchMedia("(max-width: 992px)");
  if (mob_view2.matches)
   {
       movePer2 = 50.7;
       maxMove2 = 520;
   }

  let right_mover2 = ()=>{
      l2 = l2 + movePer2;
      if (products2 == 1){l2 = 0; }
      for(const i of products2)
      {
          if (l2 > maxMove2){l2 = l2 - movePer2;}
          i.style.left = l2 + '%';
      }

  }
  let left_mover2 = ()=>{
      l2 = l2 - movePer;
      if (l2<=0){l2 = 0;}
      for(const i of products2){
          if (product2_page>1){
              i.style.left = l2 + '%';
          }
      }
  }
  spans2[0].onclick = ()=>{left_mover2();}
  spans2[1].onclick = ()=>{right_mover2();}



  /****************************************************************************/
  /****************************************************************************/
  /****************************************************************************/



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



  /******************************************************/
  /*****************************************************/ 



  


