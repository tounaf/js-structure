<template>
  <TranslationForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.translations.create') }}</h3>
    </template>
  </TranslationForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import TranslationForm from "./TranslationForm";

export default {
  name: 'TranslationCreate',
  components: {TranslationForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'translations', route: "admin.translations"},
        {title: 'messages.translations.create'},
      ])
    })

  }
}
</script>
