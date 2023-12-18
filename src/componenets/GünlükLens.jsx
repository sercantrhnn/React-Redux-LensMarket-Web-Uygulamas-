import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addCart } from "../control/sepetSlice";

function GünlükLens({ veri }) {
  const dispatch = useDispatch();
  return (
    <>
      {
        <div
          style={{ display: "flex", flexWrap: "wrap", margin: "70px 150px" }}
        >
          {veri.map((veri) => {
            if (veri.tip === "Günlük") {
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
                        <Button onClick={() => dispatch(addCart(veri))}>
                          <AddShoppingCartIcon sx={{ color: "#F2762A" }} />
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
                </div>
              );
            }
          })}
        </div>
      }
    </>
  );
}

export default GünlükLens;
