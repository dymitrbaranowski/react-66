import { Component } from 'react';

// class FormLogin extends Component {
//   state = {
//     email: '',
//     password: '',
//     isChecked: true,
//     gender: 'male',
//   };

//   handleChange = ({ target }) => {
//     this.setState({
//       [target.name]: target.value,
//     });
//   };

//   handleSabmit = e => {
//     e.preventDefault();

//     this.props.createUser(this.state);

//     // this.props.createUser({
//     //   email: this.state.email,
//     //   password: this.state.password,
//     // });

//     this.setState({
//       email: '',
//       password: '',
//     });

//     this.props.closeModal();
//   };

//   handleCheck = ({ target: { checked } }) => {
//     this.setState({
//       isChecked: checked,
//     });
//   };

//   handleRadio = ({ target: { value } }) => {
//     this.setState({ gender: value });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSabmit}>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             name="email"
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             name="password"
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </div>
//         <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//             checked={this.state.isChecked}
//             onChange={this.handleCheck}
//           />
//           <label className="form-check-label" htmlFor="exampleCheck1">
//             I agree
//           </label>
//         </div>

//         <div class="form-check">
//           <input
//             class="form-check-input"
//             type="radio"
//             name="flexRadioDefault"
//             id="flexRadioDefault1"
//             checked={this.state.gender === 'male'}
//             onChange={this.handleRadio}
//             value="male"
//           />
//           <label class="form-check-label" for="flexRadioDefault1">
//             Male
//           </label>
//         </div>
//         <div class="form-check">
//           <input
//             class="form-check-input"
//             type="radio"
//             name="flexRadioDefault"
//             id="flexRadioDefault2"
//             checked={this.state.gender === 'female'}
//             onChange={this.handleRadio}
//             value="female"
//           />
//           <label class="form-check-label" for="flexRadioDefault2">
//             Female
//           </label>
//         </div>
//         <button
//           disabled={!this.state.isChecked}
//           type="submit"
//           className="btn btn-primary"
//         >
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// export default FormLogin;

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
};

class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    // Якщо тип елемента – checkbox, беремо значення checked,
    // в іншому випадку – value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export default SignUpForm;
