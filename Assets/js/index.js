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
            console.log(this.form);
        },
        tamanhoVet(){
            console.log();
            let tam = document.createElement('select');
            tam.classList.add("tam");
            let t = new Array();
            for(i=0;i<10;i++){
                let a = document.createElement('option');
                a.attributes.value=i;
                a.text = i+2;
                t.push(a);
                tam.appendChild(t[i]);
            }
            this.form.appendChild(tam);
            let btn =  document.createElement('button');
            btn.textContent = 'Tamanho';
            btn.classList.add('btn-tam');
            this.form.appendChild(btn);
        },
        normavet(tamanho) {
            console.log(tamanho);
        },
        prodVet(tamanho) {
            console.log(tamanho);
        },

        clickDoBotao(operacoes) {

            this.form.addEventListener('click', (e) => {
                e.preventDefault();
                let evntrgt = e.target;
                if (evntrgt.classList.contains('btn-op')) {
                    let op = this.oper.value;
                    this.teste(this.oper.value);
                    if(op>= 0 && op<=2){
                        this.tamanhoVet();
                    }
                    
                }
                if (evntrgt.classList.contains('btn-tam')){
                    let op = this.oper.value;
                    let tamanho = document.querySelector('.tam');
                    operacoes[op](tamanho.value);
                    
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