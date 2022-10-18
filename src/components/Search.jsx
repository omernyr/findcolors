import { useContext } from 'react'
import { GrSearch } from "react-icons/gr"
import MainContext from '../MainContext'
const Search = () => {

    const { search, setSearch } = useContext(MainContext);

    



    return (
        <div className='search'>
            <div className="icon"> <GrSearch /> </div>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search Brand' />
        </div>
    )
}

export default Search