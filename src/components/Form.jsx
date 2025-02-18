import React, { useState } from 'react'
import {getPost,deletePost, postData } from '../api/PostApi'

export const Form = ({data,setData}) => {
    const [addData, setAddData] = useState({
        title:'',
        body:'',
    })
    const handleInputData = (e) =>{
     const name = e.target.name
     const value = e.target.value

     setAddData((prev) =>{
        return{
            ...prev,
            [name]:value,
        }

     })
 
    }
    const addPostData =async() =>{
    const res =  await postData(addData)
    console.log("res= ",res);
    
    if (res.status === 201){
        setData([...data,res.data])
        setAddData({title:"", body:""})
    } 
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        addPostData()
    }
  return (

    <div className="border border-black bg-gray-800 px-4 py-5 rounded-lg w-[400px] mx-auto">
      <form className="flex space-x-3" onSubmit={handleFormSubmit}>
       
        <input 
          type="text" 
          id="title" 
          placeholder="Add Title" 
          name="title" 
          className="p-2 w-1/3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={addData.title}
          onChange={handleInputData}
        />

        <input 
          type="text" 
          id="body" 
          placeholder="Add Post" 
          name="body" 
          className="p-2 w-1/2 rounded-md bg-gray-700 text-white border
           border-gray-600 focus:outline-none focus:ring-2
           focus:ring-blue-500"
          value={addData.body}
          onChange={handleInputData}
        />

        <button 
          type="submit" 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold"
        >
          ADD
        </button>
      </form>
    </div>
  )
}
