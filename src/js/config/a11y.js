import React from 'react';
import ReactDOM from 'react-dom';

const a11y = require('react-a11y');

if (process.env.NODE_ENV === 'development') {
    a11y(React, { ReactDOM: ReactDOM });
}
