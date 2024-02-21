window.setTimeout(EndVoting, 180000);

$("input").on("change", function () {
	$("body").toggleClass("blue");
});

$("#play-btn").click(function (e) {});

$("#song-1").click(function (e) {
	$("span").css("width", "82%");
	$("#where-to").attr("href", "./satisfaction.html");
});

$("#song-2").click(function (e) {
	$("span").css("width", "28%");
	$("#where-to").attr("href", "./efficiency.html");
});

$("#song-3").click(function (e) {
	$("span").css("width", "64%");
	$("#where-to").attr("href", "./hurdles.html");
});

$(function() {
  var TTimer = {
    startedTime: new Date(),
    restoredFromSession: false,
    started: false,
    minutes: 0,
    seconds: 0,
    
    tick: function tick() {
      // Since setInterval is not reliable in inactive windows/tabs we are using date diff.
      var diffInSeconds = Math.floor((new Date() - this.startedTime) / 1000);
      this.minutes = Math.floor(diffInSeconds / 60);
      this.seconds = diffInSeconds - this.minutes * 60;
      this.render();
      this.updateSession();
    },
    
    utilities: {
      pad: function pad(number) {
        return number < 10 ? '0' + number : number;
      }
    },
    
    container: function container() {
      return $(document);
    },
    
    render: function render() {
      this.container().find('#timer-minutes').text(this.utilities.pad(this.minutes));
      this.container().find('#timer-seconds').text(this.utilities.pad(this.seconds));

    },
    
    updateSession: function updateSession() {
      sessionStorage.setItem('timerStartedTime', this.startedTime);
    },
    
    clearSession: function clearSession() {
      sessionStorage.removeItem('timerStartedTime');
    },
    
    restoreFromSession: function restoreFromSession() {
      // Using sessionsStorage to make the timer persistent
      if (typeof Storage == "undefined") {
        console.log('No sessionStorage Support');
        return;
      }

      if (sessionStorage.getItem('timerStartedTime') !== null) {
        this.restoredFromSession = true;
        this.startedTime = new Date(sessionStorage.getItem('timerStartedTime'));
      }
    },
    
    start: function start() {
      this.restoreFromSession();
      this.stop();
      this.started = true;
      this.tick();
      this.timerId = setInterval(this.tick.bind(this), 1000);
    },
    
    stop: function stop() {
      this.started = false;
      clearInterval(this.timerId);
      this.render();
    }
  };

  TTimer.start();

});

function EndVoting() {

}