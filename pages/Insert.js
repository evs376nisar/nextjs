import React from 'react'
import { useState } from 'react';
import { app, database } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
function Insert() {
    // const databaseRef = collection(database, 'Students');
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const addData = (e) => {
        e.preventDefault();
        addDoc(collection(database, 'Students'), {
            name: name,
            email:email,
        })
        .then(() => {
            alert('Data Saved');
            setName('');
            setemail('');
            
        })
        .catch((err) => {
            console.log(err);
        })
        // console.log(name);
    }
    return (
        <div>
            <form className='flex items-center justify-center'>
                <label >Name</label>
                <input
                    className="w-48 border-gray-500	border"
                    type="text"
                    placeholder={'name'}
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <label>email</label>
                <input
                    className="w-48 border-gray-500	border"
                    type="text"
                    placeholder={'emaikl'}
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />
                <button type="submit" onClick={addData}>Insert</button>
            </form>
        </div>
    )
}
export default Insert;