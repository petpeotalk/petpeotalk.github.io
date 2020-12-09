(function () {
  "use strict";

  const WATCHED_KEY = 'rudolph-watched';
  const REJECTED_KEY = 'rudolph-rejected';
  
  const watched = localStorage.getItem(WATCHED_KEY);
  const rejected = localStorage.getItem(REJECTED_KEY);

  $('#rudolph .reject').on('click', function (e) {
    e.preventDefault();
    localStorage.setItem(REJECTED_KEY, 'on')
  })

  $('#rudolph .watch').on('click', function (e) {
    e.preventDefault();
  })

  if (!rejected) {
    $('#rudolph').modal('show');
  }
})();
