var writingarea = document.getElementById('writing_content');
var ctrlDown = false;

function bold() {
  document.execCommand('bold');
}

function italic() {
  document.execCommand('italic');
}

function underline() {
  document.execCommand('underline');
}

var a = 0;

function loaded(e) {
  if (e.which == 13) {
    //alert("returned");
    a++;
  }
  if (e.which == 17) {
    ctrlDown = true;
  }
  if(ctrlDown && e.which == 86) {
    alert("Pasted!");
    ctrlDown = false;
  }
  if (a == 12) {
    alert("End of the line;");

  }
  console.log(e.keyCode);
}
//writing.on('keypress', function(e){console.log(e);});



//$('#writing_content').bind("keyup", function(e) {console.log(String.fromCharCode(e.keyCode));});
