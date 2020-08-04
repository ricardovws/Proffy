import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/46910060?s=460&u=8c4091a27ccbf8165ba673a3a2cb4729b9b34429&v=4" alt="Ricardo Vinícius"/>
                        <div>
                            <strong>Ricardo Vinícius</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de esperiências.
                        Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>
                                R$ 80,00
                            </strong>
                        </p>
                        <button type="button">
                                <img src={whatsappIcon} alt="Whatsapp"/>
                                Entrar em contato
                            </button>
                    </footer>
               </article>
    )
}

export default TeacherItem;