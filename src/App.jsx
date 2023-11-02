import './App.css'
import Hero from './components/Hero'
import Demo from './components/Demo'

const App = () => {
    return (
        <main>
            <div className='main'>
          <div className='gradient' />  
          </div>
          <div className='App'>
          <Hero/>
            <Demo/>
          </div>
        </main>
    )
}

export default App

