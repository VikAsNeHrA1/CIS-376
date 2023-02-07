$(function () {
    console.log("bring the wow");
  
    var $drag_counter = $("#event-drag"),
      counts = 0;
  
    $("#resetGame").click(function () {
      console.log("clicked button");
      counts = 0;
      $("span.count").text(counts);
      $("#gameOutput").text("");
    });
  
    $("#draggable").draggable({
      drag: function () {
        counts++;
        updateCounterStatus($drag_counter, counts);
      },
    });
  
    function updateCounterStatus($event_counter, new_count) {
  
      var game_msg = "";
  
      if (new_count < 25) {
        game_msg = "keep trying there good buddy!";
      } else if (new_count >= 25 && new_count<=75) {
        game_msg = "super secret wunderfull game winner!";
      } else if (new_count > 75 && new_count < 100) {
        game_msg = "super awesome game winner!";
      } 
      else {
        game_msg = "you are winner!";
      }
  
      $("#gameOutput").text(game_msg);
      $("span.count", $event_counter).text(new_count);
    }
  });
  