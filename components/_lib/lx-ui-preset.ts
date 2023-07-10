// lx-ui tailwindcss preset
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        "lx-color-fill-2": "#F2F3F5",
        "lx-color-fill-3": "#E5E6EB",
      },
      colors: {
        "lx-color-text-1": "#1D2129",
        "lx-color-text-2": "",
        "lx-color-text-3": "#86909C",
        "lx-color-text-4": "#C9CDD4",
      },
      keyframes: {
        "lx-select-open": {
          "0%": { transform: "translate3d(0,-10%,0)", opacity: 0 },
          "100%": { transform: "translateZ(0)", opacity: 1 },
        },
        "lx-select-closed": {
          "0%": { transform: "translateZ(0)", opacity: 1 },
          "100%": { transform: "translate3d(0,-10%,0)", opacity: 0 },
        },
        "lx-fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "lx-fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "lx-modal-fade-in-up": {
          "0%": {
            transform: "translateX(-50%) translateY(-50%) translate3d(0,8%,0)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(-50%) translateY(-50%) translateZ(0)",
            opacity: 1,
          },
        },
        "lx-modal-fade-out-down": {
          "0%": {
            transform: "translateX(-50%) translateY(-50%) translateZ(0)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(-50%) translateY(-50%) translate3d(0,8%,0)",
            opacity: 0,
          },
        },
      },
      animation: {
        "lx-select-open": "lx-select-open 0.2s ease-in-out",
        "lx-select-closed": "lx-select-closed 0.2s ease-in-out",
        "lx-fade-in": "lx-fade-in 0.2s ease-in-out",
        "lx-fade-out": "lx-fade-out 0.2s ease-in-out",
        "lx-modal-fade-in-up": "lx-modal-fade-in-up 0.2s ease-in-out",
        "lx-modal-fade-out-down": "lx-modal-fade-out-down 0.2s ease-in-out",
      },
    },
  },
};
