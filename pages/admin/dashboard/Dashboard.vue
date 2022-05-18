<template>
    <div class="content d-flex flex-column flex-column-fluid vh-100" id="kt_content">
        <!--begin::Toolbar-->
        <ToolBar />
        <!--end::Toolbar-->

        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container-fluid">

            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
</template>

<script>
import ToolBar from "../../../layouts/admin/content/ToolBar";
import {useStore} from "vuex";
import {onMounted} from "vue";
import {SET_BREADCRUMB} from "../../../services/store/breadcrumbs.module";
export default {
    name: 'AdminDashboard',
    components: {ToolBar},
    setup() {
        const store = useStore()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard'},
            ])
        })
    }
}
</script>
