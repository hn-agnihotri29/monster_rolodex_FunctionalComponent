
//ChangeEvenetHandler is function defination
//ChangeEvent in event defination
import { ChangeEvent } from 'react';

import './search-box.styles.css'



/**
* Extend funtion  
*/


// interface ISearchBoxProps extends IChangeHandler {
//   className: string;
//   placeholder?: string,
// }

// interface IChangeHandler {
//   onChangeHandler: (a: string) => void
// }


// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string,
// }


// //interface overloading
// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event : ChangeEvent<HTMLInputElement>) => void;
}



const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) =>(
  <input 
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
)

export default SearchBox