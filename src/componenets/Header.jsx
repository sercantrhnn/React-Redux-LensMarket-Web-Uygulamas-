import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Badge,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const adet = useSelector((state) => state.cart.adet);
  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Link to="/">
            <IconButton>
              <AppsIcon sx={{ color: "#F2762A" }} />
            </IconButton>
          </Link>

          <Typography
            variant="h5"
            sx={{ marginRight: "auto", color: "#F2762A", fontWeight: "bold" }}
          >
            Lens Market
          </Typography>
          <Link to="/sepet">
            <Badge
              badgeContent={adet}
              color="error"
              sx={{ marginRight: "5px" }}
            >
              <ShoppingCartIcon sx={{ color: "#F2762A" }} />
            </Badge>
          </Link>
          <Stack direction="row" marginRight={3}>
            <Link to="/saydam">
              <Button sx={{ color: "#F2762A", margin: "5px" }}>
                Saydam Lens
              </Button>
            </Link>
            <Link to="/gunluk">
              <Button sx={{ color: "#F2762A", margin: "5px" }}>
                Günlük Lens
              </Button>
            </Link>
            <Link to="/renkli">
              <Button sx={{ color: "#F2762A", margin: "5px" }}>
                Renkli Lens
              </Button>
            </Link>
            <Link to="/solusyon">
              <Button sx={{ color: "#F2762A", margin: "5px" }}>
                Solüsyonlar
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
