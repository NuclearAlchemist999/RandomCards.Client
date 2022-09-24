import CardContainer from './components/CardContainer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  return (
    <div className="App">
     <CardContainer />
     <ToastContainer 
     hideProgressBar
     theme='dark'
     />
    </div>
  )
}

export default App
