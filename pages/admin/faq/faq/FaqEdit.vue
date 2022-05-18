<template>
  <FaqForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.faqs.edit') }}</h3>
    </template>
  </FaqForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import FaqForm from "./FaqForm";

export default {
  name: 'FaqEdit',
  components: {FaqForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'faqs', route: "admin.faqs"},
        {title: 'messages.faqs.edit'},
      ])
    })

  }
}
</script>
