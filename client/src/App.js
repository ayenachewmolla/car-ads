import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UserInterface from "./UserInterface";

function App() {
  const [cars, setCars] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios
      .get("/cars")
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeInput = (e) => {
    setValue(e.target.value);
  };
  const serchCar = () => {
    axios
      .get("/cars")
      .then((res) => {
        const cars = filterCar(res.data);
        setCars(cars);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filterCar = (cars) => {
    let resulte = cars.filter((car) => {
      console.log(value);
      return car.Model === value;
    });
    return resulte;
  };
  return <UserInterface value={value} changeInput={changeInput} serchCar={serchCar} cars={cars} />;
}

export default App;
