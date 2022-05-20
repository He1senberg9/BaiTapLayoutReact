import React, { Component } from 'react';
import Banner from './banner';
import Item from './item';
import "./body.css"

class Body extends Component {
    render() {
        return (
            <div>
                <div className='container_'>
                    <div>
                        <Banner />
                    </div>
                    <div className='row_'>
                        <div className='col_'>
                            <Item />
                        </div>  
                        <div className='col_'>
                            <Item />
                        </div>
                        <div className='col_'>
                            <Item />
                        </div>
                        <div className='col_'>
                            <Item />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;