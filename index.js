let click = document.getElementsByClassName('click');
console.log(click);


for (let i=0;i<click.length;i++){



  
  click[i].onmouseover = function () {
    let start = Date.now();
    let timer = setInterval(function () {
      let timePassed = Date.now() - start;
  
      click[i].style.opacity = timePassed / 5 + "%";
  
      if (timePassed > 500) clearInterval(timer);
     
      if (click[i].style.opacity > 0) {
        click[i].onmouseout = function () {
          clearInterval(timer);
          let start1 = Date.now();
  
          let timer1 = setInterval(function () {
            let timePassed1 = Date.now() - start1;
  
            click[i].style.opacity = timePassed / 5 - timePassed1 / 5 + "%";
  
            if (timePassed1 > 500) clearInterval(timer1);
          });
        };
      }
    });
  };





}



// click.onmouseout = function () {
//   let start = Date.now();

//   let timer = setInterval(function () {
//     let timePassed = Date.now() - start;

//     click.style.opacity = 100 - timePassed / 10 + "%";

//     if (timePassed > 1000) clearInterval(timer);
//   });
// };

// if (click.style.opacity == 0) {
//   click.onmouseover = function () {
//     let start = Date.now();

//     let timer = setInterval(function () {
//       let timePassed = Date.now() - start;

//       click.style.opacity = timePassed / 10 + "%";

//       if (timePassed > 1000) clearInterval(timer);
//     });
//   };
// }
