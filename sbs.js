let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
let headingBox = document.querySelectorAll('.heading_box');

let a = 0;

rightBtn.addEventListener('click', ()=> {

    a++;
    if(a > headingBox.length - 1) {

        a = 0;
        headingBox[0].classList.remove('hide');
        headingBox[headingBox.length - 1].classList.add('hide');
    }

    headingBox[a].classList.remove('hide');
    headingBox[a - 1].classList.add('hide');
});

leftBtn.addEventListener('click' , ()=> {

    a--;
    if(a < 0) {
        a = headingBox.length - 1;
        headingBox[0].classList.add('hide');
    };

    headingBox[a].classList.remove('hide');
    headingBox[a + 1].classList.add('hide');
});


// NUMBER2.........

let rakeBtn = document.querySelector('.rake-btn');
let backBtn = document.querySelector('.back-btn');
let heroBx = document.querySelectorAll('.hero_bx');  

k = 0;

backBtn.addEventListener('click', ()=> {

    k++;
    if(k > heroBx.length - 1) {

       k = 0;
       heroBx[0].classList.remove('dis');
       heroBx[heroBx.length - 1].classList.add('dis');

    }

    heroBx[k].classList.remove('dis');
    heroBx[k - 1].classList.add('dis');

});

rakeBtn.addEventListener('click' , ()=> {

   k--;
   if(k < 0) {
    k = heroBx.length - 1;
    heroBx[0].classList.add('dis');

  }

    heroBx[k].classList.remove('dis');  
    heroBx[k + 1].classList.add('dis');     
    
});