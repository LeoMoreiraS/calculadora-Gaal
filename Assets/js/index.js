function criaCalculadora() {
    return {
        oper: document.querySelector('.op-list'),
        form: document.querySelector('.input-calc'),
        inicia() {
            operacoes = [
                this.normavet,
                this.prodEsc
            ];
            this.eventos(operacoes);
        },
        tamanhoVet(){
            let existe = this.form.querySelector(".tam");
            if(existe==null){
                let tam = document.createElement('div');
                let sel = document.createElement('select');
                tam.classList.add("tam");
                sel.classList.add("tam-list");
                let deflt = document.createElement('option');
                deflt.selected = 'true';
                deflt.disabled = 'true';
                deflt.style = "display: none";
                deflt.innerText = 'escolha o tamanho';
                sel.appendChild(deflt);
                
                for(i=0;i<5;i++){
                    let a = document.createElement('option');
                    a.attributes.value=i;
                    a.text = i+2;
                    sel.appendChild(a);
                }
                tam.appendChild(sel);
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
                //vetor 1
                for(i=0;i<tamanho;i++){
                    
                    let vet1 = document.createElement('input');
                    vet1.name = i;
                    entrada.appendChild(vet1);
                }
                //vetor 2
                entrada.appendChild(brk);
                for(i=0;i<tamanho;i++){
                    let vet2 = document.createElement('input');
                    vet2.name = parseInt(tamanho)+i;
                    entrada.appendChild(vet2);
                }
                //botao de calculo
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
        pegaVet(tamanho){
            v = document.querySelector('.entrada');
            vetores = v.querySelectorAll('input');
            let vets = new Array();
            console.log(vetores + ' oi');
            console.log(tamanho/2)
            let v1 = new Array();
            let v2 = new Array();
            for(i=0;i<tamanho;i++){
              
                let num = vetores[i];
                v1.push(num.value);
            }
            
            vets.push(v1);

            for(i=tamanho;i<tamanho*2;i++){
                let num = vetores[i];
                v2.push(num.value);
            }
            vets.push(v2);
            return vets;
        },
        normavet(tamanho,vets) {
        },
        prodEsc(tamanho,vets) {
            let soma = 0;
            let passos = new String;
            for (let i = 0; i < tamanho; i++) {
                i != 0 ? passos+= ' + ' : passos +='√( ';
                passos += (vets[0][i]*vets[1][i])**2 +' '
                soma += (vets[0][i]*vets[1][i])**2;
            }
            passos += ')';
            console.log(passos);
            console.log('√' + soma);
            let resp = document.createElement('t');
            resp.innerText = passos + '\n' + 'O produto escalar de ( ' + vets[0] + ') e (' + vets[1] + ') = ' + '√' + soma + ' = ' + Math.sqrt(soma).toFixed(3) + '\n'; 
            
            return resp;
        },
        
        eventos(operacoes) {

            this.form.addEventListener('click', (e) => {
                e.preventDefault();
                let evntrgt = e.target;
                if(evntrgt.classList.contains('btn-calc')){
                    let op = this.oper.value;
                    let tamanho = document.querySelector('.tam-list');
                    
                    let vets = (this.pegaVet(tamanho.value));
                    this.form.appendChild( operacoes[op](tamanho.value,vets));
                }
            });
            this.form.addEventListener('change', (e)=>{
                let evntrgt = e.target;
                if(evntrgt.classList.contains('op-list')){
                    let op = this.oper.value;
                    if(op>= 0 && op<=2){
                        this.tamanhoVet();
                    }
                }
                if (evntrgt.classList.contains('tam-list')) {
                        let tamanho = document.querySelector('.tam-list');
                        console.log(tamanho.value);
                        this.alocaTamVet(tamanho.value);
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