function onButtonClick() {
    alert('You Clicked me, Yaaaay');
  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', onButtonClick);
  
  const newButton = document.createElement('button');
  newButton.textContent = 'Click me!';
  document.body.appendChild(newButton);
  
  newButton.addEventListener('click', () => {
    
    
    
    alert('H̵̛̛̛͉̩̔̃̿̏͊̿͑͗͆͊̄̋̿͐̀͌̑̋̈́́̕͝͝͝a̶̧̨̡̛̠̦̮̤̞̥͕͙̩̤̱̥̙̫̫͎͎͕̳̞̘̺̲͕̲͈̤̤͙͉̓̆̈́̍̔̊͆̓̽̆̆̀̎̉͛̈́̒̂̈́̔̾͆̌̆͒̊͌̀̊̃̓̐͘͘͘̚̕͠͝͝͝m̸̢̼̘͎͈͍͉̲̥͙̹͗̅̃̌̑̌͒̓̌̽̂̍̔̀̏͑̅̓͛̓͜͝B̷̡̢͈̻͉̭͖̠͎͖̱͖͇̬̖̯͓͉̜͕̟͖̝͍͖̈́̊̉́̏̆̀̆̑̔͆̿̉̾̎̔̆͐͋͛͆̃̎̎̈́̎̂̓̚͠͝͠͝ͅư̷̢̡̨̹̩͙̖̭̮̹͔͚̝̠͙͇̞̪̣̙̯̙͔͌́̈̋͋̋́́͋̾͑̈́̂̌́͛̀̋̽̈̚͘̕̚͘͜͜͜͝͠͠͠͠ͅr̴̡̡̙͈͇̹̝̯̘̻͚̰͙͙̤̮̱̖̺̜̙̊̅̏̃̒̾̽͘͜͠͠ͅg̴̨̢̖͉̯̬̮̱͖̯̤͙̯͓̮͚͉̩̮̤͈̙̲̀̽̊́͑̅̈́̃̎̃̀͆͐̄̎̾͌̾̃̄̈́́̆̂̋̾̓̌̌̓͘̕̕̚͘͘͘̚̕͘͜ē̸̦̼̗͚̹͇͓r̶̤̩̻͈͙̲̻̝͚̠̬̩̄̄͌̏̆̐͆̌̊̃͒̿͗̉̅̄͘͜͝');
  });