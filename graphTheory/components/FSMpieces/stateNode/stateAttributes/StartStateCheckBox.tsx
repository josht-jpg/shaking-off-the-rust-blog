import { useContext } from "react";
import StartStateContext from "../../../../contexts/StartStateContext";
import createNewStartInput from "../../../../utils/createNewStartInput";
import removeStartingInputFromStorage from "../../../../utils/localStorage/removeStartingInput";
import CheckBoxField from "./checkBoxField/CheckBoxField";

interface StartStateCheckBoxFieldProps {
  stateIndex: number;
}

const StartStateCheckBox: React.FC<StartStateCheckBoxFieldProps> = ({
  stateIndex,
}) => {
  const [startNodeIndex, setStartNodeIndex] = useContext(StartStateContext);

  const handleStartNodeChange = (e: MouseEvent) => {
    e.preventDefault();
    if (startNodeIndex === undefined) {
      createNewStartInput(stateIndex);
      setStartNodeIndex(stateIndex);
    } else {
      document.getElementById(`lineStartTo${stateIndex}Number`).remove();
      removeStartingInputFromStorage();
      setStartNodeIndex(undefined);
    }
  };

  const isStartStateDeclared = () => startNodeIndex !== undefined;
  const isDisabled = () =>
    isStartStateDeclared() && startNodeIndex !== stateIndex;

  const BUTTON_TITLE = "Start state is already declared";
  const BUTTON_TEXT = "Starting State";

  return (
    <CheckBoxField
      buttonTitle={isDisabled() && BUTTON_TITLE}
      buttonText={BUTTON_TEXT}
      isDisabled={isDisabled()}
      isChecked={startNodeIndex === stateIndex}
      handleClick={handleStartNodeChange}
    />
  );
};

export default StartStateCheckBox;
