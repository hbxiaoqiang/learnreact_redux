import React,{Component} from 'react';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            content:'hello'
        }
    }

    render(){
        return (
            <div>
                {this.state.content}
            </div>
        )
    }
}

export default Todolist;