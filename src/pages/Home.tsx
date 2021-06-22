import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg'; 
import logoImage from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';

import '../styles/auth.scss'
import { Button } from '../components/Button';

import { useAuth } from '../hooks/useAuth';

export const Home = () => {

  const history = useHistory();
  const  { user, signInWithGoogle } = useAuth(); 

  async function handleCreateRoom(){
    if(!user){
      await signInWithGoogle();
    }

      history.push('/rooms/new')  
  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImage} alt="" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
            type="text" 
            placeholder="Digite o código da sala"
            />
           
           <Button >
             Entrar na sala
           </Button>
          </form>
        </div>
      </main>
    </div>
  );
}