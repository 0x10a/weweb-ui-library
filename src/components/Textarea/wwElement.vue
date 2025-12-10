<template>
  <div class="ui-textarea-wrapper">
    <label v-if="content.label" :for="textareaId" class="ui-textarea-label">
      {{ content.label }}
      <span v-if="content.required" class="ui-textarea-required">*</span>
    </label>
    
    <textarea
      :id="textareaId"
      :value="currentValue"
      :placeholder="content.placeholder"
      :disabled="content.disabled"
      :readonly="content.readonly"
      :required="content.required"
      :rows="content.rows || 4"
      class="ui-textarea"
      :class="textareaClasses"
      :style="textareaStyles"
      @input="handleInput"
      @change="handleChange"
    ></textarea>
    
    <p v-if="content.errorText" class="ui-textarea-message ui-textarea-error">
      {{ content.errorText }}
    </p>
    <p v-else-if="content.helperText" class="ui-textarea-message ui-textarea-helper">
      {{ content.helperText }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'UITextarea',
  
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
    textareaId() {
      return `ui-textarea-${this.uid}`;
    },
    
    textareaClasses() {
      return {
        'ui-textarea-error-state': this.content.errorText
      };
    },
    
    textareaStyles() {
      return {
        resize: this.content.resize || 'vertical'
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
  
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit('update:content', { value });
      this.$emit('trigger-event', { name: 'input', event: { value } });
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

.ui-textarea-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
}

.ui-textarea-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
}

.ui-textarea-required {
  color: hsl(var(--destructive));
  margin-left: 0.125rem;
}

.ui-textarea {
  width: 100%;
  min-height: 5rem;
  border-radius: var(--radius);
  border: 1px solid hsl(var(--input));
  background-color: hsl(var(--background));
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
  line-height: 1.5;
  transition: all var(--transition-fast);
  outline: none;
}

.ui-textarea::placeholder {
  color: hsl(var(--muted-foreground));
}

.ui-textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}

.ui-textarea:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.ui-textarea:read-only {
  background-color: hsl(var(--muted));
}

.ui-textarea-error-state {
  border-color: hsl(var(--destructive));
}

.ui-textarea-error-state:focus {
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive) / 0.3);
}

/* Messages */
.ui-textarea-message {
  font-size: 0.75rem;
  margin: 0;
  font-family: var(--font-sans);
}

.ui-textarea-helper {
  color: hsl(var(--muted-foreground));
}

.ui-textarea-error {
  color: hsl(var(--destructive));
}
</style>
