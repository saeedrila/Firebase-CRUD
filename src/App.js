import './App.css';
import { Firebase } from './firebase/config';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        Firebase.firestore().collection('products').get().then((snapshot)=>{
          console.log(snapshot)
        })
        
        console.log('Clicked')
      }}>Click Me!</button>
    </div>
  );
}

export default App;
