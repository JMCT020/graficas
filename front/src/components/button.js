import * as React from 'react';
import {Button as ButtonMui} from '@mui/material';

const Button = ({variant, children, onClick}) => {
    return(
        <ButtonMui style={{margin: "10px"}} fullWidth  onClick={onClick} variant={variant}>{children}</ButtonMui>
    ) 
}

export default Button