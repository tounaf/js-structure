<template>
  <PageForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.pages.create') }}</h3>
    </template>
  </PageForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import PageForm from "./PageForm";

export default {
  name: 'PageCreate',
  components: {PageForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'pages', route: "admin.pages"},
        {title: 'messages.pages.create'},
      ])
    })

  }
}
</script>
