import React from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends React.Component {
  state = {  
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();
  

  handleSubmit = event => {
    event.preventDefault(); 
    this.props.onSubmit({ name: this.state.name, number: this.state.number });
    this.reset();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            title=""
            required
          />
        </label>
        <label htmlFor={this.numberId}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            title=""
            required
          />
        </label>
        <button type="submit">Add contact </button>
      </form>
    );
  }
}

