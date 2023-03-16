/** @type {import('tailwindcss').Config} */
// 主要进行扫描规则、主题、插件等配置 
module.exports = {
  content: ["./src/**/*.{vue,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  // add daisyui to the tailwindcss.config.js
  plugins: [require('daisyui')],
  // daisyui config
  daisyui: {
    styled: true, // 设置为true就会使用默认样式，false则组件没有颜色和可视化的样式
    themes: ["cupcake", "dark", "cmyk"],
    base: true,
    utils: true,
    logs: true,
    trl: true,
    prefix: "",
    darkTheme: "dark"
  },
}
