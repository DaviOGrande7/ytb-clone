import React from 'react'
import ytbLogo from '../img/ytb-logo.png';
import search from '../img/search.png';
import icon from '../img/icon.png'

function NavBar() {
  return (
    <nav class="border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 flex flex-row justify-between">
      <div class="w-96 flex flex-row h-24">
        <button type="button" class="bg-gray-50 focus:outline-none hover:bg-gray-100 rounded-full text-sm px-2.5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <img src={ytbLogo} class="max-w-full h-full" alt="logo"/>
      </div>      
      <div class="w-2/5">
        <form class="mx-auto py-6">
          <div class="flex rounded-full border border-gray-300 overflow-hidden">
            <input type="text" class="rounded-none rounded-s-lg bg-gray-50 border-none focus:ring-gray-700 focus:border-gray-700 block flex-1 min-w-0 w-full text-base p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Pesquisa"/>
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border-l border-gray-300 dark:bg-gray-400 dark:text-gray-400 dark:border-white">
            <button><img class="size-7" src={search} alt="searchlupe"/></button>
            </span>
          </div>
        </form>
      </div>    
      <div class="w-96 py-2 flex flex-row-reverse">
        <button type="button" class="bg-gray-50 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-2.5 py-0 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <img class="w-10 h-10 rounded-full" src={icon} alt="Rounded avatar"/>
        </button>
        <button type="button" class="bg-gray-50 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-2.5 py-0 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"/>
          </svg>
        </button>
        <button type="button" class="bg-gray-50 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-2.5 py-0 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default NavBar