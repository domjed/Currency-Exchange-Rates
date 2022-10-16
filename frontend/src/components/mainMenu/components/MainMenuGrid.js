import { Grid } from "@mui/material/";
import { withStyles } from '@mui/styles';

export const MainMenuGrid = withStyles({
    root: {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})(Grid);