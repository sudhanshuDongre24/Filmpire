import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  image: {
    width: "450px",
    borderRadius: "50%",
    height: "450px",
    objectFit: "cover",

    border:
      theme.palette.mode === "dark" ? "3px solid #a5a5a5" : "3px solid #1976d2",
  },
  mainList: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "900px",
    margin: "20px auto",
    justifyContent: "space-between",
  },
  insideList: {
    display: "flex",
    justifyContent: "space-between",
  },
  creditImage: {
    height: "70px",
    width: "70px",
    marginRight: "10px",
    borderRadius: "50%",
  },
}));
