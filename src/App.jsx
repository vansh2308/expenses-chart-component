import './App.css'
import Balance from './components/Balance'
import Charts from './components/Charts'

function App() {

  return (
    <div className='h-screen w-screen bg-peach flex justify-center items-center text-brown'>
      <div className='flex flex-col w-1/3 min-w-fit max-[850px]:w-[90%] max-[850px]:max-w-[90%]'>
        <Balance />
        <Charts />
      </div>
    </div>
  )
}

export default App
