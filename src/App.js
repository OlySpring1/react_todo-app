import React from 'react';
import TodoList from './TodoList';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  state={
    todos: [],
    typeFilter: '',
  }

  addTodo = (todo) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  }

  onTodoSelected = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  }

  onAllSelected = (select) => {
    this.setState(prevState => ({
      todos: prevState.todos.map((todo) => {
        if (select) {
          return {
            ...todo,
            completed: true,
          };
        }

        return {
          ...todo,
          completed: false,
        };
      }),
    }));
  }

    onFilteredTodos = (typeFilter) => {
      this.setState({
        typeFilter,
      });
    }

    selectFilter = () => {
      const { todos, typeFilter } = this.state;

      if (typeFilter === 'Active') {
        return todos.filter(todo => !todo.completed);
      }

      if (typeFilter === 'Completed') {
        return todos.filter(todo => todo.completed);
      }

      if (typeFilter === 'All') {
        return todos;
      }

      return todos;
    }

    render() {
      const { todos } = this.state;
      const comletedStatus = todos.length === 0
        ? false
        : todos.every(todo => todo.completed);
      const counter = todos.filter(todo => !todo.completed).length;
      // const visibleTodos = this.selectFilter(typeFilter);

      return (
        <section className="todoapp">
          <Header onTodo={this.addTodo} />
          <TodoList
            todos={todos}
            comletedStatus={comletedStatus}
            onFilteredTodos={this.onFilteredTodos}
            onAllSelected={this.onAllSelected}
            onTodoSelected={this.onTodoSelected}
          />

          <Footer noComletedTodo={counter} />
        </section>
      );
    }
}

export default App;
