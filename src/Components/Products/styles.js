import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
    paddingTop: theme.spacing(0),
  },

  root: {
    flexGrow: 1,
  },
  highlight: {
    height: "500px",
    width: "100%",
  },
}));