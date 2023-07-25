import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component'
import './App.css';
import SearchBox from './components/search-box/serach-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonster] = useState(monsters)
  console.log('render')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
     })
     setFilteredMonster(newFilteredMonster)
  }, [monsters, searchField])
  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }


  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className='monster-search-box'
        placeholder='search monster'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters = {filteredMonsters}/>
    </div>
  )

}

// class App extends Component {

//   constructor() {
//     super()

//     this.state = {
//      monsters: [],
//      searchField: ''
//     }
//   }

//   componentDidMount() {
//     
//   }



//   render() {
//     //console.log('Render AppJs')
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
      
//     );
//   }
// }


export default App;
