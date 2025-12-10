<template>
  <div class="ui-datepicker-wrapper">
    <label v-if="content.label" :for="datepickerId" class="ui-datepicker-label">
      {{ content.label }}
      <span v-if="content.required" class="ui-datepicker-required">*</span>
    </label>
    
    <div class="ui-datepicker-container" :class="containerClasses">
      <div v-html="calendarIcon" class="ui-datepicker-icon"></div>
      
      <input
        :id="datepickerId"
        type="date"
        :value="currentValue"
        :placeholder="content.placeholder"
        :disabled="content.disabled"
        :required="content.required"
        :min="content.min"
        :max="content.max"
        class="ui-datepicker-input"
        @input="handleInput"
        @change="handleChange"
      />
    </div>
    
    <p v-if="content.errorText" class="ui-datepicker-message ui-datepicker-error">
      {{ content.errorText }}
    </p>
    <p v-else-if="content.helperText" class="ui-datepicker-message ui-datepicker-helper">
      {{ content.helperText }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'UIDatePicker',
  
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
      calendarIcon: null
    };
  },
  
  computed: {
    datepickerId() {
      return `ui-datepicker-${this.uid}`;
    },
    
    containerClasses() {
      return {
        'ui-datepicker-error-state': this.content.errorText
      };
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
    await this.loadCalendarIcon();
  },
  
  methods: {
    async loadCalendarIcon() {
      try {
        const { getIcon } = wwLib.useIcons();
        this.calendarIcon = await getIcon('lucide/calendar');
      } catch (e) {
        console.error('Failed to load calendar icon:', e);
      }
    },
    
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit('update:content', { value });
      this.$emit('trigger-event', { name: 'change', event: { value } });
    },
    
    handleChange(event) {
      const value = event.target.value;
      this.$emit('trigger-event', { name: 'change', event: { value } });
    }
  }
};
</script>

<style scoped>
@import '../../styles/tokens.css';

.ui-datepicker-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
}

.ui-datepicker-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
}

.ui-datepicker-required {
  color: hsl(var(--destructive));
  margin-left: 0.125rem;
}

.ui-datepicker-container {
  position: relative;
  display: flex;
  align-items: center;
}

.ui-datepicker-input {
  flex: 1;
  height: 2.5rem;
  width: 100%;
  border-radius: var(--radius);
  border: 1px solid hsl(var(--input));
  background-color: hsl(var(--background));
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
  transition: all var(--transition-fast);
  outline: none;
  cursor: pointer;
}

.ui-datepicker-input::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
}

.ui-datepicker-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}

.ui-datepicker-input:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.ui-datepicker-error-state .ui-datepicker-input {
  border-color: hsl(var(--destructive));
}

.ui-datepicker-error-state .ui-datepicker-input:focus {
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive) / 0.3);
}

.ui-datepicker-icon {
  position: absolute;
  left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(var(--muted-foreground));
  pointer-events: none;
  z-index: 1;
}

.ui-datepicker-icon :deep(svg) {
  width: 1rem;
  height: 1rem;
}

/* Messages */
.ui-datepicker-message {
  font-size: 0.75rem;
  margin: 0;
  font-family: var(--font-sans);
}

.ui-datepicker-helper {
  color: hsl(var(--muted-foreground));
}

.ui-datepicker-error {
  color: hsl(var(--destructive));
}
</style>
