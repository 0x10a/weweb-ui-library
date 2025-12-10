export default {
  editor: {
    label: {
      en: "Switch",
      fr: "Interrupteur"
    },
    icon: "toggle-left",
    bubble: {
      icon: "toggle-left"
    }
  },

  triggerEvents: [
    {
      name: "change",
      label: { en: "On change", fr: "Au changement" },
      event: { checked: false },
      default: true
    }
  ],

  properties: {
    checked: {
      label: { en: "Checked", fr: "Activé" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      bindable: true
    },
    label: {
      label: { en: "Label", fr: "Libellé" },
      type: "Text",
      section: "settings",
      defaultValue: "Enable notifications",
      bindable: true
    },
    disabled: {
      label: { en: "Disabled", fr: "Désactivé" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      bindable: true
    }
  }
};
