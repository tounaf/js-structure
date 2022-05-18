<template>
  <LocalisationForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.localisations.edit') }}</h3>
    </template>
  </LocalisationForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import LocalisationForm from "./LocalisationForm";

export default {
  name: 'LocalisationEdit',
  components: {LocalisationForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'localisations', route: "admin.localisations"},
        {title: 'messages.localisations.edit'},
      ])
    })

  }
}
</script>
