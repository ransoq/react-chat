import React from 'react';
import Time from '../Time';
import classNames from "classnames";
import IconRead from '../IconRead';

import "./message.scss";

interface PropsType {
    avatar: string,
    text?: string,
    date?: Date | number,
    user?: {
        fullname: string
    },
    isMe?: boolean,
    isRead?: boolean,
    isTyping?: boolean
}

const Message: React.FC<PropsType> = ({ avatar, text, date, user, isMe, isRead, isTyping }) => (
    <>
        <div className={classNames("message", {
            'message--isMe': isMe,
            'message--isTyping' : isTyping
        })}
        >
            <div className={"message__avatar"}>
                <img src={avatar} alt={`Avatar ${user!.fullname}`}/>
            </div>
            <div className="message__content">
                <div className="message__wrap">
                    { isMe && isRead ?
                        (<svg className="message__checked">
                            <use xlinkHref="#checked"/>
                        </svg>)
                        : isMe ?
                            (<svg className="message__checked">
                                <use xlinkHref="#nonChecked"/>
                            </svg>) : null }
                    <div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping &&
                            <div className="message__typing">
                                <span> </span>
                                <span> </span>
                                <span> </span>
                            </div>
                        }
                    </div>
                </div>
                {date && <Time date={Date.now()}/>}
            </div>
        </div>
        <div style={{display: "none"}}>
            <IconRead />
            TODO сделать компонент значков прочитанных сообщений
            <svg>
                <symbol id="nonChecked" viewBox="0 0 15 9">
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.66648 6.87477L10.2103 0.139168C10.3908 -0.0463894 10.6839 -0.0463894 10.8643 0.139168C11.0452 0.324251 11.0452 0.62513 10.8643 0.810213L3.99532 7.88086C3.8167 8.06405 3.51946 8.06405 3.34084 7.88086L0.135337 4.60679C-0.0451125 4.42171 -0.0451125 4.1213 0.135337 3.93575C0.315787 3.75019 0.608904 3.75019 0.789354 3.93575L3.66648 6.87477ZM7.14111 7." fill="#0C8FE4"/>
                    </g>
                </symbol>
            </svg>
        </div>
    </>
);

Message.defaultProps = {
    user: {fullname: "Maxim"}
}

export default Message;