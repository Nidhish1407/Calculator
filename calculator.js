function add(a,b){return a+b;}
function sub(a,b){return a-b;}
function mul(a,b){return a*b;}
function divide(a,b){return a/b;}
function operate(op,a,b)
{
    switch(op)
    {
        case '+': return add(a,b);break;
        case '-': return sub(a,b);break;
        case '*': return mul(a,b);break;
        case '/': return divide(a,b);break;
    }
}



