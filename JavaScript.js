var circles = document.querySelectorAll('.circle');
var selectedColor = document.getElementById('selected-color');

circles.forEach(function (circle) {
  circle.addEventListener('click', function () {
    if (circle.classList.contains('selected')) {
      circle.classList.remove('selected');
      selectedColor.textContent = 'Select Color: Brown';
    } else {
      circles.forEach(function (otherCircle) {
        otherCircle.classList.remove('selected');
      });
      circle.classList.add('selected');
      selectedColor.textContent = 'Select Color: ' + circle.classList[1];
    }
  });
});

/*********************************ACCORDION JavaScript************************************/
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
/********************************************Counter Js************************/
$(document).ready(() => {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

$(document).ready(function () {
  $('.container').click(function () {
    $('.bar1').toggleClass('change1');
    $('.bar2').toggleClass('change2');
    $('.bar3').toggleClass('change3');
  });
  $('.container').click(function () {
    $('#nav_menue_items').slideToggle('slow');
  });
});
const input_display = document.querySelector('#nav-input');
const searchIcon = document.querySelector('.fa-search');
const closeIcon = document.querySelector('.fa-close');
const nav_input_container = document.querySelector('.nav_input_div');
searchIcon.addEventListener('click', function () {
  if (input_display.style.display == 'block') {
    input_display.style.display = 'none';
  } else {
    // Show the element if it is currently hidden
    input_display.style.display = 'block';
    input_display.style.position = 'absolute';
    input_display.style.display = 'block';
    input_display.style.zIndex = '1';
    input_display.style.top = '12px';
    input_display.style.right = '25px';
  }
});
const cabinet_row = document.querySelector('#check_list_div_cabinet_div_row');
const filtercontainer = document.querySelector('#filter-container');
$(document).ready(function () {
  $('.filter_button').click(function () {
    filtercontainer.style.backgroundColor = 'white';
    filtercontainer.style.width = '100%';
    filtercontainer.style.position = 'absolute';
    filtercontainer.style.paddingInline = '40px';
    filtercontainer.style.height = '1000vh';
    $('#filter-container').slideToggle('slow');
  });
});

// var button = document.getElementById('filter-button');
// var container = document.getElementById('filter-container');
// var input = document.querySelectorAll('input');
// button.onclick = function (e) {
//   e.stopPropagation();
//   if (container.classList.contains('check_list_div--active')) {
//     container.classList.remove('check_list_div--active');
//   } else {
//     container.classList.add('check_list_div--active');
//   }
// };

// button.onclick = function (e) {
//   e.stopPropagation();
//   if (container.classList.contains('check_list_div--active')) {
//     container.classList.remove('check_list_div--active');
//   } else {
//     container.classList.add('check_list_div--active');
//   }
// };

// container.onclick = function (e) {
//   e.stopPropagation();
// };

// window.onclick = function () {
//   container.classList.remove('check_list_div--active');
// };

// console.log(input);

// for (var i = 0; i < input.length; i++) {
//   var currentInput = input[i];

//   currentInput.onclick = function () {
//     var isChecked = false;
//     for (var j = 0; j < input.length; j++) {
//       if (input[j].checked) {
//         isChecked = true;
//         break;
//       }
//     }

//     if (isChecked) {
//       button.classList.add('button--highlight');
//     } else {
//       button.classList.remove('button--highlight');
//     }
//   };
// }
