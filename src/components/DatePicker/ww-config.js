export default {
  editor: {
    label: {
      en: "Date Picker",
      fr: "Sélecteur de date"
    },
    icon: "calendar",
    bubble: {
      icon: "calendar"
    }
  },

  triggerEvents: [
    {
      name: "change",
      label: { en: "On change", fr: "Au changement" },
      event: { value: "" },
      default: true
    }
  ],

  properties: {
    value: {
      label: { en: "Value", fr: "Valeur" },
      type: "Text",
      section: "settings",
      defaultValue: "",
      bindable: true
    },
    label: {
      label: { en: "Label", fr: "Libellé" },
      type: "Text",
      section: "settings",
      defaultValue: "",
      bindable: true
    },
    placeholder: {
      label: { en: "Placeholder", fr: "Placeholder" },
      type: "Text",
      section: "settings",
      defaultValue: "Pick a date",
      bindable: true
    },
    helperText: {
      label: { en: "Helper Text", fr: "Texte d'aide" },
      type: "Text",
      section: "settings",
      defaultValue: "",
      bindable: true
    },
    errorText: {
      label: { en: "Error Text", fr: "Texte d'erreur" },
      type: "Text",
      section: "settings",
      defaultValue: "",
      bindable: true
    },
    required: {
      label: { en: "Required", fr: "Requis" },
      type: "OnOff",
      section: "settings",
      defaultValue: false
    },
    disabled: {
      label: { en: "Disabled", fr: "Désactivé" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      bindable: true
    },
    min: {
      label: { en: "Min Date", fr: "Date min" },
      type: "Text",
      section: "settings",
      bindable: true
    },
    max: {
      label: { en: "Max Date", fr: "Date max" },
      type: "Text",
      section: "settings",
      bindable: true
    }
  }
};
