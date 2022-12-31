import React, { Component, useState } from 'react';

import { GlobalStyle } from './GlobalStyle';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    good === 0 ? 0 : Math.round((100 * good) / (good + neutral + bad));

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <p> There is no feedback</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>

      <GlobalStyle />
    </div>
  );
}

// export class App1 extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = name => {
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     return good === 0 ? 0 : Math.round((100 * good) / (good + neutral + bad));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onFeedback={this.handleIncrement}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total === 0 ? (
//             <p> There is no feedback</p>
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>

//         <GlobalStyle />
//       </div>
//     );
//   }
// }
