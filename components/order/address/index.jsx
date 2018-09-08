import React from 'react';

import AddressForm from './address-form';

const Address = props => (
  <div style={{ margin: 'auto', width: '50%' }} className="address">
    <AddressForm {...props} />
    <style jsx>
      {`
        div.address: {
          margin: auto;
          width: 50%t;
        }
      `}
    </style>
  </div>
);

export default Address;
