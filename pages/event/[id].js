import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { database } from '@/firebase';
export default function Event() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const id = router.query.id;
    console.log(id);
    const [ev, setEv] = useState({});
    const updateFields = async (e) => {
       e.preventDefault();
        let fieldToEdit = doc(database, 'Students', id);
        await updateDoc(fieldToEdit, {
            email: email,
            password: password
        })
            .then(() => {
                alert('Data Updated')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <form class="mt-8 space-y-6 p-10">
                {/* <input type="hidden" name="remember" value="true" /> */}
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input type="text"
                            placeholder={'enter email'}
                            value={email}
                            class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setEmail(e.target.value)}

                        /> </div>
                    <div>
                        {/* <label for="password" >Password</label> */}
                        <input type="text"
                            class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder={'enter password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>
                </div>



                <div>
                    <button onClick={updateFields} type="submit" class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        login
                    </button>
                </div>
            </form>
        </div>
    )
}
