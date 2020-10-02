let exp = '';
// num1='',num2='',op='';
const screen = document.querySelector(".screen");

const allclear = document.querySelector("#Allclear");
allclear.addEventListener('click',allclearSC);

const clear = document.querySelector("#clear");
clear.addEventListener('click',clearSC);

const del = document.querySelector("#del");
del.addEventListener('click',clearSC);

function clearSC()
{
    exp = exp.slice(0,exp.length-1);
    screen.textContent=exp;
}
function allclearSC()
{
    exp = '';
    screen.textContent=exp;
}

function add(a,b){return +a + +b;}
function sub(a,b){return +a - +b;}
function mul(a,b){return +a * +b;}
function divide(a,b){return +a/+b;}
function pow(a,b){return a**b;}
function mod(a,b){return a%b;}


function isNumeric(value){
    return /^-?[0-9.,]+/.test(value);
}
function isFloat(x) { return !!(x % 1); }

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
   exp =  operate(op,Number(num1),Number(num2));
    //   exp =  numType(op,num1,num2);
  
   screen.textContent = exp; 
   exp = '';
}
function numType(op,num1,num2)
{
    if(isFloat(num1))
    {
        var num1 = parseFloat(num1);
    }
    if(isFloat(num2))
    {
        var num2 = parseFloat(num2);
    }
    return operate(op,num1,num2);
   
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

let temp;
for(let i=0;i<10;i++)
{
    temp = numbers.querySelector(`#num-${i}`).addEventListener('click',(e)=>calculate(e.target.textContent));
}
const decimal = numbers.querySelector("#dec");
decimal.addEventListener('click',()=>{
     console.log('clicked');
     if(exp == '')
    { 
        exp = '0.';
        screen.textContent=exp;
    }
     else
     {
         if(exp[exp.length-1]!= '.')
         exp+='.';
         screen.textContent=exp;
     }
});

const operators = document.querySelector(".operaters");
for(let i=1;i<=6;i++)
{
    temp = operators.querySelector(`#op-${i}`);
    temp.addEventListener('click',(e)=>calculate(e.target.textContent));
    
}
operators.querySelector(`#op-7`).addEventListener('click',(e)=>evaluate(e));

//Adding eventlisteners for keys
document.addEventListener('keydown',(e)=>{
    if(e.key == 'Delete')
    {
       allclearSC();
    }
    else if(e.key == 'Backspace')
    {
        clearSC();
    }
    
})