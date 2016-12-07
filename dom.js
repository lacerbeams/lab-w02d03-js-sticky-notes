var button = document.querySelector('button');
var board = document.querySelector('.board');
var counter = board.children.length;
var clickNum = document.querySelector('p')

var stickyNotes = function(event) {
  console.log('clicked');
  var note = document.createElement('div')
  note.contentEditable = true;
  note.className = 'note';
  board.appendChild(note)
  note.innerHTML = '<span class="remove" contenteditable="false"><img src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_12-512.png"><br></span>Your note here';

  var remove = document.querySelectorAll('.remove');

  var removeNote = function(event) {
    this.parentNode.remove();
    clicks = board.children.length;
    clickNum.innerHTML = 'You have created ' + clicks + ' note(s).'
  }
    for (var i = 0; i < remove.length; i++) {
      remove[i].addEventListener('click', removeNote);
    }
}

var clicks = 0
var onClick = function() {
  clicks = board.children.length;
  clickNum.innerHTML = 'You have created ' + clicks + ' note(s).'
}



button.addEventListener('click', stickyNotes);
button.addEventListener('click', onClick);
