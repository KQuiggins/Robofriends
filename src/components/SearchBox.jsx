import PropTypes from 'prop-types';

const SearchBox = ({searchChange}) => {
    return (
        <div className="flex justify-center">
            <input
                type='search'
                placeholder='search robots'
                className="pa3 ba b--green mb3"
                onChange={searchChange}
            />
        </div>
    )
}

SearchBox.propTypes = {
    searchChange: PropTypes.func.isRequired,
  };
export default SearchBox