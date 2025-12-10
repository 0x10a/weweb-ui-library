export default {
  editor: {
    label: {
      en: "Select",
      fr: "Sélecteur"
    },
    icon: "chevron-down",
    bubble: {
      icon: "chevron-down"
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
    options: {
      label: { en: "Options", fr: "Options" },
      type: "Array",
      section: "settings",
      options: {
        item: {
          type: "Object",
          options: {
            item: {
              label: {
                type: "Text",
                label: { en: "Label", fr: "Libellé" }
              },
              value: {
                type: "Text",
                label: { en: "Value", fr: "Valeur" }
              }
            }
          }
        }
      },
      defaultValue: [
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" }
      ],
      bindable: true
    },
    placeholder: {
      label: { en: "Placeholder", fr: "Placeholder" },
      type: "Text",
      section: "settings",
      defaultValue: "Select an option",
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
    }
  }
};
