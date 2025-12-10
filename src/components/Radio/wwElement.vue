<template>
  <div class="ui-radio-wrapper">
    <label v-if="content.label" class="ui-radio-group-label">{{ content.label }}</label>
    
    <div class="ui-radio-group" :class="`ui-radio-${content.orientation || 'vertical'}`">
      <label
        v-for="(option, index) in optionsList"
        :key="index"
        class="ui-radio-item"
        :class="{ 'ui-radio-disabled': content.disabled }"
      >
        <input
          type="radio"
          :name="`radio-${uid}`"
          :value="option.value"
          :checked="currentValue === option.value"
          :disabled="content.disabled"
          class="ui-radio-input"
          @change="handleChange(option.value)"
        />
        <div class="ui-radio-button" :class="{ 'ui-radio-checked': currentValue === option.value }">
          <div v-if="currentValue === option.value" class="ui-radio-dot"></div>
        </div>
        <span class="ui-radio-label">{{ option.label }}</span>
      </label>
    </div>
    
    <p v-if="content.helperText" class="ui-radio-helper">
      {{ content.helperText }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'UIRadio',
  
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
      currentValue: ''
    };
  },
  
  computed: {
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
  
  methods: {
    handleChange(value) {
      this.currentValue = value;
      this.$emit('update:content', { value });
      this.$emit('trigger-event', { name: 'change', event: { value } });
    }
  }
};
</script>

<style scoped>
@import '../../styles/tokens.css';

.ui-radio-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ui-radio-group-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
}

.ui-radio-group {
  display: flex;
  gap: 1rem;
}

.ui-radio-vertical {
  flex-direction: column;
}

.ui-radio-horizontal {
  flex-direction: row;
  flex-wrap: wrap;
}

.ui-radio-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.ui-radio-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.ui-radio-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border: 1px solid hsl(var(--input));
  border-radius: 9999px;
  background-color: hsl(var(--background));
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.ui-radio-item:hover:not(.ui-radio-disabled) .ui-radio-button {
  border-color: hsl(var(--ring));
}

.ui-radio-input:focus-visible + .ui-radio-button {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}

.ui-radio-checked {
  border-color: hsl(var(--primary));
}

.ui-radio-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: hsl(var(--primary));
  border-radius: 9999px;
}

.ui-radio-label {
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
  line-height: 1.5;
}

.ui-radio-helper {
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
  margin: 0;
  font-family: var(--font-sans);
}
</style>
