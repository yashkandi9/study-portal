import React, { useState } from 'react'
import {firestore, storage} from '../firebase'
import {collection, addDoc} from 'firebase/firestore'
import {ref, uploadBytes} from 'firebase/storage'
import { useNavigate } from 'react-router-dom'


function List() {
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [branchName, setBranchName] = useState('')
  const [semester, setSemester] = useState('')
  const [subName, setSubName] = useState('')
  const [coverPic, setCoverPic] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `"studymaterial"/${branchName}/${semester}/${subName}/${Date.now()}-${coverPic.name}`)
    const uploadresult =  await uploadBytes(imageRef, coverPic);
    await addDoc(collection(firestore, "studymaterial"), {
      name,
      branchName,
      semester,
      subName,
      fileURL: uploadresult.ref.fullPath
    })
    .then(async(res) => {
      alert("File Uploaded");
      // navigate('/')
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  return (
    <form onSubmit={handleSubmit} class="max-w-md mx-auto m-20">
      <div>
        <h1>Upload Documents</h1>
      </div>
      <div class="relative z-0 w-full mb-5 group ">
        <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
          placeholder="Enter File Name" required />
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={(e) => {
            setBranchName(e.target.value)
          }}
          value={branchName}
          placeholder="Enter Branch Name" required />
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={(e) => {
            setSemester(e.target.value)
          }}
          value={semester}
          placeholder="Enter Semester No." required />
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={(e) => {
            setSubName(e.target.value)
          }}
          value={subName}
          placeholder="Enter Sub Name" required />
      </div>

      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 " for="user_avatar">Upload file - Select a Cover Picture</label>
        <input class="block p-1 mb-4 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none" aria-describedby="user_avatar_help" id="user_avatar"
          onChange={(e) => {
            setCoverPic(e.target.files[0])
          }}
          type="file" />
      </div>

      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add</button>
    </form>

  )
}

export default List
