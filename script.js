const companyLogosImageEl = document.getElementById("companyLogos");

// Function to change the image source based on the screen size
function changeImageSrc() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        // If the screen width is 768 pixels or larger, change the image source
        companyLogosImageEl.src = 'https://images.ctfassets.net/rz1oowkt5gyp/19rAABnbk8KNNuh3zJzsmr/210fb8ee51dea14595462f844b7c9beb/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg';
        companyLogosImageEl.alt = 'Desktop Image';
    } else {
        // If the screen width is less than 768 pixels, use the mobile image
        companyLogosImageEl.src = 'https://images.ctfassets.net/rz1oowkt5gyp/35UfB6LGcl6cd3y8K7VB3b/0748eb81ae166a7fb35288e6c413dabc/logos-3x3-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg';
        companyLogosImageEl.alt = 'Mobile Image';
    }
}

// Call the function initially to set the correct image source
changeImageSrc();

// Listen for window resize events and update the image source when the screen size changes
window.addEventListener('resize', changeImageSrc);
