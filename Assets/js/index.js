function criaCalculadora(){
    return{
    oper : document.querySelector('.op-list'),
    form : document.querySelector('.input-calc'),
    teste(){
        console.log(this.oper,this.form);
    }
    };
}

const calculadora = criaCalculadora();
calculadora.teste();