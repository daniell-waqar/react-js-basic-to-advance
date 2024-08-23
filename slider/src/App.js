import React from 'react';
import Slider from './components/Slider';
import './App.css';

const cards = [
  {
    heading: 'Software Engineer',
    subheading: 'Frontend Developer',
    paragraph: 'Specializes in creating responsive web applications. With a deep understanding of HTML, CSS, and JavaScript.',
    iconType: 'code',
    profilePic: 'https://www.shutterstock.com/image-photo/clever-confident-positive-arabian-indian-260nw-2188751451.jpg',
  },
  {
    heading: 'Game Developer',
    subheading: 'Unity Expert',
    paragraph: 'Experienced in developing 2D and 3D games. I have a strong grasp of game design principles and a keen eye for detail.',
    iconType: 'game',
    profilePic: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg',
  },
  {
    heading: 'Data Scientist',
    subheading: 'Machine Learning Enthusiast',
    paragraph: 'Passionate about data analysis and AI, building predictive models and extracting valuable insights from complex datasets.',
    iconType: 'data',
    profilePic: 'https://www.shutterstock.com/image-photo/college-students-sitting-together-using-260nw-1841011753.jpg',
  },
];

const App = () => {
  return (
    <div className="app">
      <h1>Slider Application</h1>
      <Slider cards={cards} />
    </div>
  );
};

export default App;
