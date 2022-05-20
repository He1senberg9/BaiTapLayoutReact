import React, { Component } from 'react';
import "./item.css"
class Item extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <div className='image_'>
                        <h1>
                            500x325
                        </h1>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className='button_'>
                        <a href="#" className="btn btn-primary">Find out more!</a>
                        </div>
                </div>
            </div>
        );
    }
}

export default Item;