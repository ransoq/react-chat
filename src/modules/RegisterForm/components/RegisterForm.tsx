import React from 'react';
import { Link } from 'react-router-dom';
import { Block, Button, Input } from "../../../components";

const RegisterForm: React.FC<{}> = (props: any) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    const success: boolean = true;

    return (
        <>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                { success ?
                    <form onSubmit={handleSubmit}>
                        TODO Добавить валидацию для инпута эмейла
                        <Input
                            id="email"
                            placeholder={"E-mail"}
                            className={"auth_mail"}
                            type={"email"}
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange} />
                        <Input placeholder={"Логин"} className={"auth_name"} type={"name"}/>
                        <Input placeholder={"Пароль"} className={"auth_pass"} type={"password"}/>
                        <Input placeholder={"Повторите пароль"} className={"auth_pass"} type={"password"}/>
                        <Button>Зарегистрироваться</Button>
                        <Link to="/login" className={"auth__register-link"}>Войти в аккаунт</Link>
                    </form> :
                    <div className="auth__success-block">
                        <svg display="none">
                            <symbol id="info" viewBox="0 0 512 512">
                                <g>
                                    <path d="m463.372 456.212v-400.424c0-26.75-18.201-49.242-42.891-55.788h-363.194c-31.639 0-57.287 25.648-57.287 57.287v397.426c0 31.639 25.648 57.287 57.287 57.287h363.193c24.691-6.546 42.892-29.038 42.892-55.788z" fill="#f9f6f9"/><path d="m454.713 0h-55.933c31.639 0 57.287 25.648 57.287 57.287v397.426c0 31.639-25.648 57.287-57.287 57.287h55.933c31.639 0 57.287-25.648 57.287-57.287v-397.426c0-31.639-25.648-57.287-57.287-57.287z" fill="#dddaec"/><path d="m459.737 476.395c2.346-6.283 3.635-13.081 3.635-20.183v-400.424c0-7.101-1.289-13.9-3.635-20.183-1.616-.374-3.296-.579-5.024-.579h-397.426c-12.275 0-22.261 9.986-22.261 22.261v397.426c0 12.275 9.986 22.261 22.261 22.261h397.426c1.728 0 3.408-.205 5.024-.579z" fill="#80b4fb"/><path d="m454.713 35.026h-3.132c2.889 6.844 4.487 14.366 4.487 22.261v397.426c0 7.895-1.598 15.417-4.487 22.261h3.132c12.275 0 22.261-9.986 22.261-22.261v-397.426c0-12.274-9.987-22.261-22.261-22.261z" fill="#61a2f9"/><path d="m298.286 359.048c-5.297 0-9.592-4.294-9.592-9.592l-.023.013v-129.504c0-10.676-8.654-19.33-19.33-19.33h-46.037c-10.676 0-19.33 8.655-19.33 19.33v4.961c0 10.676 8.655 19.33 19.33 19.33v105.2c0 5.297-4.294 9.592-9.591 9.592-10.676 0-19.33 8.655-19.33 19.33v14.492c0 10.676 8.655 19.33 19.33 19.33h84.573c10.676 0 19.33-8.654 19.33-19.33v-14.492c.001-10.676-8.654-19.33-19.33-19.33z" fill="#f9f6f9"/><path d="m298.286 359.048c-5.297 0-9.592-4.294-9.592-9.592l-.023.013v-129.504c0-10.676-8.654-19.33-19.33-19.33h-27.405c10.676 0 19.33 8.654 19.33 19.33v129.504l.006 39.974c.002 12.568-10.186 22.757-22.754 22.757h59.766c10.676 0 19.33-8.654 19.33-19.33v-14.491c.003-10.677-8.652-19.331-19.328-19.331z" fill="#dddaec"/><circle cx="251.462" cy="135.443" fill="#f9f6f9" r="35.643"/>
                                </g>
                            </symbol>
                        </svg>
                        <svg className="auth__success-icon">
                            <use xlinkHref="#info"/>
                        </svg>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</p>
                    </div>}
            </Block>
        </>
    );
}

export default RegisterForm;