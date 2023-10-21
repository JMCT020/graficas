import { TextField } from "@mui/material";
import React from "react";


const Input = ({label, onChange, type="text"}) => {
    return (
        <TextField fullWidth style={{margin: "10px"}} id="outlined-basic" type={type} label={label} onChange={(e) => onChange(e.target.value)} variant="outlined" />
    )
}

export default Input