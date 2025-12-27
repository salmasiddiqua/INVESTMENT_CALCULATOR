export default function UserInput({ handleChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label for="initial">Initial Investement</label>
          <input
            id="initial"
            type="number"
            value={userInput["initialInvestment"]}
            required
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label for="annaul">Annual Investment</label>
          <input
            id="annaul"
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label for="return">Expected Return</label>
          <input
            id="return"
            type="number"
            value={userInput["expectedReturn"]}
            required
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label for="duration">Duration</label>
          <input
            id="duration"
            type="number"
            value={userInput.duration}
            required
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
