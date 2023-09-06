import { storyblokEditable } from "@storyblok/react";

const Header = ({ blok }) => (
  <div className="bg-white h-12 flex items-center sm:justify-end px-2 gap-x-8" {...storyblokEditable(blok)}>
    <div className="flex flex-grow sm:hidden">
      <button type="button" className="h-6 w-6 mx-2">
        <img src={blok.menu.filename} />
      </button>
      <a href="" className="ml-2">
        <img className="h-6" src={blok.logo.filename} />
      </a>
    </div>
    <div className="hidden flex-grow-0 sm:flex gap-x-8">
      <a href="" className="hidden sm:block">About us</a>
      <a href="" className="hidden sm:block">Contact us</a>
    </div>
    <div className="flex flex-grow-0 items-center gap-x-4 sm:gap-x-8">
      <a href="" className="flex items-center gap-x-2">
        <img className="h-8 w-8"src={blok.profile.filename} />
        <span className="hidden sm:block">Log In / Register</span>
      </a>
      <a href="" className="flex items-center gap-x-2">
        <img className="h-8 w-8"src={blok.call.filename} />
        <span className="hidden sm:block">0112 345 6789</span>
      </a>
    </div>
  </div>
);

export default Header;
