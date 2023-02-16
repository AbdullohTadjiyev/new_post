import React, { Component } from 'react';
import AddUser from './AddUser/AddUser';
import Users from './Users/Users';

class FormElements extends Component {
    state = {
        addActive:false,
        users_data: [   



            
            {
                id: Math.round(Math.random()*100),
                name: 'Abdulloh',
                last_name: 'Tadjiyev',
                age: 18 ,
                Email: 'Abdulloh@gmail.com',
            },
            {
                id: Math.round(Math.random()*100),
                name: 'Abdulloh',
                last_name: 'Tadjiyev',
                age: 18 ,
                Email: 'Abdulloh@gmail.com',
            },
            {
                id: Math.round(Math.random()*100),
                name: 'Abdulloh',
                last_name: 'Tadjiyev',
                age: 18 ,
                Email: 'Abdulloh@gmail.com',
            },
            {
                id: Math.round(Math.random()*100),
                name: 'Abdulloh',
                last_name: 'Tadjiyev',
                age: 18 ,
                Email: 'Abdulloh@gmail.com',
            },
            {
                id: Math.round(Math.random()*100),
                name: 'Abdulloh',
                last_name: 'Tadjiyev',
                age: 18 ,
                Email: 'Abdulloh@gmail.com',
            },
        ]
    }
    addUserChange = ()=>{
        this.setState({
            addActive:!this.state.addActive
        })
    }
    
    render() {
        return (
            <div>
                <div className="btns">
                    {this.state.addActive ? <button onClick={this.addUserChange} >Close</button> : <button onClick={this.addUserChange}  >Add User</button>}
                </div>
                {this.state.addActive ? <AddUser/> : ''}
                <Users data={this.state.users_data}/>
            </div>
        );
    }
}

export default FormElements;
