import React, { Component } from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import "./baiTapThucHanhLayout.css"

class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default BaiTapThucHanhLayout;