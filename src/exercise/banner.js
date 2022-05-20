import React, { Component } from 'react';
import "./banner.css"
class Banner extends Component {
    render() {
        return (
            <div className='banner container_'>
                <h1>A Warm Welcome!</h1>
                <p>
                    Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
                </p>
                <button type="button" class="btn btn-primary">Call to action!</button>
            </div>
        );
    }
}

export default Banner;