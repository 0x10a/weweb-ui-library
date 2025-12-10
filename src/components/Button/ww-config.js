export default {
  editor: {
    label: {
      en: "Button",
      fr: "Bouton"
    },
    icon: "hand-pointer",
    bubble: {
      icon: "hand-pointer"
    }
  },

  triggerEvents: [
    {
      name: "click",
      label: { en: "On click", fr: "Au clic" },
      event: {},
      default: true
    }
  ],

  properties: {
    label: {
      label: { en: "Label", fr: "Libellé" },
      type: "Text",
      section: "settings",
      defaultValue: "Button",
      bindable: true
    },
    variant: {
      label: { en: "Variant", fr: "Variante" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "default", label: { en: "Default", fr: "Défaut" } },
          { value: "secondary", label: { en: "Secondary", fr: "Secondaire" } },
          { value: "outline", label: { en: "Outline", fr: "Contour" } },
          { value: "ghost", label: { en: "Ghost", fr: "Fantôme" } },
          { value: "destructive", label: { en: "Destructive", fr: "Destructif" } },
          { value: "link", label: { en: "Link", fr: "Lien" } }
        ]
      },
      defaultValue: "default"
    },
    size: {
      label: { en: "Size", fr: "Taille" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "sm", label: { en: "Small", fr: "Petit" } },
          { value: "default", label: { en: "Default", fr: "Défaut" } },
          { value: "lg", label: { en: "Large", fr: "Grand" } },
          { value: "icon", label: { en: "Icon", fr: "Icône" } }
        ]
      },
      defaultValue: "default"
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
    disabled: {
      label: { en: "Disabled", fr: "Désactivé" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      bindable: true
    },
    fullWidth: {
      label: { en: "Full Width", fr: "Pleine largeur" },
      type: "OnOff",
      section: "settings",
      defaultValue: false
    },
    loading: {
      label: { en: "Loading", fr: "Chargement" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      bindable: true
    }
  }
};
