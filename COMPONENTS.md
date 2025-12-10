# WeWeb UI Library - Components Documentation

## 🎨 Design System

All components follow the **Shadcn design system** with:
- **Black/Neutral color scheme** (not blue)
- Consistent spacing using design tokens
- Typography from system fonts
- Focus rings for accessibility
- Smooth transitions (150-300ms)
- Shadow elevation system

## 📦 Components

### Button
**Variants:** default, secondary, outline, ghost, destructive, link  
**Sizes:** sm, default, lg, icon  
**Features:** Loading state, icons (left/right), disabled, full width

```javascript
// Example usage
{
  label: "Click me",
  variant: "default",
  size: "default",
  icon: "lucide/plus",
  iconPosition: "left",
  loading: false,
  disabled: false,
  fullWidth: false
}
```

### Input
**Types:** text, email, password, number, tel, url, search  
**Features:** Label, placeholder, helper text, error text, icons, validation

```javascript
// Example usage
{
  value: "",
  type: "text",
  label: "Email",
  placeholder: "Enter your email",
  helperText: "We'll never share your email",
  errorText: "",
  icon: "lucide/mail",
  iconPosition: "left",
  required: false,
  disabled: false,
  readonly: false
}
```

### Textarea
**Features:** Multi-line input, resize options, label, helper/error text

```javascript
// Example usage
{
  value: "",
  label: "Description",
  placeholder: "Enter description",
  rows: 4,
  resize: "vertical", // none, vertical, horizontal, both
  required: false,
  disabled: false
}
```

### Select
**Features:** Dropdown with options, label, helper/error text

```javascript
// Example usage
{
  value: "",
  options: [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" }
  ],
  label: "Choose option",
  placeholder: "Select an option",
  required: false,
  disabled: false
}
```

### Checkbox
**Features:** Single checkbox with label and helper text

```javascript
// Example usage
{
  checked: false,
  label: "Accept terms and conditions",
  helperText: "You must accept to continue",
  disabled: false
}
```

### Radio Group
**Features:** Multiple options, vertical/horizontal orientation

```javascript
// Example usage
{
  value: "",
  options: [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" }
  ],
  label: "Choose one",
  orientation: "vertical", // vertical, horizontal
  disabled: false
}
```

### Switch
**Features:** Toggle switch with label

```javascript
// Example usage
{
  checked: false,
  label: "Enable notifications",
  disabled: false
}
```

### DatePicker
**Features:** Native date input with calendar icon, min/max validation

```javascript
// Example usage
{
  value: "",
  label: "Birth date",
  placeholder: "Pick a date",
  min: "2000-01-01",
  max: "2025-12-31",
  required: false,
  disabled: false
}
```

## 🎯 Common Props

All form components support:
- `label` - Label text above the field
- `helperText` - Helper text below the field
- `errorText` - Error message (overrides helper text)
- `required` - Mark field as required (adds *)
- `disabled` - Disable the field
- `bindable` - All values are bindable in WeWeb

## 🎨 Design Tokens

Located in `src/styles/tokens.css`:

```css
/* Colors */
--primary: 0 0% 9% (Black)
--secondary: 0 0% 96.1% (Light gray)
--destructive: 0 84.2% 60.2% (Red)
--border: 0 0% 89.8%
--input: 0 0% 89.8%
--ring: 0 0% 3.9% (Focus ring)

/* Spacing */
--space-1 to --space-8

/* Radius */
--radius: 0.5rem

/* Shadows */
--shadow-sm to --shadow-lg
```

## 🚀 Usage in WeWeb

1. Install the library in your WeWeb project
2. Components appear in "UI Library" category
3. Drag & drop into your pages
4. Configure props in the right panel
5. Bind to variables/collections as needed

## 🎨 Customization

All colors use HSL color space for easy theming. Update `tokens.css` to change the theme globally.

Dark mode is supported via `.dark` class on the root element.

## ♿ Accessibility

- Full keyboard navigation
- Focus rings on all interactive elements
- ARIA labels where applicable
- Proper contrast ratios
- Screen reader support

## 📝 Events

All components emit relevant events:
- **Button:** `click`
- **Input/Textarea:** `input`, `change`, `focus`, `blur`
- **Select:** `change`
- **Checkbox/Radio/Switch:** `change`
- **DatePicker:** `change`

Events include relevant data (value, checked state, etc.)
