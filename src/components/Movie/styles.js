import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  links: {
    alignItems: "center",
    textDecoration: "none",
    fontWeight: "bolder",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },

  image: {
    borderRadius: "20px",
    height: "300px",
    width: "200px",
    marginBottom: "10px",
    paddingRight: "4px",
    [theme.breakpoints.down("sm")]: {
      padding: "12px",
    },
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center",
  },
}));
