import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';
import svgToDataUri from 'mini-svg-data-uri';
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ matchUtilities, theme }: PluginAPI) {
      matchUtilities(
        {
          'bg-dot': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function addVariablesForColors({ addBase, theme }: any) {
      const allColors = flattenColorPalette(theme('colors'));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ':root': newVars,
      });
    },
  ],
} satisfies Config;
