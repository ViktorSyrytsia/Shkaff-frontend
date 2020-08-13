import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const DropDown = ({ id, options, handleDropDown, name }) => {
        // console.log(name);
        return (
                <Dropdown
                        id={id}
                        onChange={handleDropDown}
                        options={options}
                        placeholder={id}
                        selection
                        value={name}
                />
        )
}

export default DropDown;
