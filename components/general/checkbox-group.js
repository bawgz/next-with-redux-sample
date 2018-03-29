import React from "react";
import PropTypes from "prop-types";
import { Checkbox, FormGroup, FormControlLabel } from "material-ui";

const CheckboxGroup = ({ options, handleChange, optionsChecked }) => (
    <FormGroup>
        {
            options.map((option, i) => (
                <div key={i}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={
                                    optionsChecked[option.name] !== undefined
                                }
                                onChange={(e) => handleChange(option, e)}
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
    options: PropTypes.array,
    handleChange: PropTypes.func,
    optionsChecked: PropTypes.object
};

export default CheckboxGroup;
