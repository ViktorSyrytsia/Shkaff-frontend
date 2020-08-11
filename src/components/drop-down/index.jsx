import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropDown = ({ name, options, handleDropDown }) => {
        return (
                <Dropdown
                        item
                        simple
                        text={name}
                        direction='right'
                        options={options}
                        onChange={(e, options) => handleDropDown(e, options, name)}
                />
        )
}

export default DropDown;
