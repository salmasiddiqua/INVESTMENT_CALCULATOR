import { calculateInvestmentResults, formatter } from "../util/investment.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function Results({ userInput }) {
  let investmentResult = calculateInvestmentResults(userInput);
  const initialInvestment =
    investmentResult[0].valueEndOfYear -
    investmentResult[0].interest -
    investmentResult[0].annualInvestment;
  const chartData = investmentResult.map((yearData) => ({
    year: yearData.year,
    value: yearData.valueEndOfYear,
  }));
  const lastYear = investmentResult[investmentResult.length - 1];

  const totalInvested =
    initialInvestment + userInput.annualInvestment * userInput.duration;

  const totalInterest = lastYear.valueEndOfYear - totalInvested;
  const finalValue = lastYear.valueEndOfYear;
  console.log(investmentResult);
  return (
    <>


      <section id="summary">
        <div>
          <h4>Total Invested</h4>
          <p>{formatter.format(totalInvested)}</p>
        </div>

        <div>
          <h4>Total Interest</h4>
          <p>{formatter.format(totalInterest)}</p>
        </div>

        <div>
          <h4>Final Value</h4>
          <p>{formatter.format(finalValue)}</p>
        </div>
      </section>
          <section id="chart">
  <h3>Investment Growth Over Time</h3>

  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={chartData}>
      <XAxis dataKey="year" />
      <YAxis
        tickFormatter={(value) => formatter.format(value)}
      />
      <Tooltip
        formatter={(value) => formatter.format(value)}
      />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#7fffd4"
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  </ResponsiveContainer>
</section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investmentResult.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            const totalInvestment = yearData.valueEndOfYear - totalInterest;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestment)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
