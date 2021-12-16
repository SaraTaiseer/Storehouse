import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    overflow: "hidden",
    boxShadow: "0 2px 20px #e1e5ee",
    borderRadius: "0.2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
    transition: "transform 200ms ease-in",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  media: {
    height: "75px",
    paddingTop: "56.25%", // 16:9
    margin: "7%",
    borderRadius: "5px",
    "&:image": {
      height: "12rem",
      width: "100%",
      objectFit: "cover",
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  desc: {
    padding: "1rem",
  },
  button: {
    backgroundColor: "white",
    width: "30px",
    height: "30px",
    cursor: "pointer",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "rgb(218, 226, 218)",
    },
  },
  Icon: {
    color: "gray",
  },
}));
