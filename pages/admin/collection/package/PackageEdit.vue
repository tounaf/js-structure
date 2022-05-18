<template>
  <PackageForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.packages.edit') }}</h3>
    </template>
  </PackageForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import PackageForm from "./PackageForm";

export default {
  name: 'PackageEdit',
  components: {PackageForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'packages', route: "admin.packages"},
        {title: 'messages.packages.edit'},
      ])
    })

  }
}
</script>
