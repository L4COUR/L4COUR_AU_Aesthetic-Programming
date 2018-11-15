var checkbox;

function setup() {
  checkbox = createCheckbox('label', false);
  checkbox.changed(myCheckedEvent);
}

function myCheckedEvent() {
  if (this.checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
}
