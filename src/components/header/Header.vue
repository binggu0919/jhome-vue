<template>
    <nav id="header" class="w-full z-30 top-0 py-1">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
            
            <div class="order-1 md:order-1">
                <a class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">                    
                    JHome
                </a>
            </div>
            
            <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><router-link class="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/">Home</router-link></li>
                        <li><router-link class="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/aidata">AI Data</router-link></li>
                        <li><router-link class="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/webdata">Web Data</router-link></li>
                        <li><router-link class="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/About">About</router-link></li>
                    </ul>
                </nav>
            </div>                       
        </div>
    </nav>    
</template>