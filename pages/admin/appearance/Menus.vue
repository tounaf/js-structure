<template>
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid vh-100" id="kt_content">

        <ToolBar>
            <!--begin::Buttons-->

            <!--end::Buttons-->
        </ToolBar>

        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container-fluid">

            </div>
        </div>
    </div>
</template>

<script>
    import ToolBar from "../../../layouts/admin/content/ToolBar";
    import {nextTick, onMounted, ref} from "vue";
    import {SET_BREADCRUMB} from "../../../services/store/breadcrumbs.module";
    import {useStore} from "vuex";
    import ApiService from "../../../services/api.service";

    export default {
        name: 'Menus',
        components: {ToolBar},
        setup(){
            const store = useStore()

            onMounted(() => {
                store.dispatch(SET_BREADCRUMB, [
                    {title: 'dashboard', route: "admin.dashboard"},
                    {title: 'menus'},
                ])
            })

            const models = ref([])
            const loadModels = () => {
                ApiService.get('/navigations', {params: {'per-page': -1}}, true)
                    .then(({data}) => {
                        if(data.success) {
                            models.value = data.data
                        }
                    })
            }
            onMounted(loadModels)

            const model = ref(null)

            return {
                model,
                models,
            }

        }
    }
</script>
