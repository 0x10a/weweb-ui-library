# 🎨 WeWeb UI Library

Une bibliothèque de composants UI inspirée de Shadcn pour WeWeb avec un design system noir/neutre cohérent.

![Version](https://img.shields.io/badge/version-0.1.0-black)
![License](https://img.shields.io/badge/license-MIT-black)

## ✨ Caractéristiques

- 🎨 **Design Shadcn** - Palette de couleurs noir/neutre (pas bleu)
- ♿ **Accessible** - Focus rings, navigation clavier, ARIA labels
- 🎯 **Complet** - 8 composants couvrant tous les besoins de formulaires
- 🔗 **Bindable** - Toutes les props sont bindables dans WeWeb
- 📱 **Responsive** - Fonctionne sur tous les écrans
- 🌙 **Dark mode** - Support du mode sombre intégré

## 📦 Composants Disponibles

| Composant | Description | Variantes |
|-----------|-------------|-----------|
| **Button** | Boutons d'action | default, secondary, outline, ghost, destructive, link |
| **Input** | Champs de saisie | text, email, password, number, tel, url, search |
| **Textarea** | Zone de texte multiligne | Resize: none, vertical, horizontal, both |
| **Select** | Menu déroulant | Options configurables |
| **Checkbox** | Case à cocher | Simple avec label |
| **Radio** | Boutons radio | Vertical, horizontal |
| **Switch** | Interrupteur toggle | On/Off |
| **DatePicker** | Sélecteur de date | Avec validation min/max |

## 🚀 Installation

### Méthode 1: Via WeWeb (Recommandé)

1. Ouvrez votre projet WeWeb
2. Allez dans **Settings → Plugins**
3. Cliquez sur **Add Custom Element**
4. Entrez l'URL: `https://github.com/0x10a/weweb-ui-library`
5. Installez

### Méthode 2: Installation locale

```bash
cd c:\laragon\www\weweb\
git clone https://github.com/0x10a/weweb-ui-library.git
cd weweb-ui-library
npm install
npm run serve
```

## 💻 Utilisation dans WeWeb

1. **Ajouter un composant**
   - Cliquez sur "Add" dans l'éditeur
   - Cherchez "UI Library" dans les catégories
   - Glissez-déposez le composant souhaité

2. **Configurer les props**
   - Sélectionnez le composant
   - Panneau de droite → Settings
   - Modifiez les propriétés (label, placeholder, etc.)

3. **Binder des données**
   - Cliquez sur l'icône de binding (🔗)
   - Sélectionnez une variable ou collection
   - Le composant se met à jour automatiquement

## 📝 Exemples

### Button avec icône

```javascript
{
  label: "Créer un compte",
  variant: "default",
  size: "lg",
  icon: "lucide/user-plus",
  iconPosition: "left"
}
```

### Input avec validation

```javascript
{
  type: "email",
  label: "Email",
  placeholder: "nom@example.com",
  required: true,
  errorText: "Email invalide",
  icon: "lucide/mail"
}
```

### Select avec options dynamiques

```javascript
{
  label: "Pays",
  value: "{{user.country}}",
  options: "{{countries}}", // Collection bindée
  placeholder: "Sélectionnez un pays"
}
```

## 🎨 Personnalisation

### Design Tokens

Modifiez `src/styles/tokens.css` pour personnaliser les couleurs:

```css
:root {
  --primary: 0 0% 9%;        /* Noir pour les boutons */
  --destructive: 0 84% 60%;  /* Rouge pour les actions destructrices */
  --radius: 0.5rem;          /* Border radius */
}
```

### Mode Sombre

Ajoutez la classe `.dark` à l'élément racine pour activer le mode sombre:

```javascript
document.documentElement.classList.add('dark');
```

## 📚 Documentation Complète

Consultez [COMPONENTS.md](./COMPONENTS.md) pour:
- Props détaillées de chaque composant
- Exemples d'utilisation
- Guide de personnalisation
- Liste complète des events

## 🛠️ Développement

```bash
# Installer les dépendances
npm install

# Lancer en mode dev
npm run serve

# Build pour production
npm run build
```

## 🤝 Contribution

Les contributions sont les bienvenues ! 

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

MIT © [0x10a](https://github.com/0x10a)

## 🔗 Liens

- [Repository GitHub](https://github.com/0x10a/weweb-ui-library)
- [WeWeb](https://www.weweb.io)
- [Shadcn UI](https://ui.shadcn.com) (Inspiration design)

## ⭐ Support

Si cette bibliothèque vous est utile, n'hésitez pas à laisser une étoile sur GitHub !

---

**Note:** Cette bibliothèque est conçue spécifiquement pour WeWeb. Pour l'utiliser dans un projet Vue.js standard, des adaptations seront nécessaires.
