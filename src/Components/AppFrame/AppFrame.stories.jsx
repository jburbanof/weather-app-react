import React from "react";
import AppFrame from "./AppFrame";
import { BrowserRouter as Router } from "react-router-dom";
export default {
  title: "AppFrame",
  component: AppFrame,
};

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium iusto consequuntur voluptate. Quo hic consequatur ipsum doloremque porro quae, harum nesciunt illo? Perferendis unde dicta quam doloremque suscipit dolorum rem! Tempora sequi, dignissimos labore nemo numquam ullam quisquam officiis minus animi, adipisci libero, possimus aspernatur enim fugit sint ipsum?
    </AppFrame>
  </Router>
);
