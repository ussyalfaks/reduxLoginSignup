import React from 'react'
import Navbar from '../app/UI/Navbar';
import ProfileUpdate from './ProfileUpdate';

const Dashboard = () => {
  return (
    <>

<Navbar />
      <div className="px-6 flex flex-col gap-5 py-10 h-[calc(100vh-96px)]  overflow-y-scroll">

        {/* Sidebar */}
        {/* <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div> */}

        {/* Main Content */}
          {/* Page content here */}

        <ProfileUpdate/>
        <div>usman</div>
        <div>usman</div>
        <div>usman</div>
        <div>usman</div>
        <div>usman</div>
        <div>usman</div>
        <div>usman</div>
        <div>usman</div>
        <div>usman</div>

        </div>
    

       
    </>
  )
}

export default Dashboard