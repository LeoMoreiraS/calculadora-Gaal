function criaCalculadora(){
    return{
    oper : document.querySelector('.op-list'),
    form : document.querySelector('.input-calc'),
    normavet(){
        console.log('oi');
    },
    prodVet(){
        console.log('ola');
    },
    inicia(){
        operacoes = [
            this.normavet,
            this.prodVet
        ];
        this.clickDoBotao(operacoes);
        console.log(this.form);
    },
    
    clickDoBotao(operacoes){
        
        this.form.addEventListener('click',(e) =>{
            e.preventDefault();
            let evntrgt = e.target;
            if(evntrgt.classList.contains('btn-op')){
                let op = this.oper.value;
                this.teste(this.oper.value);
                operacoes[op]();
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