import React from 'react';
import classNames from 'classnames';

import "./Block.scss";

const Block: React.FC<{children: any, className?: string}> = ({ children, className }) => (
    <div className={classNames("block", className)}>{children}</div>
);

export default Block;