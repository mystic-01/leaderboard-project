import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "35ch",
      }, 
      [theme.breakpoints.down('xs')]: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
          width: "20ch",
        }, 
      },
    },
    root2: {
      margin: theme.spacing(1),
      height: "3.3rem",
      width: "5ch",
    },
    heading1: {
      fontSize: "2rem",
      fontWeight: "600",
      height: "30vh",
      display: "flex",
      alignItems: "Center",
      justifyContent: "center",
    },
    sectionMainCover: {
      backgroundColor :"#f5f5f5",
      padding: "10vh 0",
     
    },
    sectionMain: {
      backgroundColor: "#fff",
      borderRadius: "4px",
      margin: "auto",
      padding: "2rem 3rem",
      width: "65%",
      boxShadow: "0 1px 3px rgb(0 0 0 / 24%), 0 2px 7px rgb(0 0 0 / 12%)",
      animation: "slideUp 900ms ease-in",
      [theme.breakpoints.down('xs')]: {
        width: "100%",
      },
    },
    heading2: {
      fontSize: "1.5rem",
      fontWeight: "500",
      padding: "20px 0 0 7px",
      height: "4rem",
    },
    heading3: {
      fontSize: "1rem",
      fontWeight: "500",
      padding: "5px 0 5px 10px"
    },
    footer: {
      margin: "2rem 0 0 0",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      [theme.breakpoints.down('xs')]: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
      },
    },
    footerButton: {
      border: "1.5px solid #5200af",
      borderRadius: "4px",
      margin: "0.67rem 0 0 0.5rem",
      padding: "5px 10px",
      height: "44px",
      width: "200px",
      minWidth: "150px",
      boxShadow: "0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)",
      [theme.breakpoints.down('xs')]: {
        margin: "1rem 0 0 0.5rem",
      },
    }
}));
      
export default useStyles;