import React from 'react';
import { Message } from '../../components/';

const Home = () => {
    return (
        <section>
            <Message
                avatar="https://cdn.freelance.ru/images/att/1324133_900_600.png"
                text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
                date={new Date}/>
            <Message
                avatar="https://cs-love.net/avatars/images/cs-love-avatar-0.jpg"
                text="Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥!!!!1"
                date={new Date}
                isMe={true}
                isRead={true}/>
        </section>
    );
};

export default Home;