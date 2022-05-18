<template>
  <CurrencyForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.currencies.edit') }}</h3>
    </template>
  </CurrencyForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import CurrencyForm from "./CurrencyForm";

export default {
  name: 'CurrencyEdit',
  components: {CurrencyForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'currencies', route: "admin.currencies"},
        {title: 'messages.currencies.edit'},
      ])
    })

  }
}
</script>
