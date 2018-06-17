import PropTypes from 'prop-types';
import hashmapPropType from 'hashmap-prop-type';

export const toppingsPropTypes = hashmapPropType(PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}));

export const toppingsArrayPropTypes = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}));

export const menuPropTypes = PropTypes.arrayOf(PropTypes.shape({
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toppings: toppingsArrayPropTypes.isRequired,
}));

export const optionsCheckedPropTypes = hashmapPropType(PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}));

export const orderItemPropTypes = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pricePerItem: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  toppings: toppingsPropTypes.isRequired,
});

export const orderDetailsPropTypes = PropTypes.shape({
  items: hashmapPropType(orderItemPropTypes).isRequired,
  total: PropTypes.number.isRequired,
});
