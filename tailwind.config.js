const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        calc10: "calc(100vh - 10rem)",
        calc15: "calc(100vh - 15rem)",
      },
      width: {
      },
      minWidth: {
        calc: "calc(100vw - 36%)",
      },
      maxWidth: {
        calc: "max(75%, calc(100% - 260px))",
      },
      margin: {
        min: "min(25%, 260px)"
      }
    },
    colors: {
      new_orange: "#FF3B30",
      purple_light: "#E8E8FD",
      purple_dark: "#1A194D",

      gray_light: "#F8F8FF",
      gray_dark: "#C4C4C4",
      style: "#62618F"
    },
    fontFamily: {
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    nextui({
      prefix: "db",
      addCommonColors: true,
      defaultTheme: "dashboard",
      layout: {},
      ExtendVariantsOptions: {
        variants: {
          newOrange: "#FF3B30",
        }
      },
      themes:{
        "dashboard": {
          colors: {
            background: "E8E8FD",
            white: "#FFFFFF",
            default: "#FFFFFF",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#1A194D",
            },
            secondary: "#62618F",
            success: "#CBCBD9",
            warning: "##EE6338",
            danger: "#FF3B30",
            focus: "#FF3B30",
          },
          layout: {
          },
        },
      }
    }),
  ],
}
