// types/tailwindcss.d.ts
declare module 'tailwindcss/lib/util/flattenColorPalette' {
    import { type ThemeConfig } from 'tailwindcss/types/config';
    const flattenColorPalette: (colors: ThemeConfig['colors']) => Record<string, string>;
    export default flattenColorPalette;
  }