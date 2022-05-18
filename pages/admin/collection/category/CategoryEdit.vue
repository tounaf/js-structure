<template>
  <CategoryForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.categories.edit') }}</h3>
    </template>
  </CategoryForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import CategoryForm from "./CategoryForm";

export default {
  name: 'CategoryEdit',
  components: {CategoryForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'categories', route: "admin.categories"},
        {title: 'messages.categories.edit'},
      ])
    })

  }
}
</script>
