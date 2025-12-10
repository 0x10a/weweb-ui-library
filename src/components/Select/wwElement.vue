<template>
  <div class="ui-select-wrapper">
    <label v-if="content.label" :for="selectId" class="ui-select-label">
      {{ content.label }}
      <span v-if="content.required" class="ui-select-required">*</span>
    </label>
    
    <div class="ui-select-container" :class="containerClasses">
      <select
        :id="selectId"
        :value="currentValue"
        :disabled="content.disabled"
        :required="content.required"
        class="ui-select"
        @change="handleChange"
      >
        <option value="" disabled>{{ content.placeholder || 'Select an option' }}</option>
        <option
          v-for="(option, index) in optionsList"
          :key="index"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      
      <div class="ui-select-icon" v-html="chevronIcon"></div>
    </div>
    
    <p v-if="content.errorText" class="ui-select-message ui-select-error">
      {{ content.errorText }}
    </p>
    <p v-else-if="content.helperText" class="ui-select-message ui-select-helper">
      {{ content.helperText }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'UISelect',
  
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
      chevronIcon: null
    };
  },
  
  computed: {
    selectId() {
      return `ui-select-${this.uid}`;
    },
    
    containerClasses() {
      return {
        'ui-select-error-state': this.content.errorText
      };
    },
    
    optionsList() {
      return Array.isArray(this.content.options) ? this.content.options : [];
    }
  },
  
  watch: {
    'content.value': {
      immediate: true,
      handler(newValue) {
        this.currentValue = newValue ?? '';
      }
    }
  },
  
  async mounted() {
    await this.loadChevronIcon();
  },
  
  methods: {
    async loadChevronIcon() {
      try {
        const { getIcon } = wwLib.useIcons();
        this.chevronIcon = await getIcon('lucide/chevron-down');
      } catch (e) {
        console.error('Failed to load chevron icon:', e);
      }
    },
    
    handleChange(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit('update:content', { value });
      this.$emit('trigger-event', { name: 'change', event: { value } });
    }
  }
};
</script>

<style scoped>
@import '../../styles/tokens.css';

.ui-select-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
}

.ui-select-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
}

.ui-select-required {
  color: hsl(var(--destructive));
  margin-left: 0.125rem;
}

.ui-select-container {
  position: relative;
  display: flex;
  align-items: center;
}

.ui-select {
  flex: 1;
  height: 2.5rem;
  width: 100%;
  appearance: none;
  border-radius: var(--radius);
  border: 1px solid hsl(var(--input));
  background-color: hsl(var(--background));
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
  transition: all var(--transition-fast);
  outline: none;
  cursor: pointer;
}

.ui-select:focus {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}

.ui-select:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.ui-select option[value=""] {
  color: hsl(var(--muted-foreground));
}

.ui-select-error-state .ui-select {
  border-color: hsl(var(--destructive));
}

.ui-select-error-state .ui-select:focus {
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive) / 0.3);
}

.ui-select-icon {
  position: absolute;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(var(--muted-foreground));
  pointer-events: none;
}

.ui-select-icon :deep(svg) {
  width: 1rem;
  height: 1rem;
}

/* Messages */
.ui-select-message {
  font-size: 0.75rem;
  margin: 0;
  font-family: var(--font-sans);
}

.ui-select-helper {
  color: hsl(var(--muted-foreground));
}

.ui-select-error {
  color: hsl(var(--destructive));
}
</style>
