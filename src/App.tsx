import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component'
import './App.css';
import SearchBox from './components/search-box/serach-box.component';


import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filteredMonsters, setFilteredMonster] = useState(monsters)
  console.log('render')

  useEffect(() => {

    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users)
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
     })
     setFilteredMonster(newFilteredMonster)
  }, [monsters, searchField])
  

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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


export default App;
