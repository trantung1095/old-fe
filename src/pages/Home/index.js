import images  from "@/assets/images";
import { FiSearch }  from "react-icons/fi";

function HomePage() {
    return ( 
        <div className="h-screen">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-end items-center m-10">
            <div>
              <a className="flex items-center border-light-gray min-w-48 min-h-48 px-6 border border-solid rounded-full" href="/">
                <span className="text-[black] text-[tiny] font-bold">Log in</span>
              </a>
            </div>
            <div className="ml-3">
              <a className="flex items-center bg-color-black border-black min-w-48 min-h-48 px-6 border border-solid rounded-full " href="/">
                <span className="text-white text-[tiny] font-bold">Sign up</span>
              </a>
            </div>
          </div>
          <div className="flex items-center flex-col mt-[25vh]">
            <div>
              <img className="h-16 mb-9" src={images.logo} alt="" />
            </div>
            <div className="min-h-120 max-w-480 w-full">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <FiSearch />
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Twitter"
                    required
                  />
                </div>
              </form>
            </div>       
          </div>
        </div>
      </div>
     );
}

export default HomePage;