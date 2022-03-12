import React from 'react';
import { Icon } from '../Icon';
import { v4 } from 'uuid';

export class TodoList extends React.Component{
    constructor(){
        super();
        this.state = {
            value: '',
            list: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handlerRemoveTask = this.handlerRemoveTask.bind(this);
        this.handlerCheckBox = this.handlerCheckBox.bind(this);
    }
    handleInput(e){
        this.setState({value: e.target.value});
    }
    handleAddTask(e){
        this.setState( state => ({
        value: '',
        list: state.list.concat({message: state.value, key: v4(), done: false})
        }));
    }
    handlerRemoveTask(key){
        this.setState( state => ({
            list: state.list.filter((element) => element.key !== key )
        }));
    }
    handlerCheckBox(key){
        this.setState( state => {
            const newList = state.list.map((element) => { 
                if(element.key === key){
                    element.done = !element.done;
                }
                return {...element};
            })
            return {list: newList};
        });
    }
    render(){
        return(
            <div>
                <h3>TODO list</h3>
                <input type="text" placeholder="Add Task" value={this.state.value} onChange={this.handleInput}/>
                <button onClick={this.handleAddTask}><Icon type="plus" color="blue"/></button>
                <div className="list">
                    <ol>{this.state.list.map(element => 
                    <li key={element.key}>
                        <button onClick={() => this.handlerCheckBox(element.key)}><Icon type='checkmark' color={element.done ? 'blue' : 'transparent'}/></button>
                        {element.message}
                        <button onClick={() => this.handlerRemoveTask(element.key)}><Icon type='cross' color="blue"/></button>
                    </li>
                    )}
                    </ol>
                </div>
            </div>
        )
    }
}