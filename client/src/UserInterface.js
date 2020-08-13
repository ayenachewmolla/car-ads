import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SimpleContainer(props) {

  const cssStyle = {
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: '20px'
    },
    image: {
      width: '250px',
      height: '200px'
    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      height: '80px',
      marginBottom: '10px'
    }
  }
  return (
    <React.Fragment>
      <form noValidate autoComplete="off" style={cssStyle.form}>
        <TextField
          id="standard-basic"
          label="Standard"
          onChange={props.changeInput}
          value={props.value}
        />
        <Button variant="contained" color="secondary" onClick={props.serchCar}>
          submit
        </Button>
      </form>
      <CssBaseline />
      <Container maxWidth="md">
        {props.cars.map((car) => {
          return (
            <div key={car.Image} style={cssStyle.container}>
              <img src={car.Image} alt="car" style={cssStyle.image} />
              <p>{car.Name}</p>
              <p>{car.Model}</p>
              <p>{car.Yaer}</p>
            </div>
          );
        })}
      </Container>
    </React.Fragment>
  );
}
