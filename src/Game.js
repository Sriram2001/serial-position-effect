import React from "react";
import { Wizard, Steps, Step } from "react-albus";
import { getAnimals } from "./common";
import Intro from "./steps/Intro";
import Recall from "./steps/Recall";
import RememberStage from "./steps/Remember";
import Finish from "./steps/Finish";

let [animals, randomAnimals] = getAnimals();
const skip = ({ step, push }) => {
  switch (step.id) {
    case "finish": {
      [animals, randomAnimals] = getAnimals();
      window.scrollTo(0, 0);
      push("start");
      break;
    }
    default: {
      window.scrollTo(0, 0);
      push();
    }
  }
};

const Game = () => {
  const [selectedAnimals, setSelected] = React.useState([]);

  const addAnimal = (animal) => {
    setSelected((list) => {
      if (list.includes(animal)) {
        return list.filter((e) => e !== animal);
      } else return [...list, animal];
    });
  };
  return (
    <Wizard onNext={skip}>
      <Steps>
        <Step
          id="start"
          render={({ next }) => (
            <Intro next={next} clearList={() => setSelected([])} />
          )}
        />
        <Step
          id="remember"
          render={({ next }) => (
            <RememberStage next={next} animalsList={animals} />
          )}
        />
        <Step
          id="recall"
          render={({ next }) => (
            <Recall
              next={next}
              selectedAnimals={selectedAnimals}
              addAnimal={addAnimal}
              animalsList={randomAnimals}
            />
          )}
        />
        <Step
          id="finish"
          render={({ next }) => (
            <Finish
              next={next}
              allAnimals={animals}
              selectedAnimals={selectedAnimals}
            />
          )}
        />
      </Steps>
    </Wizard>
  );
};

export default Game;
