import './App.css';
import { Firebase } from './firebase/config';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        Firebase.firestore().collection('products').add({
          name:'Redmi',
          price:15000,
          type:'Smartphone'
        })
        console.log('Clicked')
      }}>Click Me!</button>
    </div>
  );
}

export default App;
