import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from "../../assets/delete.png";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './store/features/TodoSlice';

const Redux = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [newTodo, setNewTodo] = useState("");
  console.log(todos);
  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo({ id: Date.now(), text: newTodo }));
      setNewTodo("");
    }
  };

  return (
    <div className="row py-5">
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span className="fw-bold text-primary">Redux Toolkit</span>
        <span className="fw-bold text-warning">Introduction</span>
        <p>Redux Toolkit is a set of pre-configured Redux utilities that help you write more maintainable, scalable, and efficient Redux applications.</p>
        <p>Redux Toolkit is a library and set of conventions for simplifying the management of state in JavaScript applications using Redux. It was developed by the Redux team to address some of the challenges and complexities associated with setting up and maintaining Redux in a project.</p>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <h5><span class="badge text-bg-success">The primary use cases for Redux Toolkit are:</span></h5>
        <h6><b className='text-primary'>Boilerplate Reduction:</b> Redux Toolkit significantly reduces the amount of boilerplate code you need to write when setting up and working with Redux. This helps make Redux more accessible and less intimidating for developers.</h6>
        <h6><b className='text-primary'>Simplified Store Configuration:</b> It provides a configureStore function that simplifies the store setup process. This function includes sensible defaults for middleware, such as Redux DevTools and thunk, so you don't have to configure them manually.</h6>
        <h6><b className='text-primary'>Reducers with createSlice:</b> Redux Toolkit introduces the createSlice function, which allows you to define reducers more concisely and with less code. It encapsulates the reducer logic, action creators, and initial state in a single place.</h6>
        <h6><b className='text-primary'>Immutability:</b> Redux Toolkit uses the popular immer library under the hood, which allows you to write mutable code within your reducers while ensuring immutability in practice. This makes it easier to update state in a more intuitive and readable way.</h6>
        <h6><b className='text-primary'>Action Creators:</b> It automatically generates action creators for each slice created using createSlice. These action creators eliminate the need to write explicit action types and action creator functions manually.</h6>
        <h6><b className='text-primary'>Redux DevTools Integration:</b> Redux Toolkit integrates seamlessly with Redux DevTools, making it easy to inspect and debug your application's state changes and actions.</h6>
        <h6><b className='text-primary'>Thunks:</b> Redux Toolkit simplifies the use of thunks for handling asynchronous actions by including Redux Thunk as a default middleware. This allows you to write asynchronous logic within your action creators more easily.</h6>
        <h6><b className='text-primary'>Selectors:</b> It provides a createSelector utility that simplifies the process of selecting data from the Redux store. This can help you avoid redundant calculations and improve the performance of your application.</h6>
        <h6><b className='text-primary'>Immutable Update Patterns:</b> Redux Toolkit encourages the use of immutable update patterns when working with state, which helps prevent unexpected side effects and simplifies debugging.</h6>
        <h6><b className='text-primary'>Officially Recommended:</b> Redux Toolkit is officially recommended by the Redux team as the preferred way to write Redux code. It embodies best practices and conventions that have emerged in the Redux ecosystem.</h6>
      </div>
      <div className="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        {/* <h5><span class="badge text-bg-success">Examples</span></h5> */}
        <Container>
          <h1 className='fw-bold text-primary'>Todo List</h1>
          {/* Show Input Content */}
          {todos.map((todo) => (
            <TodoItem key={todo.id}>
              <div className="todoText">{todo.text}</div>
              <div className="deleteIcon" onClick={() => dispatch(deleteTodo(todo.id))}>
                <img src={DeleteIcon} alt="delete" />
              </div>
            </TodoItem>
          ))}
          {/* User Input */}
          <Wrapper>
            <input type="text" placeholder="Add a new Todo" onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={handleAddTodo}>Add List</button>
          </Wrapper>
          {/* Clear All the content */}
          <ClearButton>Clear All</ClearButton>
        </Container>
      </div>
    </div>
  );
};

export default Redux;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 20px;
  border-radius: 40px;
  background: transparent;
  box-shadow: 0 4px 20px -2px #e9e9e9;

  input {
    width: 330px;
    height: 20px;
    padding: 10px;
    font: bold 13px "lucida sans", "trebuchet MS", "Tahoma";
    border: 0;
    background: #fff;
    border-radius: 40px;
    border-top-style: none;
  }

  input:focus {
    outline: 0;
  }

  input::-webkit-input-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
    padding-left: 20px;
  }

  input:-moz-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
  }

  input:-ms-input-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
    border-style: none;
  }

  button {
    overflow: visible;
    position: relative;
    float: right;
    border: 0;
    padding: 0;
    cursor: pointer;
    height: 40px;
    width: 110px;
    font: 13px/40px "lucida sans", "trebuchet MS", "Tahoma";
    color: #fff;
    text-transform: uppercase;
    background: #198cff;
    border-radius: 40px;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
  }
  button:active,
  button:focus {
    background: #198cff;
    outline: 0;
  }

  button:focus:before,
  button:active:before {
    border-right-color: #c42f2f;
  }
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  width: 400px;
  padding: 5px 20px;
  border-radius: 5px;
  justify-content: center;
  background-color: rgba(25, 140, 255, 0.09);

  .todoText {
    width: 50%;
    text-align: left;
  }
  .deleteIcon {
    width: 50%;
    text-align: right;
    background: transparent;
    color: white;
    border: none;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;

    img {
      width: 25px;
    }
  }
`;

const ClearButton = styled.button`
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  text-align: right;
`;