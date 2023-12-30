import { React, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addCart } from "../control/sepetSlice";

function Solüsyon({ veri }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = (veri) => {
    dispatch(addCart(veri));
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      {
        <div
          style={{ display: "flex", flexWrap: "wrap", margin: "70px 150px" }}
        >
          {veri.map((veri, index) => {
            if (veri.tip === "Solüsyon") {
              return (
                <div key={veri.id} style={{ margin: "25px 20px" }}>
                  <Card
                    sx={{
                      width: 350,
                      height: 400,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      height="150"
                      component="img"
                      image={veri.img}
                      sx={{ marginTop: "20px" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="div"
                        textAlign={"center"}
                        sx={{ margin: "5px", color: "#0a569e" }}
                      >
                        {veri.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        textAlign={"center"}
                        margin={1}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        {veri.desc}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ marginTop: "auto" }}>
                      <Typography marginLeft={3} variant="h5">
                        {veri.fiyat} TL
                      </Typography>
                      <Stack sx={{ marginLeft: "150px" }}>
                        <Button onClick={() => handleAddToCart(veri)}>
                          <AddShoppingCartIcon sx={{ color: "#F2762A" }} />
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
                  <Snackbar
                  open={open}
                  onClose={handleClose}
                  autoHideDuration={3000}
                >
                  <Alert severity="success" sx={{ width: "100%" }}>
                    Ürün Sepete Eklendi
                  </Alert>
                </Snackbar>
                </div>
              );
            }
          })}
        </div>
      }
    </>
  );
}

export default Solüsyon;
