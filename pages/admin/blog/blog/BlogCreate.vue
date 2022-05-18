<template>
  <BlogForm>
    <template v-slot:title>
      <h3 class="fw-bolder m-0">{{ $t('messages.blogs.create') }}</h3>
    </template>
  </BlogForm>
</template>

<script>
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module"
import {useStore} from "vuex";
import {onMounted} from "vue";
import BlogForm from "./BlogForm";

export default {
  name: 'BlogCreate',
  components: {BlogForm},
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch(SET_BREADCRUMB, [
        {title: 'dashboard', route: "admin.dashboard"},
        {title: 'blogs', route: "admin.blogs"},
        {title: 'messages.blogs.create'},
      ])
    })

  }
}
</script>
