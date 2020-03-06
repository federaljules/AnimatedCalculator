
var tulosDiv = document.getElementById('tulos');
var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');
var content3 = document.getElementById('content3');
var luku1 = document.getElementById('l1');
var luku2 = document.getElementById('l2');
let btn = document.getElementById('btn');
var options = document.getElementById('options');


function laskeprs(){
   var prc = document.getElementById('prc').value;
   var from = document.getElementById('value1').value;
   tulosDiv.innerHTML = +from / 100 * +prc;
}

function laskeprs(){
    var prc = document.getElementById('prc').value;
    var from = document.getElementById('value1').value;
    tulosDiv.innerHTML = +from / 100 * +prc;
 }


  /////////////////////////////////////////////////


$('#l1').keyup(function () {
  let output = document.getElementById('content1');
  output.innerHTML = document.getElementById('l1').value;
  output.style.opacity = '1';

});

$('#l2').keyup(function () {
    let output = document.getElementById('content3');
    output.innerHTML = document.getElementById('l2').value;
    output.style.opacity = '1';
  
  });




  /////////////////////////////////////////////////

 let cube1 = anime({
    targets: '#content1',
    keyframes: [
        {translateX: 111,scale:2},
        {rotate: '7turn', scale: 0}, {rotate: '7turn', scale: 1,opacity:1,duration:2000,translateX: -50}],
    backgroundColor: 'red',
    duration: 1500,
    autoplay: false,
    easing: 'easeInOutSine'

  });

 

  let cube3 = anime({
    targets: '#content3',
    keyframes: [
        {translateX: -111,scale:2},
        {rotate: '7turn', scale: 0,opacity:0},
        {rotate: '7turn', scale: 1,opacity:1,duration:2000, translateX: 50}],
            backgroundColor: 'red',
    duration: 1500,
    autoplay: false,
    easing: 'easeInOutSine'

  });

  let cube2 = anime({
    targets: '#content2',
    keyframes: [
        {scale:2},
        {rotate: '7turn', scale: 0, opacity:0}, {rotate: '7turn', scale: 1,opacity:1,duration:2000}],
    duration: 1500,
    autoplay: false,
    easing: 'easeInOutSine'

  });

  let tulos = anime({
    targets: '#tulos',
    keyframes: [
        {translateX:-170},{ scale:0},
        {scale: 2, translateY:70, opacity:1, duration:2000}],
        duration: 1500,
    autoplay: false,
    easing: 'easeInOutSine'

  });

  content2.innerHTML ="+";
  $('select').on('load change', function() {
    if(this.value == "minus"){
    content2.innerHTML = "-";
}
    else if(this.value == "jako"){
    content2.innerHTML = "/";
  }
  else if(this.value == "kerto"){
    content2.innerHTML = "*";
  }
});

  function animateAll() {

    var options = document.getElementById('options').value;

    if(options == "plus"){
        tulosDiv.innerHTML = +luku1.value + +luku2.value;
        content2.innerHTML = "+";
    }
    else if(options == "minus"){
        tulosDiv.innerHTML = +luku1.value - +luku2.value;
        content2.innerHTML = "-";
    }
    else if(options == "jako"){
        tulosDiv.innerHTML = +luku1.value / +luku2.value;
        content2.innerHTML = "/";
    }
    else if(options == "kerto"){
        tulosDiv.innerHTML = +luku1.value * +luku2.value;
        
    }

    cube1.play();
    cube2.play();
    cube3.play();
    tulos.play();
  }

  btn.onclick = animateAll;