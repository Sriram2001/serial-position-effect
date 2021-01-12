import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export default function Recall({
  addAnimal,
  next,
  animalsList,
  selectedAnimals
}) {
  const [listening, setListening] = useState(false);

  const commands = animalsList.map((a) => {
    return {
      command: `${a}`,
      callback: (animal) => {
        addAnimal(a);
      },
      isFuzzyMatch: true
    };
  });

  let toggle = "";

  useSpeechRecognition({ commands });
  if (SpeechRecognition.browserSupportsSpeechRecognition()) {
    toggle = (
      <>
        <p className="h4 mr-2">Speech Recognition:</p>

        <BootstrapSwitchButton
          checked={listening}
          onlabel="ON"
          offlabel="OFF"
          onstyle="success"
          onChange={(checked) => {
            if (checked) {
              SpeechRecognition.startListening({ continuous: true });
            } else {
              SpeechRecognition.stopListening();
            }
            setListening(checked);
          }}
        />
      </>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center my-3">Select the animals: </h1>
      <p className="text-center">
        There is a list of animals below. Select all of the ones that you
        remember from the list shown before.
      </p>

      <div className="row mb-2 d-flex justify-content-center">{toggle}</div>
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
