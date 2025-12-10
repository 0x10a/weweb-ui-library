<template>
  <button
    :class="buttonClasses"
    :disabled="content.disabled || content.loading"
    :style="buttonStyles"
    @click="handleClick"
  >
    <span v-if="content.loading" class="ui-btn-spinner"></span>
    
    <div
      v-if="content.icon && content.iconPosition === 'left' && !content.loading"
      v-html="iconHtml"
      class="ui-btn-icon"
    ></div>
    
    <span v-if="content.label && content.size !== 'icon'" class="ui-btn-label">{{ content.label }}</span>
    
    <div
      v-if="content.icon && content.iconPosition === 'right' && !content.loading"
      v-html="iconHtml"
      class="ui-btn-icon"
    ></div>
  </button>
</template>

<script>
export default {
  name: 'UIButton',
  
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
  
  emits: ['trigger-event'],
  
  data() {
    return {
      iconHtml: null
    };
  },
  
  async mounted() {
    await this.loadIcon();
  },
  
  computed: {
    buttonClasses() {
      return [
        'ui-btn',
        `ui-btn-${this.content.variant || 'default'}`,
        `ui-btn-${this.content.size || 'default'}`,
        {
          'ui-btn-loading': this.content.loading
        }
      ];
    },
    
    buttonStyles() {
      return {
        width: this.content.fullWidth ? '100%' : 'auto'
      };
    }
  },
  
  watch: {
    'content.icon': {
      handler() {
        this.loadIcon();
      },
      deep: true
    }
  },
  
  methods: {
    async loadIcon() {
      if (!this.content.icon) {
        this.iconHtml = null;
        return;
      }
      
      try {
        const { getIcon } = wwLib.useIcons();
        // Handle both string and object icon formats
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
    
    handleClick(event) {
      if (!this.content.disabled && !this.content.loading) {
        this.$emit('trigger-event', { name: 'click', event: {} });
      }
    }
  }
};
</script>

<style scoped>
@import '../../styles/tokens.css';

.ui-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  font-family: var(--font-sans);
  transition: all var(--transition-fast);
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  user-select: none;
}

.ui-btn:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.ui-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}

/* Variants */
.ui-btn-default {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  box-shadow: var(--shadow-sm);
}

.ui-btn-default:hover:not(:disabled) {
  background-color: hsl(var(--primary) / 0.9);
}

.ui-btn-default:active:not(:disabled) {
  background-color: hsl(var(--primary) / 0.8);
}

.ui-btn-secondary {
  background-color: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
}

.ui-btn-secondary:hover:not(:disabled) {
  background-color: hsl(var(--secondary) / 0.8);
}

.ui-btn-outline {
  border-color: hsl(var(--input));
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}

.ui-btn-outline:hover:not(:disabled) {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.ui-btn-ghost {
  background-color: transparent;
  color: hsl(var(--foreground));
}

.ui-btn-ghost:hover:not(:disabled) {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.ui-btn-destructive {
  background-color: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));
}

.ui-btn-destructive:hover:not(:disabled) {
  background-color: hsl(var(--destructive) / 0.9);
}

.ui-btn-link {
  background-color: transparent;
  color: hsl(var(--primary));
  text-decoration: underline;
  text-underline-offset: 4px;
}

.ui-btn-link:hover:not(:disabled) {
  text-decoration: none;
}

/* Sizes */
.ui-btn-sm {
  height: 2.25rem;
  padding: 0 0.75rem;
  font-size: 0.75rem;
}

.ui-btn-default {
  height: 2.5rem;
  padding: 0 1rem;
}

.ui-btn-lg {
  height: 2.75rem;
  padding: 0 2rem;
  font-size: 1rem;
}

.ui-btn-icon {
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
}

/* Loading State */
.ui-btn-loading {
  pointer-events: none;
}

.ui-btn-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ui-spin 0.6s linear infinite;
}

@keyframes ui-spin {
  to { transform: rotate(360deg); }
}

.ui-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ui-btn-icon :deep(svg) {
  width: 1rem;
  height: 1rem;
}

.ui-btn-label {
  line-height: 1;
}
</style>
