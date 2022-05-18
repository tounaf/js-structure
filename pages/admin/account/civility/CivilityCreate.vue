<template>
  <CivilityForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.civilities.create') }}</h3>
    </template>
  </CivilityForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import CivilityForm from "./CivilityForm";

export default {
  name: 'CivilityCreate',
  components: {CivilityForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'civilities', route: "admin.civilities"},
        {title: 'messages.civilities.create'},
      ])
    })

  }
}
</script>
