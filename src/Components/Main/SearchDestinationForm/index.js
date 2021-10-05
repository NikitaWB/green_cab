import React from 'react'

function SearchDestinationForm() {
    const handleChange = (e) =>{
        console.log(e.target.value);
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        console.log('Submited');
        e.preventDefault();
    }

    return (
        <>
        <h2>Hello from Search Form!</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} placeholder='Åka från..' name='searchfrom'/>
            <input type='text' placeholder='Åka till..' name='searchto'/>
            <input type='submit' value='Välj bil' name='' />
        </form>
        </>
    )
}

export default SearchDestinationForm
