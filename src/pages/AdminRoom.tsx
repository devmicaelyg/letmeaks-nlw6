import {Button} from "../components/Button";
import {RoomCode} from "../components/RoomCode";
import {Question} from "../components/Question";

import {useHistory, useParams} from "react-router-dom";
import {useRoom} from "../hooks/useRoom";

import logoImage from "../assets/images/logo.svg";
import deleteImagem from "../assets/images/delete.svg";

import "../styles/room.scss";
import {database} from "../services/firebase";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const {user} = useAuth();
  const params = useParams<RoomParams>();
  const history = useHistory();
  const roomID = params.id;
  const {questions, title} = useRoom(roomID);

  async function handleEndRoom() {
    database.ref(`rooms/${roomID}`).update({
      endAt: new Date(),
    });

    history.push("/");
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você desjea exluir essa pergunta?")) {
      await database.ref(`/rooms/${roomID}/questions/${questionId}`).remove();
    }
  }
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImage} alt="" />
          <div>
            <RoomCode code={roomID} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          <span>{questions?.length} perguntas</span>
        </div>

        {/* Estamos percorrendo cada item do Array e renderizando o componente */}
        {/* Faz a mesma coisa que o *ngFor do Angular  */}

        <div className="question-list">
          {questions?.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImagem} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
