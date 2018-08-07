import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todolist from './todos.json'


class ToDoItem extends Component {
  constructor(props) {
    super(props)
    this.state = { completed: false, text: "Task" }
  }
  render() {
    return (

      <li class={this.props.status ? 'completed' : null}>
        <div class='view'>
          {/* this is using this.props for now, and not status, so I can see it is working, since we aren't doing the functionality yet */}
          <input class='toggle' type='checkbox' checked={this.props.status} />
          <label>{this.props.task}</label>
        </div>
      </li>
    )
  }
}

class ToDoList extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = { completed: false, text: "Task" }
  // }
  // the es6 way below, todos in the state is equal to state = {todos: todos}
  // item of same name
  state = { todolist }


  render() {
    this.state = { todolist }
    return (
      todolist.map(todo => <ToDoItem status={todo.completed} task={todo.title} />)
    )
  }

}


class App extends Component {
  render() {
    return (
      <body>
        <section class='todoapp'>
          <header class='header'>
            <h1>todos</h1>
            <input class='new-todo' placeholder='What needs to be done?' autoFocus />
          </header>

          {/* This section should be hidden by default and shown when there are todos */}
          <section class='main'>
            <ul class='todo-list'>
              {/* <!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class `editing` when editing and `completed` when marked as completed --> */}

              <ToDoList></ToDoList>
              {/* <ToDoItem task={'this sis task'} status={true}></ToDoItem> */}
              {/* <li class='completed'>

                <div class='view'>
                  <input class='toggle' type='checkbox' checked />
                  <label>Taste Javascript</label>
                  <button class='destroy'></button>
                </div>

              </li>
              <li>

                <div class='view'>
                  <input class='toggle' type='checkbox' />
                  <label> Buy a unicorn</label>
                  <button class='destory'></button>
                </div>

              </li> */}
            </ul>

          </section>

          <footer class='footer'>
            <span class='todo-count'><strong>0</strong> item(s) left</span>
            <button class="clear-completed">Clear completed</button>
          </footer>




        </section>
      </body>
    );
  }
}

export default App;
