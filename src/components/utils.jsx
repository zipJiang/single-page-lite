import React from 'react';

function applyProps(Fn, props) {
    return (e = {}) => <Fn {...e} {...props} />
}

export { applyProps };