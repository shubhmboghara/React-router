import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data = useLoaderData()
  
 //useLoaderData in React Router v6 loads data before rendering a route. It fetches data in a loader function and makes it available in the component, improving performance and
  
  return (
     <div className='text-center bg-purple-600   '>

    <div className="flex justify-center">
        <img src={data.avatar_url}  alt="github" srcset=""  className=' w-20 p-1 m-1 '/>


    </div>

     <h1 className='text-2xl font-bold'>{data.name}</h1>
     <div>Github Followers: {data.followers}</div>

    </div>
  )
}
export const Githubinfoloader = async () => { 
   const res = await fetch('https://api.github.com/users/shubhmboghara')

   if (!res.ok) throw new Error("Failed to fetch GitHub data")
   return res.json()

 }
 export default Github;

