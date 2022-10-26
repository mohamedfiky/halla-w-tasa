
/******************************* */

let colors_arr = document.querySelectorAll(".color-imgs div");
let main = document.querySelector(".main");
let smalls = document.querySelectorAll(".small-img");
let large = document.querySelector(".large-img");
  
large.innerHTML = smalls[0].innerHTML ;

smalls.forEach(small =>{

    smalls[0].firstElementChild.style.border = "1px solid #555";

    small.addEventListener("click", function(){

        large.innerHTML = small.innerHTML ;

        large.firstElementChild.style.border = "1px solid rgb(190, 190, 190)";

        smalls.forEach(small_border =>{

            small_border.firstElementChild.style.border = "1px solid rgb(190, 190, 190)";
        });
    
        small.firstElementChild.style.border = "1px solid #555";

    })
});
  
  
  
  
colors_arr.forEach((color) =>{

    colors_arr[0].firstElementChild.style.border = "1px solid #555";

    color.addEventListener("click", function(){
    
        colors_arr.forEach(color_border =>{

            color_border.firstElementChild.style.border = "1px solid rgb(190, 190, 190)";
        });
    
        color.firstElementChild.style.border = "1px solid #555";
    
        main.innerHTML = `
        
        <div class="small-imgs col-lg-3">
            <div class="small-img">
                <img src="../assets/images/${color.className}-p1.jpg">
            </div>
            <div class="small-img">
                <img src="../assets/images/${color.className}-p2.jpg">
            </div>
            <div class="small-img">
                <img src="../assets/images/${color.className}-p3.jpg">
            </div>
        </div>

        <div class="large-img col-lg-9">
            <img src="../assets/images/${color.className}-p1.jpg">
        </div>
        
        `    

        /************************** */

        let smalls = document.querySelectorAll(".small-img");
        let large = document.querySelector(".large-img");
        
        large.innerHTML = smalls[0].innerHTML ;

        smalls.forEach(small =>{

            smalls[0].firstElementChild.style.border = "1px solid #555";

            small.addEventListener("click", function(){
                
                large.innerHTML = small.innerHTML ;

                large.firstElementChild.style.border = "1px solid rgb(190, 190, 190)";

                smalls.forEach(small_border =>{

                    small_border.firstElementChild.style.border = "1px solid rgb(190, 190, 190)";
                });
            
                small.firstElementChild.style.border = "1px solid #555";
        

            })
        });

    
    })
});

/********************************************** *************************/
/***********************************************************************/
/******************************************************************* */ 

/******************************************************************* */

let count_span = document.querySelector(".product-preview .add-to-cart span.count");
let products_count = 1;
let increase_products = document.querySelector(".product-preview .add-to-cart .fa-plus");
let decrease_products = document.querySelector(".product-preview .add-to-cart .fa-minus");

count_span.innerHTML = products_count ;

increase_products.addEventListener("click", function(){
    products_count ++ ;
    count_span.innerHTML = products_count ;
});

decrease_products.addEventListener("click", function(){
    if(products_count > 1){
        products_count -- ;
        count_span.innerHTML = products_count ;
    }else{
        count_span.innerHTML = 1 ;
    }
});



/********************************************** *************************/
/***********************************************************************/
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


  /***************************************************** */
  /**************************************************/ 

   /***************************************************** */
  /**************************************************/ 



  


