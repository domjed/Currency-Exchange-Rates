import { styled } from "@mui/material/styles";
import { DRAWER_WIDTH } from "@shared/Constants";

export const AppContainer = styled("div", {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: `${DRAWER_WIDTH}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));