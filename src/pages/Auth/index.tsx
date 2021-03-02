import React from "react";
import { Block, Button, Input } from "../../components";

import "./Auth.scss";

const Auth = () => {
    return (
        <section className="auth">
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Block className="">
                    <Input placeholder={"Введите логин"} className={"auth__top_name"} type={"name"}/>
                    <Input placeholder={"Введите пароль"} className={"auth__top_pass"} type={"password"}/>
                    <Button className="button__large" type="primary" size="large">
                        Войти в аккаунт
                    </Button>
                </Block>
            </div>
        </section>
    );
};

export default Auth;

