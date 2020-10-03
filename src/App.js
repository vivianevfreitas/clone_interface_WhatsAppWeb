import React, { useState, useEffect } from 'react';
import './App.css';

import chatlistItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from './components/ChatListItem';

export default () => {
  const [chatlist, setChatList] = useState([
    {
      chatId: 1,
      title: 'Ciclano',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7S9pKMslch4WjEcuH1FTueBDvu3nL4NTsNg&usqp=CAU',
    },
  ]);

  const [activeChat, setActiveChat] = useState({});
  const [user, SetUser] = useState({
    id: 12,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU',
    name: 'John',
  });

  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  };

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="avatar" />

          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>

            <div onClick={handleNewChat} className="header--btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>

            <div className="header--btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />

            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>

      <div className="contentarea">
        {activeChat.chatId !== undefined && <ChatWindow user={user} />}

        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
};
