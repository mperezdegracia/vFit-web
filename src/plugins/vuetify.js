import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#8B53FF",
          secondary: "#297D7D",
          contrast: "#EFEFEF",
        },
      },
    },
  },
});
