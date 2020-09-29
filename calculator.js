let exp ='';
// num1='',num2='',op='';
const screen = document.querySelector(".screen");
screen.textContent = '78';
function add(a,b){return +a + +b;}
function sub(a,b){return +a - +b;}
function mul(a,b){return +a * +b;}
function divide(a,b){return +a/+b;}
function pow(a,b){return a**b;}
function mod(a,b){return a%b;}


function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
function calculate(n)
{
   exp+=n;
   screen.textContent = exp;
}
function evaluate(e)
{
    
   for(let i=0;i<exp.length;i++)
   {
       if(!isNumeric(exp[i]))
       {
           var num1 = exp.slice(0,i);
           var op = exp[i];
           var num2 = exp.slice(i+1,exp.length);
           break;
       }
   }
   exp = operate(op,num1,num2);
  
   screen.textContent = exp; 
   exp = '';

}
function operate(opr,a,b)
{
    switch(opr)
    {
        case '+': return add(a,b);break;
        case '-': return sub(a,b);break;
        case '*': return mul(a,b);break;
        case '/': return divide(a,b);break;
        case '^': return pow(a,b);break;
        case '%': return mod(a,b);break;
    }
}
const numbers = document.querySelector(".nums");

const num = [];let temp;
for(let i=0;i<10;i++)
{
    temp = numbers.querySelector(`#num-${i}`).addEventListener('click',(e)=>calculate(e.target.textContent));
    num.push(temp);
}

const operators = document.querySelector(".operaters");
for(let i=1;i<=6;i++)
{
    temp = operators.querySelector(`#op-${i}`).addEventListener('click',(e)=>calculate(e.target.textContent));
}
operators.querySelector(`#op-7`).addEventListener('click',(e)=>evaluate(e));




