import { Component, useId } from 'react';
import Header from './Header/Header';
import ToDoList from './ToDoList/ToDoList';
import Modal from './Modal/Modal';
import FormLogin from './FormLogin/FormLogin';

import { nanoid } from 'nanoid';
import SignUpForm from './FormLogin/FormLogin';

class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log('newUser :>> ', newUser);
  };

  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <ToDoList />

        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            {/* <FormLogin
              closeModal={this.closeModal}
              createUser={this.createUser}
            /> */}
            <SignUpForm />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
