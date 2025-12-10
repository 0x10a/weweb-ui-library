# 🎨 Shadcn Theme Provider for WeWeb

Un composant WeWeb qui applique automatiquement les styles Shadcn à **tous les éléments HTML natifs** de votre page.

![Version](https://img.shields.io/badge/version-0.1.0-black)
![License](https://img.shields.io/badge/license-MIT-black)

## ✨ Pourquoi utiliser ce composant ?

Au lieu de créer des composants personnalisés pour chaque élément UI, ce **Theme Provider** applique les styles Shadcn directement aux éléments HTML natifs :

- ✅ `<button>` → Style Shadcn automatique
- ✅ `<input>` → Style Shadcn automatique  
- ✅ `<select>` → Style Shadcn automatique
- ✅ `<textarea>` → Style Shadcn automatique
- ✅ `<checkbox>` → Style Shadcn automatique
- ✅ `<radio>` → Style Shadcn automatique

**Résultat :** Tous vos formulaires HTML ont le style Shadcn **sans aucun travail supplémentaire** !

## 🚀 Installation

### Via WeWeb

1. Ouvrez votre projet WeWeb
2. Allez dans **Settings → Plugins**
3. Cliquez sur **Add Custom Element**
4. Entrez l'URL: `https://github.com/0x10a/weweb-ui-library`
5. Installez

## 💻 Utilisation

### 1. Ajouter le composant à votre page

1. Dans l'éditeur WeWeb, cliquez sur **"Add"**
2. Cherchez **"Shadcn Theme"**
3. Glissez-déposez sur votre page (généralement à la racine)

### 2. Configuration

Le composant a 2 options :

| Propriété | Description | Valeur par défaut |
|-----------|-------------|-------------------|
| **Dark Mode** | Active le mode sombre | `false` |
| **Apply to entire page** | Applique les styles globalement | `true` |

### 3. C'est tout ! 

Maintenant, tous vos éléments HTML (`<button>`, `<input>`, `<select>`, etc.) ont automatiquement le style Shadcn !

## 📝 Exemples

### Boutons

```html
<!-- HTML natif -->
<button>Cliquez-moi</button>
<button class="secondary">Secondaire</button>
<button class="outline">Contour</button>
<button class="ghost">Ghost</button>
<button class="destructive">Supprimer</button>
<button class="link">Lien</button>
```

**Résultat :** Tous les boutons ont le style Shadcn automatiquement !

### Inputs

```html
<!-- HTML natif -->
<input type="text" placeholder="Nom" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Mot de passe" />
```

**Résultat :** Tous les inputs ont le style Shadcn avec focus ring !

### Select

```html
<!-- HTML natif -->
<select>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

**Résultat :** Select avec l'icône chevron et le style Shadcn !

### Checkbox & Radio

```html
<!-- HTML natif -->
<label>
  <input type="checkbox" />
  J'accepte les conditions
</label>

<label>
  <input type="radio" name="choice" />
  Choix 1
</label>
```

**Résultat :** Checkbox et radio avec le style Shadcn personnalisé !

## 🎨 Classes CSS disponibles

Le Theme Provider ajoute aussi des classes utilitaires :

| Classe | Description |
|--------|-------------|
| `.card` | Carte avec bordure et padding |
| `.text-muted` | Texte en couleur muted |
| `.text-destructive` | Texte en rouge destructif |
| `.border` | Bordure Shadcn |
| `.bg-primary` | Fond noir primaire |
| `.bg-secondary` | Fond gris secondaire |
| `.bg-muted` | Fond gris muted |
| `.bg-accent` | Fond accent |

## 🌙 Mode Sombre

Pour activer le mode sombre :

1. Sélectionnez le composant **Shadcn Theme** sur votre page
2. Dans le panneau de droite → Settings
3. Activez **Dark Mode**

Vous pouvez aussi binder cette propriété à une variable pour un toggle dynamique !

## 🔧 Compatibilité WeWeb

Ce composant **n'affecte PAS** les éléments WeWeb natifs (ceux avec `ww-` dans le nom de classe). Vos composants WeWeb existants continuent de fonctionner normalement.

## 📚 Design Tokens

Le Theme Provider utilise les tokens CSS Shadcn standard :

```css
--primary: 0 0% 9%;           /* Noir */
--secondary: 0 0% 96.1%;      /* Gris clair */
--destructive: 0 84.2% 60.2%; /* Rouge */
--border: 0 0% 89.8%;         /* Bordure */
--input: 0 0% 89.8%;          /* Input */
--ring: 0 0% 3.9%;            /* Focus ring */
--radius: 0.5rem;             /* Border radius */
```

## 🛠️ Développement Local

```bash
# Installer les dépendances
npm install

# Lancer en mode dev
npm run serve

# Build pour production
npm run build
```

## 💡 Cas d'usage

### ✅ Idéal pour :
- Prototyper rapidement avec des formulaires HTML
- Uniformiser le style de tous les éléments HTML d'une page
- Appliquer Shadcn sans créer de composants personnalisés
- Avoir un design system cohérent en 2 clics

### ❌ Pas idéal pour :
- Si vous voulez un contrôle total sur chaque élément
- Si vous avez déjà beaucoup de CSS personnalisé

## 📄 Licence

MIT © [0x10a](https://github.com/0x10a)

## 🔗 Liens

- [Repository GitHub](https://github.com/0x10a/weweb-ui-library)
- [WeWeb](https://www.weweb.io)
- [Shadcn UI](https://ui.shadcn.com)

---

**Astuce :** Placez le composant à la racine de votre page pour que les styles s'appliquent à tous les éléments enfants !
