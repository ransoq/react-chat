import React from 'react';
import classNames from 'classnames';

import './Input.scss';

const Input = ( props: any ) => {
    return (
        <input type={props.type} placeholder={props.placeholder} className={classNames("input", props.className)}>

        </input>
    );
};

export default Input;