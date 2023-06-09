import "./App.css";
import React, { useState } from "react";
import { Button, Card, Img, Login, MessageModal, useLogin } from "./lib";
import Input from "./lib/components/Input/Input";
import TargaRecognition from "./lib/components/TargaRecognition/TargaRecognition";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const { isLogged, getLogged } = useLogin();

  const openModal = () => {
    setShowModal((prev) => {
      return !prev;
    });
  };
  const openLogin = () => {
    setShowLogin((prev) => {
      return !prev;
    });
  };
  const openLoggato = () => {
    alert(getLogged());
  };
  return (
    <div className="App">
      <div>
        <h2>Bottone</h2>
        <Button>label</Button>
      </div>
      <div>
        <h2>Immagine</h2>
        <h4>type</h4>
        <div className="esempi">
          <label>icon</label>
          <div>
            <Img src="/logo192.png" type="icon" />
          </div>
          <label>button</label>
          <div>
            <Img src="/logo192.png" type="button" />
          </div>
        </div>
      </div>
      <div>
        <h2>MessageModal</h2>
        <div className="esempi">
          <Button onClick={openModal}>apri</Button>
          {showModal && (
            <MessageModal title="titolo del messaggio" onOut={openModal}>
              <label>Testo del messaggio</label>
            </MessageModal>
          )}
        </div>
      </div>
      <div>
        <h2>Login</h2>
        <div className="esempi">
          <Button onClick={openLogin}>apri</Button>
          <Button onClick={openLoggato}>loggato?</Button>
          {showLogin && (
            <Login
              img="https://axonasrl.com/wp-content/uploads/2021/05/logo.png"
              onSubmit={openLogin}
              urlApi="https://svil.axonasrl.com:4488/apili/axo_login/"
            />
          )}
        </div>
      </div>
      <div>
        <h2>Card</h2>
        <div className="esempi">
          <Card>questa è una card</Card>
        </div>
      </div>
      <div>
        <h2>Input</h2>
        <div className="esempi">
          <Card>
            <Input value="input" label="input di test" />
          </Card>
        </div>
      </div>
      <div>
        <h2>OCR</h2>
        <div className="esempi">
          <Card>
            <TargaRecognition></TargaRecognition>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
