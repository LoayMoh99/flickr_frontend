/* eslint-disable linebreak-style */
export function showEdit() {
  const modal = document.getElementsByClassName('modal__backdrop');
  modal[0].classList.add('show_modal');
}

export function closeEdit() {
  const modal = document.getElementsByClassName('modal__backdrop');
  modal[0].classList.remove('show_modal');
}
