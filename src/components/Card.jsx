import PropTypes from 'prop-types';
import 'tachyons'
import '../Card.css'



const Card = ({ name, email, id}) => {

  return (
    <>
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
    </>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Card;
