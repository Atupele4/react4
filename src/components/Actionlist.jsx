import React, { Component } from 'react';

class Actionlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wishList: ["Buy Car", "Get Married", "Buy House", "Have Children", "Build Buniness"]
        }
    }

    render() {
        return (
            <ul class="list-group">

                {
                    this.state.wishList.map((item) =>
                        <li className="list-group-item"> {item} <button className="btn btn-danger" >Delete</button> </li>
                    )
                }
            </ul>
        );
    }
}
export default Actionlist;