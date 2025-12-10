export default {
  editor: {
    label: {
      en: "Input",
      fr: "Champ de saisie"
    },
    icon: "text-cursor-input",
    bubble: {
      icon: "text-cursor-input"
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
    },
    {
      name: "focus",
      label: { en: "On focus", fr: "Au focus" },
      event: {}
    },
    {
      name: "blur",
      label: { en: "On blur", fr: "À la perte de focus" },
      event: {}
    }
  ],

  properties: {
    value: {
      label: { en: "Value", fr: "Valeur" },
      type: "Text",
      section: "settings",
      defaultValue: "",
      bindable: true,
      bindingValidation: {
        validations: [
          {
            type: "string"
          },
          {
            type: "number"
          }
        ],
        tooltip: "A string or number value"
      }
    },
    type: {
      label: { en: "Type", fr: "Type" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "text", label: { en: "Text", fr: "Texte" } },
          { value: "email", label: { en: "Email", fr: "Email" } },
          { value: "password", label: { en: "Password", fr: "Mot de passe" } },
          { value: "number", label: { en: "Number", fr: "Nombre" } },
          { value: "tel", label: { en: "Tel", fr: "Téléphone" } },
          { value: "url", label: { en: "URL", fr: "URL" } },
          { value: "search", label: { en: "Search", fr: "Recherche" } }
        ]
      },
      defaultValue: "text"
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
    icon: {
      label: { en: "Icon", fr: "Icône" },
      type: "Icon",
      section: "settings",
      bindable: true
    },
    iconPosition: {
      label: { en: "Icon Position", fr: "Position icône" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "left", label: { en: "Left", fr: "Gauche" } },
          { value: "right", label: { en: "Right", fr: "Droite" } }
        ]
      },
      defaultValue: "left",
      hidden: (content) => !content.icon
    },
    // Number specific
    min: {
      label: { en: "Min", fr: "Min" },
      type: "Number",
      section: "settings",
      bindable: true,
      hidden: (content) => content.type !== 'number'
    },
    max: {
      label: { en: "Max", fr: "Max" },
      type: "Number",
      section: "settings",
      bindable: true,
      hidden: (content) => content.type !== 'number'
    },
    step: {
      label: { en: "Step", fr: "Pas" },
      type: "Number",
      section: "settings",
      bindable: true,
      defaultValue: 1,
      hidden: (content) => content.type !== 'number'
    }
  }
};
