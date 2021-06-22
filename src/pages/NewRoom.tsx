import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg'; 
import logoImage from '../assets/images/logo.svg';
import { Button } from "../components/Button"


import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth';

export const NewRoom = () => {
//  const { user } = useAuth();

   return(
       <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&A ao-vivo</strong>
        <p>Tira as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImage} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
            type="text" 
            placeholder="Nome da sala"
            />
           
           <Button >
             Criar sala
           </Button>
          </form>

          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui </Link>
          </p>
        </div>
      </main>
    </div>
   )
}