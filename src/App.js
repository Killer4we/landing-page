import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';
import Card from './assets/images/components/Card';
import Header from './assets/images/components/Header';
const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

function App() {
  return (
    <div>
      <Header/>
      <Card title = {concepts[0].title} image = {concepts[0].image} todo = {concepts[0].description} ></Card>
      <Card title = {concepts[1].title} image = {concepts[1].image} todo = {concepts[1].description} ></Card>
      <Card title = {concepts[2].title} image = {concepts[2].image} todo = {concepts[2].description} ></Card>
    </div>
  );
}

export default App;
