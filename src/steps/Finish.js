import React from "react";

export default function Finish({ selectedAnimals, allAnimals, next }) {
  let message = "";
  let outside = 0;
  let inside = 0;
  allAnimals.forEach((animal, idx) => {
    if (!selectedAnimals.includes(animal)) {
      if (idx >= 3 && idx < 6) inside += 1;
      else outside += 1;
    }
  });

  if (inside > outside) {
    message = (
      <p>
        You have recalled more elements in the boundary of the array than in the
        interior. So, the serial position has been effective.
      </p>
    );
  } else if (outside > inside) {
    message = (
      <p>
        You have recalled more elements in the interior of the array than in the
        boundary. So, the serial position has not been effective.
      </p>
    );
  }
  if (allAnimals.every((animal) => selectedAnimals.includes(animal))) {
    message = (
      <p>
        You have recalled all the animals and your memory is very good. So, the
        serial position efect does not apply.
      </p>
    );
  }
  if (selectedAnimals.length > allAnimals.length) {
    message = (
      <p>
        You have selected more than 8 elements. So, the serial position efect
        does not apply. Please retry the simulation
      </p>
    );
  }
  if (
    selectedAnimals.length === 0 ||
    !allAnimals.some((animal) => selectedAnimals.includes(animal))
  ) {
    message = (
      <p>You have not recalled any animal correctly. Do you want to retry?</p>
    );
  }
  return (
    <div className="container">
      <h1 className="my-3 text-center">Result:</h1>
      <div className="text-center">{message}</div>
      <div className="row no-gutters">
        <ul className="list-group col-md-8 mx-auto">
          {allAnimals.map((animal, idx) => {
            return (
              <li
                key={idx}
                className={`list-group-item ${
                  selectedAnimals.includes(animal) && "list-group-item-success"
                }`}
              >
                {animal}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className="btn btn-success mx-auto d-flex align-items-center my-3"
        onClick={next}
      >
        Restart
        <span className="ml-2" style={{ width: "20px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="d-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
