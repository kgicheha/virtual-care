import { makeStyles } from "@material-ui/core/styles";
import { red } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  //GLOBAL
  button: {
    fontWeight: "bold",
    backgroundColor: "#f35757",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: red[700],
    },
  },
  displayedErrors: {
    color: '#f35757'
  },
  form: {
    backgroundColor: '#ffffff',
  },

  //LANDING PAGE
  logo: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  signinbutton: {
    position: "absolute",
    top: "55px",
    right: "16px",
    backgroundColor: "#f35757",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: red[700],
    },
  },

  midSection: {
    backgroundColor: "#e5e8f1",
  },
  firstContainer: {
    padding: "80px",
  },
  //need to fix
  doctorGif: {
    position: "relative",
    left: "300px",
    bottom: "100px",
  },

  //card data
  cardGrid: {
    padding: "60px",
    alignContent: "center",
    // marginLeft: "200px"
  },
  card: {
    backgroundColor: "#ededed",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "25px",
  },
  cardContent: {
    flexGrow: 1,
  },
  stars: {
    color: "#FFBF00",
  },

  footer: {
    marginTop: "60px",
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "80px",
  },

  //LOG IN
  login: {
    marginTop: "20px",
    backgroundColor: "hsl(0, 0%, 93%)",
    opacity: "0.8",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },


  //SIGN UP
  signup: {
    marginTop: "20px",
    backgroundColor: "hsl(0, 0%, 93%)",
    opacity: "0.8",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
