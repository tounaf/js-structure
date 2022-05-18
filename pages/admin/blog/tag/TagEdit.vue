<template>
  <TagForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.tags.edit') }}</h3>
    </template>
  </TagForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import TagForm from "./TagForm";

export default {
  name: 'TagEdit',
  components: {TagForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'tags', route: "admin.blog.tags"},
        {title: 'messages.tags.edit'},
      ])
    })

  }
}
</script>
