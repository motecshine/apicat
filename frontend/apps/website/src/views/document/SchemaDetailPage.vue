<template>
  <div class="ac-header-operate" v-if="hasDocument && definition">
    <div class="ac-header-operate__main">
      <p class="ac-header-operate__title">{{ definition.name }}</p>
    </div>

    <div class="ac-header-operate__btns">
      <el-button type="primary" @click="() => goSchemaEditPage()">{{ $t('app.common.edit') }}</el-button>
    </div>
  </div>

  <Result v-show="!hasDocument && !isLoading">
    <template #icon>
      <img class="h-auto w-260px mb-26px" src="@/assets/images/icon-empty.png" alt="" />
    </template>
  </Result>

  <div :class="[ns.b(), { 'h-20vh': !definition && hasDocument }]" v-loading="isLoading">
    <SchmaEditor v-if="definition" :readonly="true" v-model="definition" :definitions="definitions" />
  </div>
</template>
<script setup lang="ts">
import SchmaEditor from './components/SchemaEditor.vue'
import { getDefinitionSchemaDetail } from '@/api/definitionSchema'
import { DefinitionSchema } from '@/components/APIEditor/types'
import { useNamespace } from '@/hooks'
import { useGoPage } from '@/hooks/useGoPage'
import { useParams } from '@/hooks/useParams'
import useDefinitionStore from '@/store/definition'
import { storeToRefs } from 'pinia'

const ns = useNamespace('document')
const route = useRoute()
const definitionStore = useDefinitionStore()
const { definitions } = storeToRefs(definitionStore)
const [isLoading, getDefinitionDetailApi] = getDefinitionSchemaDetail()
const { project_id } = useParams()
const { goSchemaEditPage } = useGoPage()
const definition = ref<DefinitionSchema | null>(null)
const hasDocument = ref(true)

const getDetail = async () => {
  const def_id = parseInt(route.params.shcema_id as string, 10)

  if (isNaN(def_id)) {
    hasDocument.value = false
    return
  }
  hasDocument.value = true
  const data = await getDefinitionDetailApi({ project_id, def_id })

  Object.defineProperty(data.schema, '_id', {
    value: data.id,
    enumerable: false,
    configurable: false,
    writable: false,
  })
  definition.value = data
}

definitionStore.$onAction(({ name, after, args }) => {
  // 删除全局模型
  if (name === 'deleteDefinition' && args[1] !== parseInt(route.params.shcema_id as string, 10)) {
    after(() => getDetail())
  }
})

watch(
  () => route.params.shcema_id,
  async () => await getDetail(),
  { immediate: true }
)
</script>
