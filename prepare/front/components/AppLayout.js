import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => { // children = react nodes. return 안에 들어갈 수 있는 모든 것
    return (
        <div>
            <div>공통메뉴</div>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes
};

// main branch

export default AppLayout;