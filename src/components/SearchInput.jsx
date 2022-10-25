import React from 'react'
import { useNavigate } from 'react-router-dom'


const SearchInput = () => {

    const navigate = useNavigate()

    const handleSearch = ( e ) => {
        e.preventDefault()
        navigate( "/searchresult/" + e.target.inpSearch.value )
    }


    return (
        <form className='Searchinput' onSubmit={ handleSearch }>
            <input type="text" name="inpSearch" placeholder='Søg' />
            <button type="submit">Søg</button>

        </form>
    )
}

export default SearchInput