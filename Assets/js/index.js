function criaCalculadora(){
    return{
    oper : document.querySelector('.op-list'),
    form : document.querySelector('.input-calc'),
    inicia(){
        this.clickDoBotao();
        console.log(this.form);
    },
    clickDoBotao(){
        this.form.addEventListener('click',(e) =>{
            e.preventDefault();
            let evntrgt = e.target;
            if(evntrgt.classList.contains('btn-op')){
                this.teste(this.oper.value);
            }

        });
    },
    teste(a){
       console.log(a);
    }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();