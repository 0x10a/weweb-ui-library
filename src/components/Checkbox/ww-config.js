export default {
  editor: {
    label: {
      en: "Checkbox",
      fr: "Case à cocher"
    },
    icon: "check-square",
    bubble: {
      icon: "check-square"
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
      label: { en: "Checked", fr: "Coché" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      bindable: true
    },
    label: {
      label: { en: "Label", fr: "Libellé" },
      type: "Text",
      section: "settings",
      defaultValue: "Accept terms and conditions",
      bindable: true
    },
    helperText: {
      label: { en: "Helper Text", fr: "Texte d'aide" },
      type: "Text",
      section: "settings",
      defaultValue: "",
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
