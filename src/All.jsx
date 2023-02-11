import React from 'react';
import Heading from './Heading';
import Para from './Para';
import List from './List';  // to import all component in one jsx file

function All(){
    return(
        <>
            <Heading />
            <Para />
            <List />
        </>
    );
}

export default All;