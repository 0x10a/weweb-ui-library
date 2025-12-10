<template>
  <div class="ui-checkbox-wrapper">
    <label class="ui-checkbox-container" :class="{ 'ui-checkbox-disabled': content.disabled }">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="content.disabled"
        class="ui-checkbox-input"
        @change="handleChange"
      />
      <div class="ui-checkbox-box" :class="{ 'ui-checkbox-checked': isChecked }">
        <div v-if="isChecked" v-html="checkIcon" class="ui-checkbox-check"></div>
      </div>
      <span v-if="content.label" class="ui-checkbox-label">{{ content.label }}</span>
    </label>
    
    <p v-if="content.helperText" class="ui-checkbox-helper">
      {{ content.helperText }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'UICheckbox',
  
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  
  emits: ['trigger-event', 'update:content'],
  
  data() {
    return {
      isChecked: false,
      checkIcon: null
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
  
  async mounted() {
    await this.loadCheckIcon();
  },
  
  methods: {
    async loadCheckIcon() {
      try {
        const { getIcon } = wwLib.useIcons();
        this.checkIcon = await getIcon('lucide/check');
      } catch (e) {
        console.error('Failed to load check icon:', e);
      }
    },
    
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

.ui-checkbox-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.ui-checkbox-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.ui-checkbox-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.ui-checkbox-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border: 1px solid hsl(var(--input));
  border-radius: calc(var(--radius) * 0.5);
  background-color: hsl(var(--background));
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.ui-checkbox-container:hover:not(.ui-checkbox-disabled) .ui-checkbox-box {
  border-color: hsl(var(--ring));
}

.ui-checkbox-input:focus-visible + .ui-checkbox-box {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}

.ui-checkbox-checked {
  background-color: hsl(var(--primary));
  border-color: hsl(var(--primary));
}

.ui-checkbox-check {
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(var(--primary-foreground));
}

.ui-checkbox-check :deep(svg) {
  width: 0.75rem;
  height: 0.75rem;
  stroke-width: 3px;
}

.ui-checkbox-label {
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
  line-height: 1.5;
}

.ui-checkbox-helper {
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
  margin: 0;
  margin-left: 1.5rem;
  font-family: var(--font-sans);
}
</style>
