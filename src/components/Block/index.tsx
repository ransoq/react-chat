import React from 'react';
import classNames from 'classnames';

import "./Block.scss";

const Block = ({ children, className } : { children: any, className: string}) => (
    <div className={classNames("block", className)}>{children}</div>
);

export default Block;