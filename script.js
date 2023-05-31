let pixels = document.querySelectorAll('.pixel');
let chosenColor = document.querySelector('.chosen-color');
let eraser = document.querySelector('.eraser');
let reset = document.querySelector('.reset');
let color = document.querySelector('.color');
let way = document.querySelector('.way');

let isMouseDown = false;
let isEraser = false;

reset.onclick = function () {
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
};

eraser.onchange = function () {
  isEraser = eraser.checked;
};

chosenColor.onchange = function () {
  color.style.backgroundColor = chosenColor.value;
}

for (let pixel of pixels) {
  pixel.addEventListener('mousedown', function () {
    isMouseDown = true;
    if (isEraser) {
      pixel.style.backgroundColor = 'white';
    } else {
      pixel.style.backgroundColor = chosenColor.value;
    }
  });
  pixel.addEventListener('mousemove', function () {
    if (isMouseDown) {
      if (isEraser) {
        pixel.style.backgroundColor = 'white';
      } else {
        pixel.style.backgroundColor = chosenColor.value;
      }
    }
  });
  pixel.addEventListener('mouseup', function () {
    isMouseDown = false;
  });
};

way.onchange = function () {

  let isWay = way.value;

  if (isWay === 'dooble') {
    for (let pixel of pixels) {
      pixel.addEventListener('mousedown', function (e) {
        if (e.detail === 2) {
          isMouseDown = true;
          if (isEraser) {
            pixel.style.backgroundColor = 'white';
          } else {
            pixel.style.backgroundColor = chosenColor.value;
          }
        } else if (e.detail === 1) {
          isMouseDown = false;
        }
      });
      pixel.addEventListener('mousemove', function () {
        if (isMouseDown) {
          if (isEraser) {
            pixel.style.backgroundColor = 'white';
          } else {
            pixel.style.backgroundColor = chosenColor.value;
          }
        }
      });
      pixel.addEventListener('mouseup', function (e) {
        if (e.detail === 2) {
          isMouseDown = true;
        } else if (e.detail === 1) {
          isMouseDown = false;
        };
      });
    };
  } else if (isWay === 'lkm') {
    for (let pixel of pixels) {
      pixel.addEventListener('mousedown', function () {
        isMouseDown = true;
        if (isEraser) {
          pixel.style.backgroundColor = 'white';
        } else {
          pixel.style.backgroundColor = chosenColor.value;
        }
      });
      pixel.addEventListener('mousemove', function () {
        if (isMouseDown) {
          if (isEraser) {
            pixel.style.backgroundColor = 'white';
          } else {
            pixel.style.backgroundColor = chosenColor.value;
          }
        }
      });
      pixel.addEventListener('mouseup', function () {
        isMouseDown = false;
      });
    };
  }
}; 