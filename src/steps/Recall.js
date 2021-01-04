import React from "react";

export default function Recall({
  addAnimal,
  next,
  animalsList,
  selectedAnimals
}) {
  return (
    <div className="container">
      <h1 className="text-center my-3">Select the animals: </h1>
      <p className="text-center">
        There is a list of animals below. Select all of the ones that you
        remember from the list shown before.
      </p>
      <div className="row ml-0">
        <ul className="list-group col-md-6">
          {animalsList.slice(0, animalsList.length / 2).map((animal, idx) => {
            return (
              <li
                key={idx}
                className={`list-group-item ${
                  selectedAnimals.includes(animal) && "list-group-item-primary"
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => addAnimal(animal)}
              >
                {animal}
              </li>
            );
          })}
        </ul>
        <ul className="list-group col-md-6">
          {animalsList.slice(animalsList.length / 2).map((animal, idx) => {
            return (
              <li
                key={idx}
                className={`list-group-item ${
                  selectedAnimals.includes(animal) && "list-group-item-primary"
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => addAnimal(animal)}
              >
                {animal}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className="btn btn-primary d-flex align-items-center my-3"
        onClick={next}
      >
        Finish{" "}
        <span className="ml-2" style={{ width: "15px" }}>
          <svg
            className="d-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
