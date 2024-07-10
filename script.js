document.addEventListener('DOMContentLoaded', (event) => {
    const bufferDisplay = document.getElementById('calc-display-text');
    var buffer = '';
    var op = '';
    var firstNumber = 0;
    var secondNumber = 0;
    let buttons = document.querySelectorAll('.calc-btn');
    for(const btn of buttons){
        console.log(btn);
        btn.addEventListener('click', function(){
            console.log(this.innerText);
            switch(this.innerText){
                case '=':
                    secondNumber = parseInt(buffer);
                    switch(op){
                        case '+':
                            buffer = firstNumber + secondNumber;
                            break;
                        case '-':
                            buffer = firstNumber - secondNumber;
                            break;
                        case '/':
                            buffer = firstNumber / secondNumber;
                            break;
                        case '*':
                            buffer = firstNumber * secondNumber;
                            break;
                        default:
                            console.log('no op');
                    }
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    firstNumber = parseInt(buffer);
                    op = this.innerText;
                    buffer = '0';
                    break;
                case 'C':
                    buffer = '0';
                    op = '';
                    firstNumber = 0;
                    secondNumber = 0;
                    break;
                case '(-)':
                    buffer = (parseInt(buffer) * -1).toString();
                    break;
                default:
                    if(buffer !== '0')
                        buffer += this.innerText;
                    else
                        buffer = this.innerText;
                    break;
            }
            bufferDisplay.innerText = buffer;
        })
    }
});
