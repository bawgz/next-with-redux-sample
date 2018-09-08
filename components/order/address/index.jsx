import React from 'react';

import AddressForm from './address-form';

const Address = props => (
  <div className="address">
    <AddressForm {...props} />
    <style jsx>
      {`
        .address {
          margin: auto;
          width: 50%;
        }
      `}
    </style>
  </div>
);

export default Address;
