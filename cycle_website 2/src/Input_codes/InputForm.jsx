// import './Input_codes/InputForm.css'
import { useState } from 'react'
const InputForm = () => {

    const [name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <div>
            <input type='text' onChange={(e) => {setName({ ...name,firstName: e.target.value })}} />
            <input type='text' onChange={(e) => {setName({ ...name,lastName: e.target.value })}} />
            <h1>First Name is :{name.firstName}</h1>
            <h1>last Name is :{name.lastName}</h1>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default InputForm;