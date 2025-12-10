<template>
  <label class="ui-switch-wrapper" :class="{ 'ui-switch-disabled': content.disabled }">
    <input
      type="checkbox"
      :checked="isChecked"
      :disabled="content.disabled"
      class="ui-switch-input"
      @change="handleChange"
    />
    <div class="ui-switch-track" :class="{ 'ui-switch-checked': isChecked }">
      <div class="ui-switch-thumb"></div>
    </div>
    <span v-if="content.label" class="ui-switch-label">{{ content.label }}</span>
  </label>
</template>

<script>
export default {
  name: 'UISwitch',
  
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  
  emits: ['trigger-event', 'update:content'],
  
  data() {
    return {
      isChecked: false
    };
  },
  
  watch: {
    'content.checked': {
      immediate: true,
      handler(newValue) {
        this.isChecked = !!newValue;
      }
    }
  },
  
  methods: {
    handleChange(event) {
      const checked = event.target.checked;
      this.isChecked = checked;
      this.$emit('update:content', { checked });
      this.$emit('trigger-event', { name: 'change', event: { checked } });
    }
  }
};
</script>

<style scoped>
@import '../../styles/tokens.css';

.ui-switch-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.ui-switch-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-switch-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.ui-switch-track {
  position: relative;
  width: 2.75rem;
  height: 1.5rem;
  background-color: hsl(var(--input));
  border-radius: 9999px;
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.ui-switch-checked {
  background-color: hsl(var(--primary));
}

.ui-switch-wrapper:hover:not(.ui-switch-disabled) .ui-switch-track {
  opacity: 0.9;
}

.ui-switch-input:focus-visible + .ui-switch-track {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}

.ui-switch-thumb {
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: hsl(var(--background));
  border-radius: 9999px;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast);
}

.ui-switch-checked .ui-switch-thumb {
  transform: translateX(1.25rem);
}

.ui-switch-label {
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
  line-height: 1.5;
}
</style>
