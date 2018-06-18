import React from 'react';
import Link from 'next/link';
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';

import withRoot from '../util/with-root';

const options = [{ id: 1, name: 'Hello' }, { id: 2, name: 'World' }];
const optionsChecked = {
  Hello: {
    id: 1,
    name: 'Hello',
  },
};

const handleChange = (option, e) => {
  console.log(option);
  console.log(e);
};

const Home = () => (
  <div>
    <Link href="/order">
      <a href="/order">Order</a>
    </Link>
    <FormGroup>
      {options.map(option => (
        <div key={option.name}>
          <FormControlLabel
            control={
              <Checkbox
                checked={optionsChecked[option.name] !== undefined}
                onChange={e => handleChange(option, e)}
                value={option.name}
                label={option.name}
              />
            }
            label={option.name}
          />
        </div>
      ))}
    </FormGroup>
  </div>
);

export default withRoot(Home);
