import advertisement from "./advertisement";
import animation from "./animation";
import film from "./film";
import logo from "./logo";
import motionGraphics from "./motion-graphics";

const allWorksCombined = [
  ...advertisement,
  ...film,
  ...motionGraphics,
  ...animation,
  ...logo,
];

const videos = allWorksCombined.map((project, index) => ({
  ...project, // Copies all original properties (title, url, etc.)
  id: index   // Assigns the array index as the new unique ID
}));

export {advertisement, animation, film, logo, motionGraphics};

export default videos;
