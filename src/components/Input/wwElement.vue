<template>
  <div class="ui-input-wrapper">
    <label v-if="content.label" :for="inputId" class="ui-input-label">
      {{ content.label }}
      <span v-if="content.required" class="ui-input-required">*</span>
    </label>
    
    <div class="ui-input-container" :class="containerClasses">
      <div
        v-if="content.icon && content.iconPosition === 'left'"
        v-html="iconHtml"
        class="ui-input-icon ui-input-icon-left"
      ></div>
      
      <input
        :id="inputId"
        :type="content.type || 'text'"
        :value="currentValue"
        :placeholder="content.placeholder"
        :disabled="content.disabled"
        :readonly="content.readonly"
        :required="content.required"
        :min="content.min"
        :max="content.max"
        :step="content.step"
        class="ui-input"
        :class="inputClasses"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <div
        v-if="content.icon && content.iconPosition === 'right'"
        v-html="iconHtml"
        class="ui-input-icon ui-input-icon-right"
      ></div>
    </div>
    
    <p v-if="content.errorText" class="ui-input-message ui-input-error">
      {{ content.errorText }}
    </p>
    <p v-else-if="content.helperText" class="ui-input-message ui-input-helper">
      {{ content.helperText }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'UIInput',
  
  props: {
    content: {
      type: Object,
      required: true
    },
    uid: {
      type: String,
      default: ''
    }
  },
  
  emits: ['trigger-event', 'update:content'],
  
  data() {
    return {
      currentValue: '',
      iconHtml: null
    };
  },
  
  computed: {
    inputId() {
      return `ui-input-${this.uid}`;
    },
    
    containerClasses() {
      return {
        'ui-input-has-icon-left': this.content.icon && this.content.iconPosition === 'left',
        'ui-input-has-icon-right': this.content.icon && this.content.iconPosition === 'right',
        'ui-input-error-state': this.content.errorText
      };
    },
    
    inputClasses() {
      return {
        'ui-input-with-icon-left': this.content.icon && this.content.iconPosition === 'left',
        'ui-input-with-icon-right': this.content.icon && this.content.iconPosition === 'right'
      };
    }
  },
  
  watch: {
    'content.value': {
      immediate: true,
      handler(newValue) {
        this.currentValue = newValue ?? '';
      }
    },
    'content.icon': {
      handler() {
        this.loadIcon();
      },
      deep: true
    }
  },
  
  async mounted() {
    await this.loadIcon();
  },
  
  methods: {
    async loadIcon() {
      if (!this.content.icon) {
        this.iconHtml = null;
        return;
      }
      
      try {
        const { getIcon } = wwLib.useIcons();
        const iconPath = typeof this.content.icon === 'string' 
          ? this.content.icon 
          : this.content.icon?.icon || this.content.icon?.content?.icon;
        
        if (iconPath) {
          this.iconHtml = await getIcon(iconPath);
        }
      } catch (e) {
        console.error('Failed to load icon:', e);
      }
    },
    
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit('update:content', { value });
      this.$emit('trigger-event', { name: 'input', event: { value } });
    },
    
    handleChange(event) {
      const value = event.target.value;
      this.$emit('trigger-event', { name: 'change', event: { value } });
    },
    
    handleFocus() {
      this.$emit('trigger-event', { name: 'focus', event: {} });
    },
    
    handleBlur() {
      this.$emit('trigger-event', { name: 'blur', event: {} });
    }
  }
};
</script>

<style scoped>
@import '../../styles/tokens.css';

.ui-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
}

.ui-input-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
}

.ui-input-required {
  color: hsl(var(--destructive));
  margin-left: 0.125rem;
}

.ui-input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.ui-input {
  flex: 1;
  height: 2.5rem;
  width: 100%;
  border-radius: var(--radius);
  border: 1px solid hsl(var(--input));
  background-color: hsl(var(--background));
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
  transition: all var(--transition-fast);
  outline: none;
}

.ui-input::placeholder {
  color: hsl(var(--muted-foreground));
}

.ui-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}

.ui-input:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.ui-input:read-only {
  background-color: hsl(var(--muted));
}

.ui-input-error-state .ui-input {
  border-color: hsl(var(--destructive));
}

.ui-input-error-state .ui-input:focus {
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive) / 0.3);
}

/* Icon positioning */
.ui-input-with-icon-left {
  padding-left: 2.5rem;
}

.ui-input-with-icon-right {
  padding-right: 2.5rem;
}

.ui-input-icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(var(--muted-foreground));
  pointer-events: none;
}

.ui-input-icon :deep(svg) {
  width: 1rem;
  height: 1rem;
}

.ui-input-icon-left {
  left: 0.75rem;
}

.ui-input-icon-right {
  right: 0.75rem;
}

/* Messages */
.ui-input-message {
  font-size: 0.75rem;
  margin: 0;
  font-family: var(--font-sans);
}

.ui-input-helper {
  color: hsl(var(--muted-foreground));
}

.ui-input-error {
  color: hsl(var(--destructive));
}

/* Number input arrows */
.ui-input[type="number"]::-webkit-inner-spin-button,
.ui-input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}
</style>
