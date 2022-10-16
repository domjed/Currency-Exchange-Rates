import { Card } from "@mui/material/";

import { withStyles } from '@mui/styles';

export const ContactCard = withStyles({
    root: {
        marginTop: '20px',
        transition: "0.3s",
        width: '350px',
        height: '300px',
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
    }
})(Card);
