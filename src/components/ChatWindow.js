import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import MessageItem from './MessageItem';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoodIcon from '@material-ui/icons/Mood';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import GifIcon from '@material-ui/icons/Gif';
import NoteIcon from '@material-ui/icons/Note';
import MicIcon from '@material-ui/icons/Mic';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default ({ user }) => {
  const body = useRef();

  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([
    { author: 1, body: 'Opa, tudo bem?' },
    { author: 12, body: 'Opa, tudo bem?' },
  ]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  const handleEmojiClick = (event, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (event) => {
        setText(event.results[0][0].transcript);
      };

      recognition.start();
    }
  };

  const handleSendClick = () => {};

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img
            className="chatWindow--avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU"
            alt="avatar"
          />

          <div className="chatWindow--name">Beltrana</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <RestoreFromTrashIcon style={{ color: '#919191' }} />
          </div>

          <div className="chatWindow--btn">
            <SearchIcon style={{ color: '#919191' }} />
          </div>

          <div className="chatWindow--btn">
            <MoreVertIcon style={{ color: '#919191' }} />
          </div>
        </div>
      </div>

      <div ref={body} className="chatWindow--body">
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user={user} />
        ))}
      </div>

      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? '200px' : '0px' }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            className="chatWindow--btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: '#919191' }} />
          </div>

          <div className="chatWindow--btn" onClick={handleOpenEmoji}>
            <MoodIcon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
          </div>

          <div
            className="chatWindow--btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <GifIcon style={{ color: '#919191' }} />
          </div>

          <div
            className="chatWindow--btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <NoteIcon style={{ color: '#919191' }} />
          </div>

          <div className="chatWindow--btn">
            <AttachFileIcon style={{ color: '#919191' }} />
          </div>
        </div>

        <div className="chatWindow--inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        <div className="chatWindow--pos">
          {text === '' && (
            <div
              onClick={handleMicClick}
              className="chatWindow--btn"
              style={{ width: listening ? 0 : 40 }}
            >
              <MicIcon style={{ color: '#919191' }} />
            </div>
          )}

          <div
            className="chatWindow--btn"
            onClick={handleMicClick}
            style={{ width: listening ? 40 : 0 }}
          >
            <HighlightOffIcon style={{ color: 'red' }} />
          </div>

          <div
            className="chatWindow--btn"
            onClick={handleMicClick}
            style={{ width: listening ? 40 : 0 }}
          >
            <CheckCircleOutlineIcon style={{ color: 'green' }} />
          </div>

          {text !== '' && (
            <div onClick={handleSendClick} className="chatWindow--btn">
              <SendIcon style={{ color: '#919191' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
