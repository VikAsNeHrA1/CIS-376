$(document).ready(function() {
  const $draggable = $("#draggable");
  const $reset = $("#reset");
  const $target = $("#target");
  const winSound = new Audio('Audio/win.wav');


  $draggable.mousedown(function(event) {
    event.preventDefault();
    let initialX = event.clientX - $draggable.offset().left;
    let initialY = event.clientY - $draggable.offset().top;

    $(document).mouseup(function() {
      $(document).off("mousemove");
      checkForWin();
    });

    $(document).mousemove(function(event) {
      let finalX = event.clientX - initialX;
      let finalY = event.clientY - initialY;
      $draggable.css("left", finalX + "px");
      $draggable.css("top", finalY + "px");
    
    });
  });

  $reset.click(function() {
    $draggable.css("left", "200px");
    $draggable.css("top", "200px");
  });

  function checkForWin() {
    if (isOverlap($draggable, $target)) {
      winSound.play(); // play the win sound effect
      alert("Wow! You really Moved it more.");
    }
  }

  function isOverlap($element1, $element2) {
    const element1Rect = $element1[0].getBoundingClientRect();
    const element2Rect = $element2[0].getBoundingClientRect();

    return !(
      element1Rect.bottom < element2Rect.top ||
      element1Rect.top > element2Rect.bottom ||
      element1Rect.right < element2Rect.left ||
      element1Rect.left > element2Rect.right
    );
  }
});
