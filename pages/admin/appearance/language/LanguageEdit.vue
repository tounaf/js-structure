<template>
  <LanguageForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.languages.edit') }}</h3>
    </template>
  </LanguageForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import LanguageForm from "./LanguageForm";

export default {
  name: 'LanguageEdit',
  components: {LanguageForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'languages', route: "admin.languages"},
        {title: 'messages.languages.edit'},
      ])
    })

  }
}
</script>
