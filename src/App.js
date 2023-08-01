import './App.css';
import { Firebase } from './firebase/config';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        Firebase.firestore().collection('products').doc('pv25wXIL81vYzMQb5Xgh').set({
          name:'Updated'
        })
        console.log('Clicked')
      }}>Click Me!</button>
    </div>
  );
}

export default App;
