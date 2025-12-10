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
  }
};
</script>

<style>
/* Shadcn Design Tokens */
:root,
.shadcn-theme-provider {
  /* Colors - Light Mode */
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 3.9%;
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
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
}

/* Dark Mode */
.dark,
.shadcn-theme-provider.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --card: 0 0% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 0 0% 3.9%;
  --popover-foreground: 0 0% 98%;
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
  --chart-1: 220 70% 50%;
  --chart-2: 160 60% 45%;
  --chart-3: 30 80% 55%;
  --chart-4: 280 65% 60%;
  --chart-5: 340 75% 55%;
}

/* Global Styles - Apply to all HTML elements on the page */
.shadcn-theme-provider *,
.shadcn-theme-provider :global(*) {
  box-sizing: border-box;
}

/* Typography */
.shadcn-theme-provider :global(body),
.shadcn-theme-provider {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Buttons - Global */
.shadcn-theme-provider :global(button:not([class*="ww-"])),
.shadcn-theme-provider :global(.btn),
.shadcn-theme-provider button:not([class*="ww-"]) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: var(--radius);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  padding: 0.5rem 1rem;
  height: 2.5rem;
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: none;
  outline: none;
}

.shadcn-theme-provider :global(button:not([class*="ww-"])):hover:not(:disabled),
.shadcn-theme-provider button:not([class*="ww-"]):hover:not(:disabled) {
  opacity: 0.9;
}

.shadcn-theme-provider :global(button:not([class*="ww-"])):focus-visible,
.shadcn-theme-provider button:not([class*="ww-"]):focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

.shadcn-theme-provider :global(button:not([class*="ww-"])):disabled,
.shadcn-theme-provider button:not([class*="ww-"]):disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Button Variants */
.shadcn-theme-provider :global(button.secondary),
.shadcn-theme-provider button.secondary {
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
}

.shadcn-theme-provider :global(button.outline),
.shadcn-theme-provider button.outline {
  background: transparent;
  border: 1px solid hsl(var(--input));
  color: hsl(var(--foreground));
}

.shadcn-theme-provider :global(button.ghost),
.shadcn-theme-provider button.ghost {
  background: transparent;
  color: hsl(var(--foreground));
}

.shadcn-theme-provider :global(button.ghost):hover:not(:disabled),
.shadcn-theme-provider button.ghost:hover:not(:disabled) {
  background: hsl(var(--accent));
  opacity: 1;
}

.shadcn-theme-provider :global(button.destructive),
.shadcn-theme-provider button.destructive {
  background: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));
}

.shadcn-theme-provider :global(button.link),
.shadcn-theme-provider button.link {
  background: transparent;
  color: hsl(var(--primary));
  text-decoration: underline;
  text-underline-offset: 4px;
  padding: 0;
  height: auto;
}

/* Inputs - Global */
.shadcn-theme-provider :global(input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"])),
.shadcn-theme-provider :global(textarea:not([class*="ww-"])),
.shadcn-theme-provider input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"]),
.shadcn-theme-provider textarea:not([class*="ww-"]) {
  display: flex;
  width: 100%;
  border-radius: var(--radius);
  border: 1px solid hsl(var(--input));
  background: hsl(var(--background));
  padding: 0.5rem 0.75rem;
  font-size: 14px;
  transition: all 0.2s;
  outline: none;
  color: hsl(var(--foreground));
}

.shadcn-theme-provider :global(input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"])):focus,
.shadcn-theme-provider :global(textarea:not([class*="ww-"])):focus,
.shadcn-theme-provider input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"]):focus,
.shadcn-theme-provider textarea:not([class*="ww-"]):focus {
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}

.shadcn-theme-provider :global(input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"])):disabled,
.shadcn-theme-provider :global(textarea:not([class*="ww-"])):disabled,
.shadcn-theme-provider input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"]):disabled,
.shadcn-theme-provider textarea:not([class*="ww-"]):disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.shadcn-theme-provider :global(input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"]))::placeholder,
.shadcn-theme-provider :global(textarea:not([class*="ww-"]))::placeholder,
.shadcn-theme-provider input:not([type="checkbox"]):not([type="radio"]):not([class*="ww-"])::placeholder,
.shadcn-theme-provider textarea:not([class*="ww-"])::placeholder {
  color: hsl(var(--muted-foreground));
}

/* Textarea */
.shadcn-theme-provider :global(textarea:not([class*="ww-"])),
.shadcn-theme-provider textarea:not([class*="ww-"]) {
  min-height: 80px;
  resize: vertical;
}

/* Select - Global */
.shadcn-theme-provider :global(select:not([class*="ww-"])),
.shadcn-theme-provider select:not([class*="ww-"]) {
  display: flex;
  width: 100%;
  border-radius: var(--radius);
  border: 1px solid hsl(var(--input));
  background: hsl(var(--background));
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  font-size: 14px;
  transition: all 0.2s;
  outline: none;
  color: hsl(var(--foreground));
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1rem;
  cursor: pointer;
}

.shadcn-theme-provider :global(select:not([class*="ww-"])):focus,
.shadcn-theme-provider select:not([class*="ww-"]):focus {
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}

.shadcn-theme-provider :global(select:not([class*="ww-"])):disabled,
.shadcn-theme-provider select:not([class*="ww-"]):disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Checkbox & Radio - Global */
.shadcn-theme-provider :global(input[type="checkbox"]:not([class*="ww-"])),
.shadcn-theme-provider :global(input[type="radio"]:not([class*="ww-"])),
.shadcn-theme-provider input[type="checkbox"]:not([class*="ww-"]),
.shadcn-theme-provider input[type="radio"]:not([class*="ww-"]) {
  width: 1rem;
  height: 1rem;
  border: 1px solid hsl(var(--primary));
  border-radius: calc(var(--radius) / 2);
  cursor: pointer;
  transition: all 0.2s;
  appearance: none;
  background: hsl(var(--background));
  position: relative;
}

.shadcn-theme-provider :global(input[type="radio"]:not([class*="ww-"])),
.shadcn-theme-provider input[type="radio"]:not([class*="ww-"]) {
  border-radius: 50%;
}

.shadcn-theme-provider :global(input[type="checkbox"]:not([class*="ww-"])):checked,
.shadcn-theme-provider :global(input[type="radio"]:not([class*="ww-"])):checked,
.shadcn-theme-provider input[type="checkbox"]:not([class*="ww-"]):checked,
.shadcn-theme-provider input[type="radio"]:not([class*="ww-"]):checked {
  background: hsl(var(--primary));
  border-color: hsl(var(--primary));
}

.shadcn-theme-provider :global(input[type="checkbox"]:not([class*="ww-"])):checked::after,
.shadcn-theme-provider input[type="checkbox"]:not([class*="ww-"]):checked::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.25rem;
  border: 2px solid hsl(var(--primary-foreground));
  border-top: none;
  border-right: none;
  transform: translate(-50%, -60%) rotate(-45deg);
}

.shadcn-theme-provider :global(input[type="radio"]:not([class*="ww-"])):checked::after,
.shadcn-theme-provider input[type="radio"]:not([class*="ww-"]):checked::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: hsl(var(--primary-foreground));
}

.shadcn-theme-provider :global(input[type="checkbox"]:not([class*="ww-"])):focus-visible,
.shadcn-theme-provider :global(input[type="radio"]:not([class*="ww-"])):focus-visible,
.shadcn-theme-provider input[type="checkbox"]:not([class*="ww-"]):focus-visible,
.shadcn-theme-provider input[type="radio"]:not([class*="ww-"]):focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

/* Labels */
.shadcn-theme-provider :global(label:not([class*="ww-"])),
.shadcn-theme-provider label:not([class*="ww-"]) {
  font-size: 14px;
  font-weight: 500;
  color: hsl(var(--foreground));
  cursor: pointer;
}

/* Cards */
.shadcn-theme-provider :global(.card),
.shadcn-theme-provider .card {
  background: hsl(var(--card));
  color: hsl(var(--card-foreground));
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  padding: 1.5rem;
}

/* Utility Classes */
.shadcn-theme-provider :global(.text-muted),
.shadcn-theme-provider .text-muted {
  color: hsl(var(--muted-foreground));
}

.shadcn-theme-provider :global(.text-destructive),
.shadcn-theme-provider .text-destructive {
  color: hsl(var(--destructive));
}

.shadcn-theme-provider :global(.border),
.shadcn-theme-provider .border {
  border: 1px solid hsl(var(--border));
}

.shadcn-theme-provider :global(.bg-primary),
.shadcn-theme-provider .bg-primary {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

.shadcn-theme-provider :global(.bg-secondary),
.shadcn-theme-provider .bg-secondary {
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
}

.shadcn-theme-provider :global(.bg-muted),
.shadcn-theme-provider .bg-muted {
  background: hsl(var(--muted));
  color: hsl(var(--muted-foreground));
}

.shadcn-theme-provider :global(.bg-accent),
.shadcn-theme-provider .bg-accent {
  background: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}
</style>
