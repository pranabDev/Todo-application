import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import TodoDesign from './components/Todo_design';

function App() {
  return (
    <div className="App">
      <TodoDesign></TodoDesign>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
