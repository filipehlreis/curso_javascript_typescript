function criaCalculadora() {
    return {
        // atributos
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            // alert('oi, iniciei');
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta Inválida');
                    return;
                }

                this.display.value = String(conta)
            } catch (e) {
                alert('Conta Inválida');
                return;

            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            this.display.value = '';
        },

        cliqueBotoes() {
            // this -> calculadora
            // document.addEventListener('click', function (e) {
            document.addEventListener('click', e => {
                /**
                 * a partir do momento que inseri essa funcao no document,
                 * o document que se torna o 'this'. isto é resolvido com 
                 * bind(this) ou utilizando arrow function.
                 */
                // console.log(this);
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
            /**
             * esse bind(this) é inserido para dizer para a funcao qual 'this'
             * considerar dentro da funcao
             */

        },


        btnParaDisplay(valor) {
            this.display.value += valor;
        },


        // metodos

    };
}


const calculadora = criaCalculadora();
calculadora.inicia();