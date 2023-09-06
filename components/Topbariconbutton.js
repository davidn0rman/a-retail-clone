import { storyblokEditable } from "@storyblok/react";

const Topbariconbutton = ({ blok }) => (
  <a href="" className="flex items-center gap-x-2" {...storyblokEditable(blok)}>
    <img className="h-8 w-8"src={blok.icon.filename} />
    <span className="hidden sm:block">{blok.label}</span>
  </a>
);

export default Topbariconbutton;
