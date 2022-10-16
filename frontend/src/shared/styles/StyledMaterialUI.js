import {
    Card,
    CardMedia,
    Grid,
    TextField,
    Typography,
} from "@mui/material/";
import { green } from '@mui/material/colors';
import { styled } from "@mui/material/styles";
import { withStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { Borders } from 'react-vis';

export const THEME = createTheme({
    palette: {
        primary: {
            main: green[600],
        },
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "14px",
                    backgroundColor: "white",
                    border: "2px solid green",
                },
            },
        },
    },
});

export const ContactTitle = withStyles({
    root: {
        display: "flex",
        flexDirection: 'column',
        font: '40px',
        fontStyle: 'italic',
        fontWeight: '800',
        marginBottom: '20px',
    }
})(Typography);

export const ContactContainer = withStyles({
    root: {
        fontWeight: '700',
        display: "flex",
        flexDirection: 'column',
    }
})(Typography);

export const ContactCardTitle = withStyles({
    root: {
        fontSize: 'h1.fontSize'
    },
})(Grid);

export const MenuCardMedia = withStyles({
    root: {
        padding: "3%",
        height: '300px',
        backgroundColor: green[600],
    },
})(CardMedia);

export const ContactGrid = styled(Grid)({
    justifyContent: "space-evenly",
});

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

export const StyledTextField = withStyles({
    root: {
        background: green[400],
    },
})(TextField);

export const StyledBorders = styled(Borders)({
    all: {
        fill: '#fff',
    }
});

export const PageTitleGrid = withStyles({
    root: {
        display: 'flex',
        width: 900,
        margin: 'auto',
    }
})(Grid);

export const CurrencyTableGrid = withStyles({
    root: {
        width: '850px',
        margin: 'auto',
    }
})(Grid);

export const PlotTitleGrid = withStyles({
    root: {
        marginLeft: '100px',
        marginBottom: '10px',
        fontFamily: 'Courier New',
        fontSize: "20px",
    }
})(Grid);

export const TableGrid = styled(Grid)({
    display: 'flex',
    width: 1300,
    margin: 'auto',
    flexDirection: 'column',
});

export const PageTitle = withStyles({
    root:
    {
        fontWeight: "bold",
        fontFamily: 'Courier New',
        fontSize: "50px",
    }
})(Grid);