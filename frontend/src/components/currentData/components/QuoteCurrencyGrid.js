import { withStyles } from '@mui/styles';
import { Grid } from "@mui/material/";

export const QuoteCurrencyGrid = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'row'
    }
})(Grid);