function myFunction() {
  var my_modal = document.getElementById('modal-inner-content');
  var current_div = event.target.parentElement.parentElement.parentElement.parentElement.lastElementChild;
  my_modal.innerHTML = current_div.innerHTML;
}
