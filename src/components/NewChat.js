import React, { useState } from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({ user, chatlist, show, setShow }) => {
  const [list, setList] = useState([
    {
      id: 1,
      avatar:
        'https://thumbs.dreamstime.com/b/%C3%ADcone-do-vetor-avatar-tipo-nerd-de-arquivo-eps-f%C3%A1cil-editar-160182979.jpg',
      name: 'Fulano',
    },
    {
      id: 2,
      avatar:
        'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      name: 'Beltrano',
    },
    {
      id: 3,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7S9pKMslch4WjEcuH1FTueBDvu3nL4NTsNg&usqp=CAU',
      name: 'Ciclano',
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat--head">
        <div onClick={handleClose} className="newChat--backbutton">
          <ArrowBackIcon style={{ color: '#fff' }} />
        </div>
        <div className="newChat--headtitle">Nova conversa</div>
      </div>

      <div className="newChat--list">
        {list.map((item, key) => (
          <div className="newChat--item" key={key}>
            <img className="newChat--itemavatar" src={item.avatar} alt="" />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
