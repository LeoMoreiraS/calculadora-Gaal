function criaCalculadora() {
    return {
        oper: document.querySelector('.op-list'),
        form: document.querySelector('.input-calc'),
        inicia() {
            operacoes = [
                this.normavet,
                this.prodVet
            ];
            this.clickDoBotao(operacoes);
        },
        tamanhoVet(){
            let existe = this.form.querySelector(".tam");
            if(existe==null){
                let tam = document.createElement('div');
                let sel = document.createElement('select');
                tam.classList.add("tam");
                sel.classList.add("sel");
                for(i=0;i<10;i++){
                    let a = document.createElement('option');
                    a.attributes.value=i;
                    a.text = i+2;
                    sel.appendChild(a);
                }
                tam.appendChild(sel);
                let btn =  document.createElement('button');
                btn.textContent = 'Tamanho';
                btn.classList.add('btn-tam');
                btn.classList.add('btn');
                btn.classList.add('btn-primary');
                tam.appendChild(btn);
                this.form.appendChild(tam);
            }else{
                existe.remove();
                this.tamanhoVet();
            }
        },
        alocaTamVet(tamanho){
            
            let tam =this.form.querySelector(".tam");
            let existe = tam.querySelector('.entrada');
            if(existe==null && tam!=null){

                
                let brk = document.createElement('br');
                let entrada= document.createElement('form');
                entrada.classList.add('entrada');
                entrada.appendChild(brk);
                for(i=0;i<tamanho;i++){
                    
                    let vet1 = document.createElement('input');
                    vet1.id = i;
                    entrada.appendChild(vet1);
                }
                entrada.appendChild(brk);
                for(i=0;i<tamanho;i++){
                    let vet2 = document.createElement('input');
                    vet2.id = tamanho+i;
                    entrada.appendChild(vet2);
                }
                let butao = document.createElement('button');
                butao.classList.add('btn-calc');
                butao.classList.add('btn');
                butao.classList.add('btn-primary');
                butao.textContent='Calcular'
                entrada.appendChild(butao);
                tam.appendChild(entrada);
            }else{
                existe.remove();
                this.alocaTamVet(tamanho);
            }

            
        },
        normavet(tamanho,op) {
            console.log(tamanho + ' ' + op);
        },
        prodVet(tamanho,op) {
            console.log(tamanho + ' ' + op);
        },

        clickDoBotao(operacoes) {

            this.form.addEventListener('click', (e) => {
                e.preventDefault();
                let evntrgt = e.target;
                console.log(evntrgt);
                if (evntrgt.classList.contains('btn-op')) {
                    let op = this.oper.value;
                    this.teste(this.oper.value);
                    if(op>= 0 && op<=2){
                        this.tamanhoVet();
                    }
                    
                }
                if (evntrgt.classList.contains('btn-tam')){
                    
                    let tamanho = document.querySelector('.sel');
                    this.alocaTamVet(tamanho.value);
                    //
                    
                }
                if(evntrgt.classList.contains('btn-calc')){
                    let op = this.oper.value;
                    let tamanho = document.querySelector('.sel');
                    operacoes[op](tamanho.value,op);
                }
            });
        },
        teste(a) {
            console.log(a);
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();