import './App.css';
import { Firebase } from './firebase/config';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        Firebase.auth().createUserWithEmailAndPassword('alice@gmail.com','1234567890')
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          Firebase.firestore().collection('products').get().then((snapshot)=>{
            console.log(snapshot)
          })
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });

        console.log('Clicked')
      }}>Click Me!</button>
    </div>
  );
}

export default App;
