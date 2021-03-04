import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import classNames from "classnames";

import "./message.scss";

interface PropsType {
    avatar: string,
    text: string,
    date: Date,
    user?: {
        fullname: string
    },
    isMe?: boolean,
    isRead?: boolean
}

const Message: React.FC<PropsType> = ({ avatar, text, date, user, isMe, isRead }) => (
    <div className={classNames("message", {'message--isMe': isMe})}>
        <div className={"message__avatar"}>
            <img src={avatar} alt={`Avatar ${user!.fullname}`}/>
        </div>
        <div className="message__content">
            <div className="message__wrap">
                <svg display="none">
                    <symbol id="checked" viewBox="0 0 15 9">
                        <g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.66648 6.87477L10.2103 0.139168C10.3908 -0.0463894 10.6839 -0.0463894 10.8643 0.139168C11.0452 0.324251 11.0452 0.62513 10.8643 0.810213L3.99532 7.88086C3.8167 8.06405 3.51946 8.06405 3.34084 7.88086L0.135337 4.60679C-0.0451125 4.42171 -0.0451125 4.1213 0.135337 3.93575C0.315787 3.75019 0.608904 3.75019 0.789354 3.93575L3.66648 6.87477ZM7.14111 7.06654L14.1548 0.139864C14.3479 -0.0466214 14.6616 -0.0466214 14.8548 0.139864C15.0484 0.325873 15.0484 0.628256 14.8548 0.814264L7.55877 8.13855C7.3676 8.32265 5.87166 7.56707 5.75484 7.46285C5.64238 7.36252 6.30121 6.77489 6.30121 6.77489C6.50611 6.87518 7.08691 7.12008 7.14111 7.06654Z" fill="#0C8FE4"/>
                        </g>
                    </symbol>
                </svg>
                <svg display="none">
                    <symbol id="nonChecked" viewBox="0 0 15 9">
                        <g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.66648 6.87477L10.2103 0.139168C10.3908 -0.0463894 10.6839 -0.0463894 10.8643 0.139168C11.0452 0.324251 11.0452 0.62513 10.8643 0.810213L3.99532 7.88086C3.8167 8.06405 3.51946 8.06405 3.34084 7.88086L0.135337 4.60679C-0.0451125 4.42171 -0.0451125 4.1213 0.135337 3.93575C0.315787 3.75019 0.608904 3.75019 0.789354 3.93575L3.66648 6.87477ZM7.14111 7." fill="#0C8FE4"/>
                        </g>
                    </symbol>
                </svg>
                { isMe && isRead ?
                (<svg className="message__checked">
                    <use xlinkHref="#checked"/>
                </svg>)
                : isMe ?
                (<svg className="message__checked">
                    <use xlinkHref="#nonChecked"/>
                </svg>) : null }
                <div className="message__bubble">
                    <p className="message__text">{text}</p>
                </div>
            </div>
            <span className="message__date">{formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}</span>
        </div>
    </div>
);

Message.defaultProps = {
    user: {fullname: "Maxim"}
}

export default Message;