import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    text: 'Clean your room',
                    id: 1,
                    remove: this.removeTodo.bind(this)
                },
                {
                    text: 'Eat your sandwich',
                    id: 2,
                    remove: this.removeTodo.bind(this)
                },
                {
                    text: 'Watch Star Wars, again',
                    id: 3,
                    remove: this.removeTodo.bind(this)
                },
                {
                    text: 'Go to sleep',
                    id: 4,
                    remove: this.removeTodo.bind(this)
                }

            ],
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateValue = this.updateValue.bind(this);

    }

    addTodo() {
        const todo = {
            text: this.state.value,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({
            data,
            value: ""
        });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
            data: remainder
        });
    }

    updateValue(newValue) {
        this.setState({
            value: newValue
        });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="TODO!!!" />
                <TodoForm add={this.addTodo} updateValue={this.updateValue} value={this.state.value} />
                <TodoList list={this.state.data} remove={this.removeTodo}/> 
                <p className={style.number}>Number of tasks on my list: {this.state.data.length}</p>

            </div>
        );
    }
}

export default App;