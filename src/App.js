import './App.css';
import Counter from './component/Counter';


function App() {
  return (
    <>
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
      <div className='bg-light p-5 rounded'>
      <h1 className='text-primary' >Counter Application</h1>
   <Counter/>
      </div>
    </div>
  );
    </>
    
  );
}

export default App;