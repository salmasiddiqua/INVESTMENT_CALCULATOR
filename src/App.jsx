import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isvalidInput = userInput.duration >= 1;
  function handleInvestment(investmentType, investmentValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [investmentType]: +investmentValue };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleInvestment} />
      {!isvalidInput && (
        <p className="center">Please enter duration greater than zero</p>
      )}
      {isvalidInput && <Results userInput={userInput} />}{" "}
    </>
  );
}

export default App;
