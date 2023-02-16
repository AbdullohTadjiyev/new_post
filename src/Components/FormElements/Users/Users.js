import React, { Component } from 'react';

class Users extends Component {
    render() {
        return (
            <div>
                <table width={"100%"} border="1">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>last name</th>
                            <th>age</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.props.data.map((item, index) =>
                                <tr>
                                    <td> {item.id} </td>
                                    <td> {item.name} </td>
                                    <td> {item.last_name} </td>
                                    <td> {item.age} </td>
                                    <td> {item.Email} </td>
                                    <td> <button>Edit</button> </td>
                                    <td> <button>Delete</button> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Users;
