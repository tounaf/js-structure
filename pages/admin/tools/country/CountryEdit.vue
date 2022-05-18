<template>
  <CountryForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.countries.edit') }}</h3>
    </template>
  </CountryForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import CountryForm from "./CountryForm";

export default {
  name: 'CountryEdit',
  components: {CountryForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'countries', route: "admin.countries"},
        {title: 'messages.countries.edit'},
      ])
    })

  }
}
</script>
