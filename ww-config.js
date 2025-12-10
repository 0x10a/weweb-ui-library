export default {
  name: "shadcn-theme",
  editor: {
    label: {
      en: "Shadcn Theme",
      fr: "Thème Shadcn"
    },
    icon: "palette",
    bubble: {
      icon: "palette"
    }
  },

  properties: {
    darkMode: {
      label: {
        en: "Dark Mode",
        fr: "Mode Sombre"
      },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      bindable: true
    },
    applyGlobally: {
      label: {
        en: "Apply to entire page",
        fr: "Appliquer à toute la page"
      },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
      bindable: true
    }
  },

  options: {
    autoByContent: true
  }
};
