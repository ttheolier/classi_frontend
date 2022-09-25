import React from 'react';
import {AppBar, Box, createTheme, Drawer, IconButton, ThemeProvider, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import uscTheme from "./theme";

function Header() {

    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setDrawerOpen(newOpen);
    };

    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={uscTheme}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor={'left'}
                                open={drawerOpen}
                                onClose={toggleDrawer(false)}
                            >

                            </Drawer>
                            {/*<Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:'left' }}>
                                CLASSI
                            </Typography>*/}
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </Box>
        </div>
    )
}

export default Header;