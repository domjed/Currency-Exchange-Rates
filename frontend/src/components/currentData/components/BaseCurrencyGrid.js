import { withStyles } from '@mui/styles';
import { Grid } from "@mui/material/";

export const BaseCurrencyGrid = withStyles({
    root: {
        width: '400px',
        marginLeft: '20px',
        marginTop: '10px'
    }
})(Grid);