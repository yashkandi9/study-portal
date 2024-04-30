import React, {useState, useEffect} from 'react'
// import { getImageURL } from '../firebase';
import {ref, getDownloadURL} from 'firebase/storage'
import { firestore, storage} from '../firebase'
import pdflogo from '../assets/pdf_logo.png'



function DisplayCard(props) {
  const [url, setURL] = useState(null);

  useEffect(()=>{
        // const dat = props.fileURL
        const dat = getDownloadURL(ref(storage, props.fileURL))
        .then((url) => setURL(url));
    }, [])
  return (
    <div
        // key={index}
        className="text-white shadow-md rounded-lg overflow-hidden relative group">
          <div
              // key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <div>
                <h1 className="text-black m-5">{props.name}</h1>
              </div>
              
              <div>
              <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                <a className="text-white" href={url} alt="link">open</a>
              </button>
              </div>
            </div>
    </div>
)

}

export default DisplayCard
