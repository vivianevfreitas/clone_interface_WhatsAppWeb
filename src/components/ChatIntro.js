import React from 'react';
import './ChatIntro.css';

import ComputerIcon from '@material-ui/icons/Computer';

export default () => {
  return (
    <div className="chatIntro">
      <img
        src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"
        alt=""
      />
      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para
        reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
      </h2>

      <div className="chatIntroFooter">
        <h1></h1>
        <div className="chatFooter">
          <ComputerIcon fontSize="small" style={{ color: '#919191' }} />
          <h2>
            O WhatsApp está disponível para Windows. <a>Obtenha-o aqui.</a>
          </h2>
        </div>
      </div>
    </div>
  );
};
