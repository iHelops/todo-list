import React, {FC} from 'react';
import {ILayoutProps} from "./Layout.props";
import Header from "../Header/Header";


const Layout: FC<ILayoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            <div className='container'>
                {children}
            </div>
        </>
    );
};

export default Layout;