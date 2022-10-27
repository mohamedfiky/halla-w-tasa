

let colors_arr = document.querySelectorAll(".color-imgs div");
let main = document.querySelector(".main");
let smalls = document.querySelectorAll(".small-img");
let large = document.querySelector(".large-img");
  

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

 /********************************************** *************************/
/***********************************************************************/


