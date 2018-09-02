import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

const RadioButtonGroup = ({ options = [], handleChange, filling }) => (
  <FormControl style={{ width: '100%' }} component="fieldset" required>
    <FormLabel component="legend">Fillings</FormLabel>
    <FormGroup role="radiogroup">
      <Grid container direction="row" alignContent="space-around">
        {options.map(option => (
          <Grid key={option.id} item xs={6}>
            <FormControlLabel
              id={option.id}
              checked={filling === option.name}
              value={option.name}
              onChange={() => handleChange(option.name)}
              control={
                <Radio color="primary" checked={filling === option.name} />
              }
              label={option.name}
            />
          </Grid>
        ))}
      </Grid>
    </FormGroup>
  </FormControl>
);

RadioButtonGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  filling: PropTypes.string.isRequired,
};

export default RadioButtonGroup;
