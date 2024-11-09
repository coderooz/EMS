import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className="h-[55%] flex items-center justify-start gap-5 overflow-x-auto flex-nowrap py-5 w-full mt-10 ">
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm font-semibold'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold capitalize'>make a programm</h2>
            <p className='text-sm  mt-2'>
                Reprehenderit nulla quis culpa pariatur. Nulla reprehenderit nulla aute amet aliqua consequat Lorem. Culpa qui quis officia fugiat et exercitation aliquip enim nostrud ea est consequat aliquip.
            </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm font-semibold'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold capitalize'>make a programm</h2>
            <p className='text-sm  mt-2'>
                Reprehenderit nulla quis culpa pariatur. Nulla reprehenderit nulla aute amet aliqua consequat Lorem. Culpa qui quis officia fugiat et exercitation aliquip enim nostrud ea est consequat aliquip.
            </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm font-semibold'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold capitalize'>make a programm</h2>
            <p className='text-sm  mt-2'>
                Reprehenderit nulla quis culpa pariatur. Nulla reprehenderit nulla aute amet aliqua consequat Lorem. Culpa qui quis officia fugiat et exercitation aliquip enim nostrud ea est consequat aliquip.
            </p>
        </div>
        
    </div>
  )
}

export default TaskList
