class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const currentPage = window.location.pathname;
        const isHomePage = currentPage === '/' || currentPage.includes('index.html');

        this.innerHTML = `
            <nav class="container mx-auto px-4 sm:px-6 py-4 sticky top-0 bg-white border-b border-gray-200">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <a href="/" class="flex items-center space-x-2">
                            <img class="w-8 h-8 sm:w-10 sm:h-10" src="assets/images/brand/sphere.svg" alt="VividSphere Commerce">
                            <span class="text-lg sm:text-xl font-sora truncate">${isHomePage ? 'VividSphere Commerce' : 'VividSphere Commerce'}</span>
                        </a>
                    </div>
                    <div class="hidden sm:flex items-center space-x-8">
                        ${isHomePage ? `
                            <a href="better-b2b-shipping.html" class="text-gray-600 hover:text-gray-900">B2B Shipping</a>
                            <a href="contact.html" class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">Contact Us</a>
                        ` : `
                            <span class="text-gray-700 underline">B2B Shipping</span>
                            <a href="contact.html" class="shadow-sm border border-gray-200 rounded-full px-6 py-2 text-gray-700 hover:border-gray-300">Contact Us</a>
                        `}
                    </div>
                    <div class="sm:hidden">
                        <button onclick="this.closest('header-component').toggleMobileMenu()" class="p-2 text-gray-600 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="mobileMenu" class="hidden sm:hidden mt-4 pb-4">
                    ${isHomePage ? `
                        <a href="better-b2b-shipping.html" class="block py-2 text-gray-600 hover:text-gray-900">B2B Shipping</a>
                        <a href="contact.html" class="block mt-2 text-center bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">Contact Us</a>
                    ` : `
                        <span class="block py-2 text-gray-700 underline">B2B Shipping</span>
                        <a href="contact.html" class="block mt-2 text-center shadow-sm border border-gray-200 rounded-full px-6 py-2 text-gray-700 hover:border-gray-300">Contact Us</a>
                    `}
                </div>
            </nav>
        `;
    }

    toggleMobileMenu() {
        const mobileMenu = this.querySelector('#mobileMenu');
        mobileMenu.classList.toggle('hidden');
    }
}

customElements.define('header-component', Header);