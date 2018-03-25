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
                                    optionsChecked[option] !== undefined
                                }
                                onChange={(e) => handleChange(option, e)}
                                value={option}
                                label={option}
                            />
                        }
                        label={option}
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
