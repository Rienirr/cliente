export class localStorage{
    
    setItem=(listado)=>{//Añadimos un nuevo item .
        localStorage.setItem("listado",JSON.stringify(listado));
    }
    getItem=(clave="listado")=>{//Leemos un item.
    localStorage.getItem(clave);
    }
}