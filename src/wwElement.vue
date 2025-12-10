<template>
  <div class="shadcn-theme-provider" :class="{ 'dark': content.darkMode }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ShadcnThemeProvider',
  props: {
    content: { type: Object, required: true }
  },
  mounted() {
    this.injectGlobalStyles();
    this.applyDarkMode();
  },
  watch: {
    'content.darkMode'(newValue) {
      this.applyDarkMode();
    }
  },
  methods: {
    applyDarkMode() {
      if (this.content.darkMode) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }
    },
    injectGlobalStyles() {
      // Vérifier si les styles sont déjà injectés
      const existingStyle = document.getElementById('shadcn-global-styles');
      if (existingStyle) {
        console.log('Shadcn Theme: Styles already injected');
        return;
      }

      const styleElement = document.createElement('style');
      styleElement.id = 'shadcn-global-styles';
      styleElement.textContent = this.getGlobalCSS();
      document.head.appendChild(styleElement);
      
      console.log('Shadcn Theme: Global styles injected successfully');
      console.log('Affected elements:', document.querySelectorAll('button:not([class*="ww-"]):not([class*="wwobject"])').length, 'buttons');
    },
    getGlobalCSS() {
      return `
/* Shadcn Global Styles - Injected by Theme Provider */
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 0 0% 3.9%;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 0 0% 9%;
  --secondary: 0 0% 14.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 14.9%;
  --muted-foreground: 0 0% 63.9%;
  --accent: 0 0% 14.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 14.9%;
  --input: 0 0% 14.9%;
  --ring: 0 0% 83.1%;
}

/* Buttons */
button:not([class*="ww-"]):not([class*="wwobject"]) {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.5rem !important;
  white-space: nowrap !important;
  border-radius: var(--radius) !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  cursor: pointer !important;
  padding: 0.5rem 1rem !important;
  height: 2.5rem !important;
  background: hsl(var(--primary)) !important;
  color: hsl(var(--primary-foreground)) !important;
  border: none !important;
  outline: none !important;
}

button:not([class*="ww-"]):not([class*="wwobject"]):hover:not(:disabled) {
  opacity: 0.9 !important;
}

button:not([class*="ww-"]):not([class*="wwobject"]):focus-visible {
  outline: 2px solid hsl(var(--ring)) !important;
  outline-offset: 2px !important;
}

button:not([class*="ww-"]):not([class*="wwobject"]):disabled {
  pointer-events: none !important;
  opacity: 0.5 !important;
}

/* Button Variants */
button.secondary {
  background: hsl(var(--secondary)) !important;
  color: hsl(var(--secondary-foreground)) !important;
}

button.outline {
  background: transparent !important;
  border: 1px solid hsl(var(--input)) !important;
  color: hsl(var(--foreground)) !important;
}

button.ghost {
  background: transparent !important;
  color: hsl(var(--foreground)) !important;
}

button.ghost:hover:not(:disabled) {
  background: hsl(var(--accent)) !important;
  opacity: 1 !important;
}

button.destructive {
  background: hsl(var(--destructive)) !important;
  color: hsl(var(--destructive-foreground)) !important;
}

button.link {
  background: transparent !important;
  color: hsl(var(--primary)) !important;
  text-decoration: underline !important;
  text-underline-offset: 4px !important;
  padding: 0 !important;
  height: auto !important;
}

/* Inputs */
input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"]):not([class*="wwobject"]),
textarea:not([class*="ww-"]):not([class*="wwobject"]),
select:not([class*="ww-"]):not([class*="wwobject"]) {
  display: flex !important;
  width: 100% !important;
  border-radius: var(--radius) !important;
  border: 1px solid hsl(var(--input)) !important;
  background: hsl(var(--background)) !important;
  padding: 0.5rem 0.75rem !important;
  font-size: 14px !important;
  transition: all 0.2s !important;
  outline: none !important;
  color: hsl(var(--foreground)) !important;
}

input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"]):not([class*="wwobject"]):focus,
textarea:not([class*="ww-"]):not([class*="wwobject"]):focus,
select:not([class*="ww-"]):not([class*="wwobject"]):focus {
  border-color: hsl(var(--ring)) !important;
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2) !important;
}

input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"]):not([class*="wwobject"]):disabled,
textarea:not([class*="ww-"]):not([class*="wwobject"]):disabled,
select:not([class*="ww-"]):not([class*="wwobject"]):disabled {
  cursor: not-allowed !important;
  opacity: 0.5 !important;
}

input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"]):not([class*="wwobject"])::placeholder,
textarea:not([class*="ww-"]):not([class*="wwobject"])::placeholder {
  color: hsl(var(--muted-foreground)) !important;
}

/* Textarea */
textarea:not([class*="ww-"]):not([class*="wwobject"]) {
  min-height: 80px !important;
  resize: vertical !important;
}

/* Select */
select:not([class*="ww-"]):not([class*="wwobject"]) {
  padding-right: 2.5rem !important;
  appearance: none !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: right 0.5rem center !important;
  background-size: 1rem !important;
  cursor: pointer !important;
}

/* Checkbox & Radio */
input[type="checkbox"]:not([class*="ww-"]):not([class*="wwobject"]),
input[type="radio"]:not([class*="ww-"]):not([class*="wwobject"]) {
  width: 1rem !important;
  height: 1rem !important;
  border: 1px solid hsl(var(--primary)) !important;
  border-radius: calc(var(--radius) / 2) !important;
  cursor: pointer !important;
  transition: all 0.2s !important;
  appearance: none !important;
  background: hsl(var(--background)) !important;
  position: relative !important;
}

input[type="radio"]:not([class*="ww-"]):not([class*="wwobject"]) {
  border-radius: 50% !important;
}

input[type="checkbox"]:not([class*="ww-"]):not([class*="wwobject"]):checked,
input[type="radio"]:not([class*="ww-"]):not([class*="wwobject"]):checked {
  background: hsl(var(--primary)) !important;
  border-color: hsl(var(--primary)) !important;
}

input[type="checkbox"]:not([class*="ww-"]):not([class*="wwobject"]):checked::after {
  content: '' !important;
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  width: 0.5rem !important;
  height: 0.25rem !important;
  border: 2px solid hsl(var(--primary-foreground)) !important;
  border-top: none !important;
  border-right: none !important;
  transform: translate(-50%, -60%) rotate(-45deg) !important;
}

input[type="radio"]:not([class*="ww-"]):not([class*="wwobject"]):checked::after {
  content: '' !important;
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 0.5rem !important;
  height: 0.5rem !important;
  border-radius: 50% !important;
  background: hsl(var(--primary-foreground)) !important;
}

input[type="checkbox"]:not([class*="ww-"]):not([class*="wwobject"]):focus-visible,
input[type="radio"]:not([class*="ww-"]):not([class*="wwobject"]):focus-visible {
  outline: 2px solid hsl(var(--ring)) !important;
  outline-offset: 2px !important;
}

/* Labels */
label:not([class*="ww-"]):not([class*="wwobject"]) {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: hsl(var(--foreground)) !important;
  cursor: pointer !important;
}
      `;
    }
  },
  beforeUnmount() {
    // Optionnel : retirer les styles quand le composant est détruit
    const styleElement = document.getElementById('shadcn-global-styles');
    if (styleElement) {
      styleElement.remove();
    }
  }
};
</script>

<style>
/* Styles locaux du composant uniquement */
.shadcn-theme-provider {
  display: contents;
}
</style>
