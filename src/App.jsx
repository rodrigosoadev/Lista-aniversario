import { useState } from 'react'
import List from './components/List'
import data from './components/data'

function App() {
  const [people, setPeolple] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeolple([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
