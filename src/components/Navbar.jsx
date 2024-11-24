import { Link } from "react-router-dom"
import React, { useState } from "react";
import "../style/Navbar.css"
import { Drawer , Box ,List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"

export const Navbar = () =>{

    const [openMenu, setOpenMenu] = useState(false)
    const menuOpitions = [
        {
            text:"Home",
            icon: <HomeIcon />
        },
        {
            text:"Contact",
            icon: <PhoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon: <ShoppingCartRoundedIcon/>
        },
    ]



    return (
        <nav>
            <div className="nav-logo-conteiner">
                
            </div>
            <div className="navbar-links-container">
                <Link to="/home" className="link-nav-btn">Home</Link>
                <Link to="/work" className="link-nav-btn">Cadastro de Hoteis</Link>
            </div>
            <div className="navbar-menu-container">
                
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} 
            anchor="right"> 
                <Box 
                    sx={{ width: 250 }} 
                    role="presentation"
                    onClick={ () => setOpenMenu(false)}
                    onKeyDown={ ()=> setOpenMenu(false)}
                >
                    <List>
                        {menuOpitions.map((item) =>(
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                  <ListItemIcon>{item.icon}</ListItemIcon>
                                  <ListItemText primary={item.text}></ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}

