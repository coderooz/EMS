import React from 'react'

const CreateTasks = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='capitalize text-sm text-grey-300 mb-0.5' >Task Title</h3>
                        <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-grey-400 mb-4' type='text' placeholder='Project Name'/>
                    </div>
                    <div>
                        <h3 className='capitalize text-sm text-grey-300 mb-0.5'>Date</h3>
                        <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-grey-400 mb-4' type='date' placeholder=''/>
                    </div>
                    <div>
                        <h3 className='capitalize text-sm text-grey-300 mb-0.5'>Asign too</h3>
                        <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-grey-400 mb-4' type="text" placeholder=''/>
                    </div>
                    <div>
                        <h3 className='capitalize text-sm text-grey-300 mb-0.5'>Category</h3>
                        <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-grey-400 mb-4' type="text" placeholder='Design, Dev, etc'/>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                    <h3 className='capitalize text-sm text-grey-300 mb-0.5'>Description</h3>
                    <textarea className='h-44 w-full text-sm py-5 px-4 outline-none bg-transparent rounded border-[1px] border-grey-400' placeholder='Enter Description' cols="30" rows="5"></textarea>
                    <button className='bg-purple-500 py-3 hover:bg-purple-700 text-white font-semibold p-3 rounded mt-5 w-full'>Asign task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTasks
