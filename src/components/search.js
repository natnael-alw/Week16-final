import { AiOutlineSearch } from 'react-icons/ai'

const Search = (props) => {

    const student = props.student
    const setFind = props.setFind


    const handleChange = (e) => {
        if (!e.target.value) setFind(student)

        const found = student && student.filter(student => student.fullName.toLowerCase().includes(e.target.value))
        setFind(found)
    }


    return (
        <>

            <header>
                <form onSubmit={(e) => e.preventDefault()} className="form-group mt-3" >
                    <h3>  <input className='mb-2' onChange={handleChange} id='searchInput' size='sm' placeholder="search.." />
                        <AiOutlineSearch /></h3>

                </form>
            </header>


        </>

    )
}

export default Search