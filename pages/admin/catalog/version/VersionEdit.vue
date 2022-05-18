<template>
  <VersionForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.versions.edit') }}</h3>
    </template>
  </VersionForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import VersionForm from "./VersionForm";

export default {
  name: 'VersionEdit',
  components: {VersionForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'versions', route: "admin.versions"},
        {title: 'messages.versions.edit'},
      ])
    })

  }
}
</script>
