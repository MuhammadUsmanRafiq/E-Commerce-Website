import React from 'react';

// Import images
import logoColored from '../assets/logo-colored.png';
import appStoreButton from '../assets/market-button.png';
import googlePlayButton from '../assets/Group.png';
import usFlag from '../assets/US@2x.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-10 px-4 font-sans">
      {/* Top Footer Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 pb-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <img src={logoColored} alt="Brand Logo" className="h-8" />
          <p className="text-gray-600 text-sm leading-relaxed">
            Best information about the company goes here but now lorem ipsum is
          </p>
          <div className="flex space-x-3">
            {/* Social Media Icons */}
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400 transition-colors">
              {/* Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.953H10.5a.75.75 0 0 0-.75.75v1.64h2.213l-.351 2.222H10.5V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400 transition-colors">
              {/* Twitter */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.025 4.373A3.237 3.237 0 0 1 1.6 6.095v.04c0 3.515 2.613 6.43 6.004 7.063a3.248 3.248 0 0 1-1.504.057 3.25 3.25 0 0 0 3.01 2.28z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400 transition-colors">
              {/* LinkedIn */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542V13.394h2.401zm-1.2-5.928c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 5.928V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634V13.394H14V9.09c0-1.767-.945-2.521-2.14-2.521-1.14 0-1.702.767-1.965 1.371v-.01h-.01c-.065.1-.129.219-.186.338H7.354V6.169h-.001z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400 transition-colors">
              {/* Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.269.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.509.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.297-.048c.852-.04 1.433-.174 1.942-.372.526-.205.972-.478 1.417-.923.445-.444.719-.89.923-1.416.198-.509.333-1.09.372-1.942.038-.852.048-1.125.048-3.297 0-2.172-.01-2.444-.048-3.297-.04-.852-.174-1.433-.372-1.942A3.917 3.917 0 0 0 13.24 1.26a3.927 3.927 0 0 0-1.417-.923c-.509-.198-1.09-.333-1.942-.372C10.444.01 10.172 0 8 0z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400 transition-colors">
              {/* YouTube */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.037 4.477.046 5.59.058.42.007.796.07.965.174.21.125.375.26.478.413.15.22.241.494.292.893C15.918 5.472 16 7.002 16 8s-.082 2.528-.147 3.362c-.05.399-.142.673-.292.893a.945.945 0 0 1-.478.413c-.169.104-.545.167-.965.174-1.114.012-4.77.021-5.59.058h-.089c-.822-.037-4.477-.046-5.59-.058-.42-.007-.796-.07-.965-.174-.21-.125-.375-.26-.478-.413-.15-.22-.241-.494-.292-.893C.082 10.528 0 8.998 0 8s.082-2.528.147-3.362c.05-.399.142-.673.292-.893a.945.945 0 0 1 .478-.413c.169-.104.545-.167.965-.174C3.324 2.05 6.979 2.042 7.801 1.999h.05ZM4.5 7.619v1.763L10.5 8 4.5 7.619Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">About</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Find store</a></li>
            <li><a href="#" className="hover:text-blue-600">Categories</a></li>
            <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
          </ul>
        </div>

        {/* Partnership */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Partnership</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Find store</a></li>
            <li><a href="#" className="hover:text-blue-600">Categories</a></li>
            <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Information</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600">Money Refund</a></li>
            <li><a href="#" className="hover:text-blue-600">Shipping</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
          </ul>
        </div>

        {/* For users */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">For users</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600">Login</a></li>
            <li><a href="#" className="hover:text-blue-600">Register</a></li>
            <li><a href="#" className="hover:text-blue-600">Settings</a></li>
            <li><a href="#" className="hover:text-blue-600">My Orders</a></li>
          </ul>
        </div>

        {/* Get app */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Get app</h3>
          <div className="space-y-3">
            <a href="#" className="block">
              <img src={appStoreButton} alt="App Store" className="h-10 w-auto" />
            </a>
            <a href="#" className="block">
              <img src={googlePlayButton} alt="Google Play" className="h-10 w-auto" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-100 mt-4 py-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 px-4">
          <p className="mb-2 sm:mb-0">© 2023 Ecommerce.</p>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                backgroundImage: `url(${usFlag})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left 8px center',
                backgroundSize: '20px'
              }}
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
