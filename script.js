// Écrivez votre code JavaScript ici.
const addSelectButton = document.querySelector('button');
const selectUl = document.querySelector('ul');
const buttonDel = document.createElement('button');
addSelectButton.className = 'add.btn';
let count = 0;


const renderItems = () => {

  if (document.querySelector('input').value === '') {
    return alert('Wrong value');
  }

  const selectDeleteButton = '.'+deleteButton.className;
  const liAdd = document.createElement('li');
  deleteButton.className = 'btn-del' + count;
  liAdd.className = 'li' + count;
  count++;

  document.querySelector(selectDeleteButton).addEventListener('click', (evt) => {
    evt.stopPropagation();
    document.querySelector(selectLi).remove();
  })
  document.querySelector('input').focus();
}

addSelectButton.addEventListener('click', renderItems);
