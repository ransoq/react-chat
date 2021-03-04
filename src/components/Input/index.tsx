import React from 'react';
import classNames from 'classnames';

import './Input.scss';

interface PropsType {
    type: string,
    placeholder: string,
    className: string,
    value?: string,
    id?: string,
    onChange?: any,
    onBlur?: any
}

const Input: React.FC<PropsType>= ( { type, placeholder, className, value, onChange, onBlur, id } ) => {
    return (
        <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} className={classNames("input", className) }>
        </input>
    );
}

export default Input;