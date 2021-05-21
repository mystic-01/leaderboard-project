import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    
    gold: {
      color: "#fff",
      backgroundColor: "gold"
    },
    silver: {
      color: "#fff",
      backgroundColor: "silver"
    },
    bronze: {
      color: "#fff",
      backgroundColor: "#cd7f32"
    },
    normaL: {
        backgroundColor: "inherit"
    },
    grid: {
        height: "70px",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.047)",
      },
      centeringClass :{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "70px",
    }
}));
      
export default useStyles;