(function () {
  "use strict";

  const REJECTED_KEY = 'rudolph-rejected';

  const rejected = localStorage.getItem(REJECTED_KEY);

  $('#rudolph .reject').on('click', function (e) {
    e.preventDefault();
    localStorage.setItem(REJECTED_KEY, 'on')
  })

  if (!rejected) {
    $('#rudolph').modal('show');
  }
})();
