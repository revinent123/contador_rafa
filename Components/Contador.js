const Contador = () =>{
    
    const [contador,setContador] = React.useState(0);
    const aumentar = ()=>{
        return (setContador(contador + 1));
    }
    const disminuir = ()=>{
        return (setContador(contador - 1));
    }
    return(
<div>
   <h1 className = {contador<0 ? 'menor':'mayor'}>Contador: {contador}</h1>
   <hr/>

   <button id = 'aumentar' onClick = {aumentar}>Aumentar</button>
   <button id = 'disminuir' onClick = {disminuir}>Disminuir</button>
</div>
     
)
}
/*const arr = [1,2,3,4,5];
arr.reduce()
function name(acc,el) {
    
}*/