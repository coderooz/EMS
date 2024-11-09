import React from 'react'
import Headers from '../others/Headers'
import CreateTasks from '../others/CreateTasks'
import AllTasks from '../others/AllTasks'

const AdminDashboard = () => {
  return (
    <div className='p-10 h-screen w-full'>
        <Headers/>
        <CreateTasks/>
        <AllTasks/>
    </div>
  )
}

export default AdminDashboard
