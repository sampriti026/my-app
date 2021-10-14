import React from 'react'
import Person from './person'

function PersonList() {
const persons = [
    {
        id: '1',
        name: 'bruve'
    },
    {
        id: '2',
        name: 'clara'
    }

]
    const personList = persons.map(person => <Person person = {person}/>)
    
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default PersonList
