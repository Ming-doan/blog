import './App.css';
import { useRef } from 'react';

// Import Components
import NavBar from './components/navbar';

function App() {
  const navCategory = useRef([
    {
        id: '_home',
        name: 'Home',
        icon: <i className="fas fa-home"></i>
    },
    {
        id: '_trend',
        name: 'Trending',
        icon: <i className="fas fa-poll"></i>
    },
    {
        id: '_follow',
        name: 'Following',
        icon: <i className="fas fa-bookmark"></i>
    }
  ])
  const notification = useRef([
    {
      id: 1,
      author: '',
      thumbnail: '',
      title: '',
      date: '',
      isRead: false
    }
  ])


  return (
    <div className="App">
      <NavBar navCategory={navCategory} notify={notification}/>
    </div>
  );
}

export default App;
