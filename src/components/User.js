import React, {Component} from 'react'
import "./User.css"

class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            bot:'',
            message:[],
        };        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
    }

    handleChange(event) {        
        this.setState({user: event.target.value });   

    }
    handleAreaChange(event){
     
        if(this.state.user !==''){

            let newmessage=[this.state.message]
            newmessage.push( this.state.user)
            
        
            this.setState({message: newmessage , user:''})

        }
         else{
            alert('Empty Message Sent');
        } 
    }

    handleSubmit(event) {
        event.preventDefault();
    }
       render(){ 
           return (
            <div className="body ">

            <div className="container">
                    <div className="chat-box">
                        <div className="header">
                                <img src="bot.png"/>
                            <div className='header-info'>
                                <h2>Echobot</h2> 
                                <p>online</p> 
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                        <div className='chats'>
                            <div className='bot'onChange={this.handleChange}>{this.state.message} </div>
                            <div className='me'onChange={this.handleChange}>{this.state.message}</div>
                        </div>
                        <div className='chat-input'>
                            <input type='text' onChange={this.handleChange} placeholder='Enter Message...' value={this.state.user}/>
                            <button className='send-btn' onClick={this.handleAreaChange}>
                                <img src='send.jpg' alt='send-btn'/>
                            </button>
                        </div>
                        </form>
                    </div>
            </div>

            </div> 
        )
    }
}
export default User;