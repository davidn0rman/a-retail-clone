import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Topbar = ({ blok }) => (
  <div className="bg-red h-12 flex items-center sm:justify-end px-2 gap-x-8" {...storyblokEditable(blok)}>
    <div className="flex flex-grow sm:hidden">
      <button type="button" className="h-6 w-6 mx-2">
        <img src={blok.menu.filename} />
      </button>
      <a href="" className="ml-2">
        <img className="h-6" src={blok.logo.filename} />
      </a>
    </div>
    <div className="hidden flex-grow-0 sm:flex gap-x-8">
      {blok.links.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div> 
    <div className="flex flex-grow-0 items-center gap-x-4 sm:gap-x-8">
      {blok.iconbutton.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  </div>
);

export default Topbar;
