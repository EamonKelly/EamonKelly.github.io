function onButtonClick() {
    alert('You Clicked me, Yaaaay');
  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', onButtonClick);
  
  const newButton = document.createElement('button');
  newButton.textContent = 'Click me!';
  document.body.appendChild(newButton);
  
  newButton.addEventListener('click', () => {
    alert('Im the New Button!!');
  });