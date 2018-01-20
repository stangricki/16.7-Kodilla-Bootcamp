import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

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
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({
            data
        });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
            data: remainder
        });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="TODO!!!" />
                <p className={style.number}>Number of tasks on my list: {this.state.data.length}</p>
                <TodoList list={this.state.data} />

            </div>
        );
    }
}

export default App;