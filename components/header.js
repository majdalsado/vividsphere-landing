class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const currentPage = window.location.pathname;
        const isHomePage = currentPage === '/' || currentPage.includes('index.html');

        this.innerHTML = `
            <nav class="container mx-auto px-6 py-4 sticky top-0 bg-white border-b border-gray-200">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <a href="/" class="flex items-center space-x-2">
                            <img class="w-10 h-10" src="assets/images/brand/sphere.svg" alt="VividSphere">
                            <span class="text-xl font-sora">${isHomePage ? 'VividSphere Technologies' : 'VividSphere Commerce'}</span>
                        </a>
                    </div>
                    <div class="flex items-center space-x-8">
                        ${isHomePage ? `
                            <a href="better-b2b-shipping.html" class="text-gray-600 hover:text-gray-900">B2B Shipping</a>
                            <a href="#contact" class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">Contact Us</a>
                        ` : `
                            <span class="text-gray-700 underline">B2B Shipping</span>
                            <a href="#" class="shadow-sm border border-gray-200 rounded-full px-6 py-2 text-gray-700 hover:border-gray-300">Learn more</a>
                        `}
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('header-component', Header);