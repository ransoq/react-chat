import React from 'react';
import { Link } from 'react-router-dom';
import { Block, Button, Input } from "../../../components";

const LoginForm: React.FC<{}> = () => {
    return (
        <>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block className="">
                <form>
                    <Input placeholder={"Логин"} className={"auth_name"} type={"name"}/>
                    <Input placeholder={"Пароль"} className={"auth_pass"} type={"password"}/>
                    <Button>
                        Войти в аккаунт
                    </Button>
                    <Link to="/register" className={"auth__register-link"}>Зарегистрироваться</Link>
                </form>
            </Block>
        </>
    );
};

export default LoginForm;