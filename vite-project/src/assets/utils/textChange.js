export function setupTextChange() {
    const changeTextButton = document.getElementById('changeTextButton');
    const myTextElement = document.getElementById('myText');
  
    changeTextButton.addEventListener('click', () => {
      myTextElement.textContent = 'Hello, Check!';
    }); //on click, shows the new text: 'Hello, Check!'
  }