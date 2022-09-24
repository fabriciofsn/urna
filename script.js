class Urna{
    constructor(btnNum, display, btnConfirma, btnCorrige, btnBranco){
        this.btnNum = btnNum;
        this.display = display;
        this.btnConfirma = btnConfirma;
        this.btnCorrige = btnCorrige;
        this.btnBranco = btnBranco;
        this.LoadVotes();
    }

    TypeVote(){
        this.btnNum.forEach(button =>{
            button.addEventListener('click', ({target}) =>{
                this.display.value += target.innerText;
                this.display.focus();
            })
        })
        this.ConfirmeVoting();
        this.CorrigeVoting();
        this.WhiteVoting();
    }

    LoadVotes(){
        this.TypeVote();
        let bolsonaroCouting = document.querySelector('#bolsonaro');
        let nullCouting = document.querySelector('#nulo');
        let lulaCounting = document.querySelector('#lula');
        let whiteCouting = document.querySelector('#branco');

        bolsonaroCouting.innerHTML= localStorage.getItem('bolsonaro');
        nullCouting.innerHTML= localStorage.getItem('nullVote');
        lulaCounting.innerText = localStorage.getItem('lula');
        whiteCouting.innerText = localStorage.getItem('whiteVote');
    }

    ConfirmeVoting(){
        let bolsonaroCouting = document.querySelector('#bolsonaro');
        let nullCouting = document.querySelector('#nulo');
        let lulaCounting = document.querySelector('#lula');
    
        this.btnConfirma.addEventListener('click', () =>{
            const typedValue = this.display.value;
            if(typedValue == 22){   
                bolsonaroCouting.innerText++;
                localStorage.setItem('bolsonaro', bolsonaroCouting.innerText);
            }else if(typedValue == 13){
                lulaCounting.innerText++;
                localStorage.setItem('lula', lulaCounting.innerText);
            }else{
                nullCouting.innerText++;
                localStorage.setItem('nullVote', nullCouting.innerText);
            }

        this.display.value = '';
        })
    }

    CorrigeVoting(){
            this.btnCorrige.addEventListener('click', () =>{
            this.display.value = this.display.value.slice(0, -1);            
        })
    }
    
    WhiteVoting(){
        this.btnBranco.addEventListener('click', () =>{
            branco.innerText++;
            this.saveWhiteVote = localStorage.setItem('whiteVote', branco.innerText);
        })
    }
}

const urna = new Urna(
document.querySelectorAll('.btn-num'), 
document.querySelector('input'), 
document.querySelector('.btn-confirma'), 
document.querySelector('.btn-corrige'),
document.querySelector('.btn-branco'),
document.querySelector('.display'),
);



