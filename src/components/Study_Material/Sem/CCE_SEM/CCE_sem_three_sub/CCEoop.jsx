import React, { useEffect, useState } from 'react'
import { firestore, storage } from '../../../../../firebase'
import { ref, getDownloadURL } from 'firebase/storage'
// import { firestore, storage } from '../../../../../firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import Displaycard from '../../../../DisplayCard'


function CCEoop() {

  const [img, setImg] = useState([]);
  const [datais, setDatais] = useState(null);

    const fetchSubfile = async () => {
        const collectionRef = collection(firestore, "studymaterial")
        const q = query(collectionRef, where("subName", "==", "OOP"))

        const result = await getDocs(q)
        console.log(result.docs[0].data());
        if(result.docs[0].data() != null)
          {
            setDatais(true);
          }
        else{
          setDatais(false);
        }
        return result.docs;
    }
    // const oopfile = fetchSubfile();
    useEffect(() => {
        const fetchData = async () =>{
            const data = await fetchSubfile();
            setImg(data);
        }
        // } getDocs(oopfile)
        //     .then((image) => {
        //         setImg(image.docs)
        //         // console.log(image.docs[0].data())
        //         }
        //     );
        fetchData();
    }, [])

  return (
    <div>
      <div>
        {
          img.map((i, index) => (
            <Displaycard key={index} {...i.data()} />
          ))}
      </div>
      <div className='p-5 m-5'>
        <p>No more Data</p>
      </div>
    </div>
  )
}

export default CCEoop

