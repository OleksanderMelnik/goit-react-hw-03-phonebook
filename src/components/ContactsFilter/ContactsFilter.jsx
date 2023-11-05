import PropTypes from 'prop-types';

export function Filter({value, changeFilter}) {
  return (
    <div>
      <label>
      Find contacts by name
      <input type="text" value={value} onChange={changeFilter}></input>
      </label>
    </div>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
