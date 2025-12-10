export default {
  editor: {
    label: {
      en: "Textarea",
      fr: "Zone de texte"
    },
    icon: "align-left",
    bubble: {
      icon: "align-left"
    }
  },

  triggerEvents: [
    {
      name: "input",
      label: { en: "On input", fr: "À la saisie" },
      event: { value: "" },
      default: true
    },
    {
      name: "change",
      label: { en: "On change", fr: "Au changement" },
      event: { value: "" }
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
    placeholder: {
      label: { en: "Placeholder", fr: "Placeholder" },
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
    rows: {
      label: { en: "Rows", fr: "Lignes" },
      type: "Number",
      section: "settings",
      defaultValue: 4,
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
    readonly: {
      label: { en: "Read only", fr: "Lecture seule" },
      type: "OnOff",
      section: "settings",
      defaultValue: false
    },
    resize: {
      label: { en: "Resize", fr: "Redimensionner" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "none", label: { en: "None", fr: "Aucun" } },
          { value: "vertical", label: { en: "Vertical", fr: "Vertical" } },
          { value: "horizontal", label: { en: "Horizontal", fr: "Horizontal" } },
          { value: "both", label: { en: "Both", fr: "Les deux" } }
        ]
      },
      defaultValue: "vertical"
    }
  }
};
