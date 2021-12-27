//for the p5.js images in popup9
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("intro");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

//each different modal content
 $('#popup1').popup();


        //for the popup modal 2//
$('#popup2').popup();

//FOR POP MODAL 3
$('#popup3').popup();

//FOR POP MODAL 4
$('#popup4').popup();

//FOR POP MODAL 5
$('#popup5').popup();

//FOR POP MODAL 6
$('#popup6').popup();
    //FOR POP MODAL 7
        $('#popup7').popup();

        //FOR POP MODAL 8
        $('#popup8').popup();
          //FOR POP MODAL 9
                $('#popup9').popup();
