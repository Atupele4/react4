import React, { Component } from 'react'

export default class Appmenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            myList: [1, 2, 3, 4]
        }
    }

    render() {

        return (
            <div className="col-3">
                <ul class="list-group">
                    {
                        this.state.myList.map((num) =>
                            <li className="list-group-item list-group-item-action">Menu Item {num}</li>
                        )
                    }
                </ul>
            </div>

        )
    }
}
