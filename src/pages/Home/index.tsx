import React from 'react';
import { Message, DialogItem } from '../../components/';

const Home: React.FC<{}> = () => {
    return (
        <section>
            <div className={"dialogs"}>
                <DialogItem />
            </div>
            {/*<Dialogs*/}
            {/*    items={[*/}
            {/*        {*/}
            {/*            user: {*/}
            {/*                fullname: 'Фёдор Достоевский',*/}
            {/*                avatar: ''*/}
            {/*            },*/}
            {/*            message: {*/}
            {/*                text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша",*/}
            {/*                isRead: false,*/}
            {/*                created_at: new Date()*/}
            {/*            }*/}
            {/*        }*/}
            {/*    ]}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar="https://cdn.freelance.ru/images/att/1324133_900_600.png"*/}
            {/*    text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"*/}
            {/*    date={new Date()}/>*/}
            {/*<Message*/}
            {/*    avatar="https://cs-love.net/avatars/images/cs-love-avatar-0.jpg"*/}
            {/*    text="Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥!!!!1"*/}
            {/*    date={new Date()}*/}
            {/*    isMe={true}*/}
            {/*    isRead={true}/>*/}
            {/*<Message*/}
            {/*    avatar="https://cdn.freelance.ru/images/att/1324133_900_600.png"*/}
            {/*    isTyping={true}*/}
            {/*    isRead={false}/>*/}
        </section>
    );
};

export default Home;