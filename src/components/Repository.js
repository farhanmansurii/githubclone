import React from 'react';
const Repository = ({repo}) => {
  return (
    <a
    href={repo.html_url}
    target='_blank'
    className='shadow-lg  bg-stone-50 pt-0 rounded-lg m-2 w-1/3'>
        <div id="repository"  className='flex-row' >
            <div className='text-2xl m-5 g-4 '>{repo.name}</div>
            <div id='langused'>
                <ul className='flex justify-around  justify-items-center  mt-8 m-2 mb-4 '>
                    <li className='text-l bg-blue-200 p-2 rounded-lg'>
                     Javascript   
                    </li>
                    <li className=' text-l bg-blue-200 p-2 rounded-lg'>
                     Angular  
                    </li>
                    <li className='text-l bg-blue-200 p-2 rounded-lg'>
                     HTML   
                    </li>
                </ul>
            </div>
 
        </div>



    </a>
  )
}

export default Repository