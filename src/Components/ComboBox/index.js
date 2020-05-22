import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Pagination, Autocomplete } from "@material-ui/lab";
import Datacombobox from '../../Components/CustomMain/datacombobox';

function Combobox(props){
    return(
        <Autocomplete
            id="combo-box-demo"
            options={Datacombobox}
            getOptionLabel={(option) => option.title}
            style={{ width: 120}}
            renderInput={(params) => (
              <TextField {...params} label={props.nameCbb} variant="outlined" />
            )}
          />
    )
}
export default Combobox;