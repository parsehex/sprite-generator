<template>
  <div class="json-viewer-item">
    <div v-if="isObject" @click="toggle" class="item-content">
      <span class="toggle-icon">{{ isExpanded ? '▼' : '▶' }}</span>
      <span class="key">{{ isArray ? `[${(data as any[]).length}]` : '{...}' }}</span>
    </div>
    <div v-if="isExpanded && isObject" class="nested-content">
      <template v-if="isArray">
        <div v-for="(item, index) in data" :key="index" class="array-item">
          <JsonViewerItem :data="item" :depth="depth + 1" />
        </div>
      </template>
      <template v-else>
        <div v-for="(value, key) in data" :key="key" class="object-item">
          <div class="key-line">
            <span class="key">{{ key }}:</span>
          </div>
          <div class="value-line">
            <JsonViewerItem class="inline" :data="value" :depth="depth + 1" />
          </div>
        </div>
      </template>
    </div>
    <span v-if="!isObject" class="primitive" :class="valueType">
      {{ formatValue(data) }}
    </span>
  </div>
</template>
<script lang="ts">
import { copyToClipboard } from '@/utils'
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'JsonViewerItem',
  props: {
    data: {
      type: [Object, Array, String, Number, Boolean],
      required: true,
    },
    depth: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const isExpanded = ref(true)

    const isObject = computed(() => typeof props.data === 'object' && props.data !== null)

    const isArray = computed(() => Array.isArray(props.data))

    const valueType = computed(() => typeof props.data)

    const toggle = () => {
      isExpanded.value = !isExpanded.value
    }

    const formatValue = (value: any): string => {
      if (typeof value === 'string') return `"${value}"`
      return String(value)
    }

    const copyValue = (value: string) => {
      copyToClipboard(value)
    }

    return {
      isExpanded,
      isObject,
      isArray,
      valueType,
      toggle,
      formatValue,
      copyValue,
    }
  },
})
</script>
<style scoped>
.json-viewer-item {
  line-height: 1.5;
}

.item-content {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.toggle-icon {
  font-size: 0.8em;
  margin-right: 4px;
  color: #666;
}

.key {
  color: #881391;
  margin-right: 4px;
  font-weight: bold;
}

.primitive {
  margin-left: 4px;
}

.primitive.string {
  color: #c41a16;
  word-break: break-word;
  white-space: pre-wrap;
}

.primitive.number {
  color: #1a01ff;
}

.primitive.boolean {
  color: #0000ff;
}

.nested-content {
  padding-left: 15px;
}

.array-item,
.object-item {
  display: block;
  margin-top: 4px;
}

.key-line {
  display: inline;
}

.value-line {
  display: inline;
}
</style>
