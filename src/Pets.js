import axios from "axios";
import React, { useEffect, useState } from "react";
import PetDetail from "./PetDetail";
import "./Pets.css";
function Pets() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost/php_backend/pets_backend.php")
      .then((response) => {
        console.log(response["data"]["Pets"]);
        let objectPet = response["data"]["Pets"];
        setPets(objectPet);
      });
  };
  console.log(pets);
  return (
    <div className="container-pets">
      {pets.map((pet) => {
        return (
          <PetDetail
            petname={pet["pet_name"]}
            animal={pet["animal_type"]}
            age={pet["age"]}
          />
        );
      })}
    </div>
  );
}

export default Pets;
