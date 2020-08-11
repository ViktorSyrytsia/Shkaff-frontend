import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropDown = ({ name, options }) => {
        return (
                <Dropdown
                        item
                        simple
                        text={name}
                        direction='right'
                        options={options}
                />
        )
}

export default DropDown;
