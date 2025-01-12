class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-black text-white py-16 mt-20">
                <div class="container mx-auto px-6">
                    <div class="max-w-2xl">
                        <img src="assets/images/brand/sphere.svg" alt="VividSphere Commerce" class="h-8 mb-8">
                        <h2 class="text-3xl font-sora mb-6">Join our newsletter to stay up to date on features and releases.</h2>
                        
                        <form action="https://formspree.io/f/xlddzekj" method="POST" class="mb-4">
                            <div class="flex flex-col sm:flex-row gap-4">
                                <input type="email" name="email" placeholder="Enter your email" required
                                    class="flex-1 px-4 py-3 rounded-lg bg-white text-black">
                                <button type="submit" 
                                    class="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium whitespace-nowrap">
                                    Join now
                                </button>
                            </div>
                            <input type="hidden" name="form_type" value="newsletter">
                        </form>

                        <p class="text-gray-400 text-sm mb-16">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>

                        <div class="border-t border-gray-800 pt-8">
                            <p class="text-gray-300">Crafted with ❤️ in Canada.</p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer); 