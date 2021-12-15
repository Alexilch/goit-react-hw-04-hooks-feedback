import  { useState } from 'react';
import FeedbackOptions from './components/Feedback';
import Statistics from './components/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification';

// const options = ['good', 'neutral', 'bad']

export default function App() {
  const [good, setgood] = useState(0);
  const [bad, setbad] = useState(0);
  const [neutral, setneutral] = useState(0);
  
  const handleFeedback = (option) => {
    switch (option){
      case 'good':
        setgood(prevgood => prevgood + 1)
        break;
      case 'bad':
        setbad(prevbad => prevbad + 1)
        break;
      case 'neutral':
        setneutral(prevneutral => prevneutral + 1)
        break;
      default: return;
    }
  };

  const countTotal = () => {
    return good + neutral + bad;
  };
  
  const countPositivePercentage = () => {
    return Math.round((good / countTotal()) * 100) || 0;
  };

  return (
    <div>
      <Section title="Please Leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      {countTotal() === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPositivePercentage()}
          />
        </Section>
      )}
    </div>
  );
}






// class Appold extends Component {


//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotal = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositivePercentage = () => {
//     const { good } = this.state;
//     return Math.round((good / this.countTotal()) * 100) || 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Section title="Please Leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleFeedback}
//           />
//         </Section>
//         {this.countTotal() === 0 ? (
//           <Notification message="There is no feedback"></Notification>
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotal()}
//               positivePercentage={this.countPositivePercentage()}
//             />
//           </Section>
//         )}
//       </div>
//     );
//   }
// }

// export default App;
