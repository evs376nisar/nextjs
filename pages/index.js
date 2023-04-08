import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { database } from '@/firebase';
// import { db, app } from '../firebase';
import { addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { serverTimestamp, setDoc } from 'firebase/firestore';
const auth = getAuth();
export default function
  () {

    const router = useRouter();
    const id = router.query.id;
    const [ev, setEv] = useState({});
    // const event;
    
  // const router = useRouter();
  const [studentsData, setStudentsData] = useState([]);
  //  const [studentsData, setStudentsData] = useState([]);
  // const databaseRef = collection(database, 'Students');
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    
    getData();
    // useEffect(() => {
     
    //   // const event = getEventById(id);
    //   setEv(event);
    // })
  
  }, [])
  async function simpleSignin(e) {
    e.preventDefault();
    // console.log(email + password);
    try {
      // console.log("try");
      // alert(password);
      // alert(email);
      await signInWithEmailAndPassword(auth, email, password)
      console.log(" signInWithEmailAndPassword");
      //   localStorage.setItem(password, email);
      //   alert("login Successfull");
      //   router.push('/Dashboard');
    } catch (error) {
      alert("Something went wrong with Signing In" + error);
    }
  }
  const deleteField = async (id) => {
    let fieldToDelete = doc(database, 'Students', id);
    await deleteDoc(fieldToDelete)
      .then(() => {
        alert('Data Deleted')
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getData = async () => {

    await getDocs(collection(database, 'Students'))
      .then((response) => {
        setStudentsData(response.docs);
      })
  }
  return (
    <div>
      {
        studentsData.map((student) => {
          return (

            <div key={student.id} className='flex bg-red-500 w-screen max-w-[400px] p-2 px-6 gap-4 items-center justify-center' >
              <h2>Name</h2>
              <h2>Email</h2>
              <h2>{student.data().name}</h2>

              <h2>{student.data().email}</h2>
              <h2><button onClick={() => deleteField(student.id)}>Delete</button></h2>

              <h2><button onClick={() => router.push('/event/' + student?.id)}>update</button></h2>

            </div>
          )
        })}

      <form className="mt-8 space-y-6 p-10" >
        <input type="hidden" name="remember" value="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <input type="text"
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={'Email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            {/* <label for="email-address" class="sr-only">Email address</label> */}
          </div>
          <div>
            {/* <label for="password" >Password</label> */}
            <input type="password"
              placeholder={'Password'}
              value={password}
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>
        </div>

        {/* <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div> */}

        <div>
          <button onClick={simpleSignin} type="submit" className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {/* <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
              </svg> */}
            </span>
            login
          </button>
        </div>
      </form>
    </div>
  )
}
