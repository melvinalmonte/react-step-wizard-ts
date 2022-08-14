import StepWizard from "react-step-wizard";
import { StepWizardChildProps } from "react-step-wizard";
type Step1Props = {
  user: string;
};
const Step1 = (props: Partial<StepWizardChildProps> & Step1Props) => {
  const { user, nextStep } = props;
  return (
    <div>
      <p>Hi {user}</p>
      <p>This is step 1</p>
      <button onClick={() => nextStep && nextStep()}>Go to step 2</button>
    </div>
  );
};
const Step2 = (props: Partial<StepWizardChildProps>) => {
  return (
    <div>
      <p>This is step 2</p>
      <button onClick={() => props.nextStep && props.nextStep()}>
        Go to step 3
      </button>
    </div>
  );
};
const Step3 = (props: Partial<StepWizardChildProps>) => {
  return (
    <div>
      <p>This is step 3</p>
      <button onClick={() => props.firstStep && props.firstStep()}>
        Go to step 1
      </button>
    </div>
  );
};
function App() {
  return (
    <StepWizard isHashEnabled>
      <Step1 user="Bob" hashKey="step-1" />
      <Step2 hashKey="step-2" />
      <Step3 hashKey="step-3" />
    </StepWizard>
  );
}

export default App;
