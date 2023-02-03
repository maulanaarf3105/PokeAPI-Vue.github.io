<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 text-grey-8">
        Basic
      </div>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <q-table
        title="Treats"
        :rows="data"
        :columns="columns"
        row-key="name"
        :filter="filter"
      >
        <template v-slot:top-right>
          <q-input v-if="show_filter" filled borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search"/>
            </template>
          </q-input>

          <q-btn class="q-ml-sm" icon="filter_list" @click="show_filter=!show_filter" flat/>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import {defineComponent, ref} from 'vue'


const data = [
  
];

export default defineComponent({
  name: "TableBasic",
  setup() {
    const show_filter = ref(false)

    return {
      filter: ref(''),
      show_filter,
      data,
      columns
    }
  }
})
</script>

<style scoped>

</style>
