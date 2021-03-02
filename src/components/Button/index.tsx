import React from 'react';
import classNames from 'classnames';

import "./button.scss";

const Button = (props: any) => (
    <button
        {...props}
        className={classNames('button', props.className)}
        />
);

export default Button;