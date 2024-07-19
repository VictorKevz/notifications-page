import React, { useState } from "react";
import "./notification.css";
import "./header.css";
import data from "./Data";

function Notifications() {
  const [selectedIDs, setIDs] = useState([1, 2, 3]);
  const [messageID, setMessageID] = useState(4);

  const removeNotification = (currentID) => {
    setIDs((prevIDs) => {
      if (prevIDs.includes(currentID)) {
        return prevIDs.filter((id) => id !== currentID);
      }
      return prevIDs;
    });

    setMessageID((prevMessageID) =>
      prevMessageID === currentID ? null : currentID
    );
  };

  const resetNotifications = () => {
    setIDs([]);
    setMessageID(null);
  };

  return (
    <div className="notifications-main-container">
      <header className="header-container">
        <div className="text-left">
          <h1 className="header-title">Notifications</h1>
          <span className="count-notifications">{selectedIDs.length}</span>
        </div>
        <button className="reset-btn" onClick={resetNotifications}>
          Mark all as read
        </button>
      </header>
      <div className="card-wrapper">
        {data.map((obj) => {
          let isSelected = selectedIDs.includes(obj.id);
          let isOpen = messageID === obj.id;
          function checkClassName(id) {
            switch (id) {
              case 1:
                return "first";
              case 2:
                return "second";
              case 3:
                return "third";
              case 4:
                return "fourth";
              case 5:
                return "fifth";
              case 6:
                return "sixth";
              case 7:
                return "seventh";
              default:
                return "Invalid ID";
            }
          }
          return (
            <div
              key={obj.id}
              onClick={() => removeNotification(obj.id)}
              className={`card ${checkClassName(obj.id)} ${
                isSelected && "active-bg-card"
              }  `}
            >
              <div className="avatar-wrapper">
                <img
                  src={obj.avatar}
                  className={`avatar-img ${checkClassName(obj.id)}`}
                  alt={`${obj.userName}'s avatar`}
                />
              </div>
              <div className="card-text-wrapper">
                <p
                  className={`name-occasion-dot-container ${checkClassName(
                    obj.id
                  )}`}
                >
                  <span className="user-name">{obj.userName}</span>
                  <span className={`notification ${checkClassName(obj.id)}`}>{obj.notification}</span>
                  <span className={`occasion ${checkClassName(obj.id)}`}>
                    {obj.occasion}
                  </span>

                  {isSelected && <span className={`red-dot ${checkClassName(obj.id)}`}></span>}
                </p>
                <p className={`time ${checkClassName(obj.id)}`}>{obj.time}</p>

                {isOpen && (
                  <div className="message-wrapper">
                    <p className={`message ${checkClassName(obj.id)}`}>{obj.message}</p>
                  </div>
                )}
              </div>
              {obj.id === 5 && (
                <img src={obj.img} alt="chess image" className="chess-img" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notifications;
