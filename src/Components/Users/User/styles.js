import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "500px",
    height: "60px",
    marginTop: "5px",
    justifyContent: "space-between",

  },
  media: {
    paddingTop: "56.25%", // 16:9
    margin: "7%",
    borderRadius: "5px",
    "&:image": {
      width: "100%",
      objectFit: "cover",
    },
    color: "black",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    color: "black",
    fontFamily: "cursive",
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
    color: "blue",
  },
  IconDelete: {
    color: "red",
  },
}));
