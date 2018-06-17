import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormGroup, FormControlLabel } from 'material-ui';

import { optionsCheckedPropTypes } from '../../constants/prop-types';

const CheckboxGroup = ({ options = [], handleChange, optionsChecked }) => (
  <FormGroup>
    {
            options.map(option => (
              <div key={option.name}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                                    optionsChecked[option.name] !== undefined
                                }
                      onChange={e => handleChange(option, e)}
                      value={option.name}
                      label={option.name}
                    />
                        }
                  label={option.name}
                />
              </div>
            ))
        }
  </FormGroup>
);

CheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  optionsChecked: optionsCheckedPropTypes.isRequired,
};

export default CheckboxGroup;
