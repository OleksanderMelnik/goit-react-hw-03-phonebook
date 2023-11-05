import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ':' + contact.number }
          {
          <button
            type="button"
            name="delete"
            onClick={() => deleteContact(contact.id)}
          >
            delete
          </button>
        }       
        </li>
      ))}
    </ul>
  );


ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};