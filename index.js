click.onmouseover = function () {
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    click.style.opacity = timePassed / 10 + "%";

    if (timePassed > 1000) clearInterval(timer);

    if (click.style.opacity > 0) {
      click.onmouseout = function () {
        clearInterval(timer);
        let start1 = Date.now();

        let timer1 = setInterval(function () {
          let timePassed1 = Date.now() - start1;

          click.style.opacity = timePassed / 10 - timePassed1 / 10 + "%";

          if (timePassed1 > 1000) clearInterval(timer1);
        });
      };
    }
  });
};

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
