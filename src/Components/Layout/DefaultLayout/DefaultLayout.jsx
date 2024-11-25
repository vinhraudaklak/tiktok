import Header from '~/Components/Header/Header';
import SideBar from '~/Components/SideBar/SideBar';

import React from 'react';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="Content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
