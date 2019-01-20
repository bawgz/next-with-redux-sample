import PropTypes from 'prop-types';
import hashmapPropType from 'hashmap-prop-type';

export const fillingsPropTypes = hashmapPropType(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
);

export const fillingsArrayPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
);

export const menuPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    fillings: fillingsArrayPropTypes.isRequired,
  }),
);

export const optionsCheckedPropTypes = hashmapPropType(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
);

export const orderItemPropTypes = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pricePerItem: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  filling: PropTypes.string.isRequired,
});

export const orderDetailsPropTypes = PropTypes.shape({
  items: hashmapPropType(orderItemPropTypes).isRequired,
  total: PropTypes.number.isRequired,
});

export const addressPropTypes = PropTypes.shape({
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
});

export const confirmedOrderPropTypes = PropTypes.shape({
  address: addressPropTypes.isRequired,
  ...orderDetailsPropTypes,
  name: PropTypes.string.isRequired,
  chargeId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
});
