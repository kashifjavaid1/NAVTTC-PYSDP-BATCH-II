import React from 'react';
import One from './paractice/One';
import CheckBox from './paractice/CheckBox';
import DropDown from './paractice/DropDown';

const Parent = () => {
    return (
        <div>
            <One/>
            {/* <CheckBox/> */}
            <DropDown/>
        </div>
    );
}

export default Parent;
