export default {
  editor: {
    label: {
      en: "Radio Group",
      fr: "Groupe radio"
    },
    icon: "circle-dot",
    bubble: {
      icon: "circle-dot"
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
      label: { en: "Selected Value", fr: "Valeur sélectionnée" },
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
    disabled: {
      label: { en: "Disabled", fr: "Désactivé" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      bindable: true
    },
    orientation: {
      label: { en: "Orientation", fr: "Orientation" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "vertical", label: { en: "Vertical", fr: "Vertical" } },
          { value: "horizontal", label: { en: "Horizontal", fr: "Horizontal" } }
        ]
      },
      defaultValue: "vertical"
    }
  }
};
