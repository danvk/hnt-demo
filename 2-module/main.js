var addNums = require('./add-nums');

// Handle a click on the big button.
function handleClick() {
  var txt = document.getElementById('numbers').value;
  var nums = txt.split(',').map(function(v) {
    return parseInt(v);
  });
  var count = addNums(nums);
  alert('They add to ' + count);
}

// Attach the event handler.
document.querySelector('button')
        .addEventListener('click', handleClick);
