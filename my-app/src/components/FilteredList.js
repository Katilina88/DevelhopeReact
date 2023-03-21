import React, {useMemo} from 'react'

function FilteredList({ list }) {
    const filteredList = useMemo(() => list.filter((person) => person.age >= 18), [list])

    return (
        <div>
            <ul>
                {filteredList.map((person)=>
                <li>Name: {person.name}, age: {person.age}, id: {person.id}</li>)}
            </ul>
        </div>
    )
}
export default FilteredList
