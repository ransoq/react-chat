import React from 'react';
import classNames from 'classnames';

import "./button.scss";

const Button: React.FC<any> = (props: any) => (
    <button
        {...props}
        type="submit"
        className={classNames('button', props.className)}
        />
);

export default Button;