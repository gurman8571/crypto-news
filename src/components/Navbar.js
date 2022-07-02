import {React,useState} from 'react'
import {Link} from 'react-router-dom'
import {Cryptostate} from '../Context'
export default function Navbar() {
  const {currency,setcurrency}=Cryptostate();
const [showlinks, setshowlinks] = useState(false);
    return (
   <div >
    <nav className="bg-gray-800 shadow-2xl w-full ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
           
                
              </button>
            </div>
            <div className="">
                 <Link to="/" className="font-extrabold  shadow-sm text-yellow-200 text-2xl cursor-pointer">Crypto News</Link>
              </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" role="menuitem" tabIndex={-1} id="user-menu-item-0">Home</Link>                 
                  <Link to="/About" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" role="menuitem" tabIndex={-1} id="user-menu-item-0">about</Link>                 
                 
                 
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                {/* Heroicon name: outline/bell */}
                     <select name="currency" id="currency" className="form-control text-white bg-gray-700 px-2 py-1 cursor-pointer border-white border-2 rounded-md"
                     onChange={(e)=>{setcurrency(e.target.value)}}
                     value={currency}
                     >
                     <option value="INR" className="text-white">INR</option>      
                     <option value="USD" className="text-white">USD</option>

                     </select>
               </button>
              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button type="button" className=" flex text-sm rounded-full sm:hidden w-full focus:outline-none text-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="mobile-menu" aria-expanded="false" aria-haspopup="true"
                  onClick={()=>{setshowlinks(!showlinks)}}
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
                  </button>
                </div>
                {/*
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          */}
                
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden w-full" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
        {showlinks? 
        <>
        <Link to="/" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" role="menuitem" tabIndex={-1} id="user-menu-item-0">Home</Link>                 
                  <Link to="/About" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" role="menuitem" tabIndex={-1} id="user-menu-item-0">About</Link>                 
                  </>
                 :
                 <p></p>
                 }
           
          </div>
        </div>
      </nav>
   </div>
  )
}
