<template>
    <!--begin::Content-->
    <div v-if="model" class="content d-flex flex-column flex-column-fluid" id="kt_content">

        <!--begin::Toolbar-->
        <ToolBar>
        </ToolBar>
        <!--end::Toolbar-->
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div  id="kt_content_container" class="container-fluid">
                <!--begin::Navbar-->
                <div class="card mb-6 mb-xl-9">
                    <div class="card-body pt-9 pb-0">
                        <!--begin::Details-->
                        <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
                            <!--begin::Image-->
                            <div class="d-flex flex-center flex-shrink-0 w-150px me-7 mb-4">
                                <img class="w-100" :src="$filters.vignette('issue', model.issue.mid)" alt="image">
                            </div>
                            <!--end::Image-->
                            <!--begin::Wrapper-->
                            <div class="flex-grow-1">
                                <!--begin::Info-->
                                <div class="d-flex flex-wrap justify-content-start">
                                    <!--begin::Stats-->
                                    <div class="d-flex flex-wrap">
                                        <!--begin::Stat-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div class="d-flex align-items-center">
                                                <div class="fs-4 fw-bolder">{{ $filters.formatDateTime(model.created_at) }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('date') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Stat-->
                                        <!--begin::Ip-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div class="d-flex align-items-center">
                                                <div class="fs-4 fw-bolder">{{ model.ip }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('ip') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Ip-->
                                        <!--begin::Lifetime-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div class="d-flex align-items-center">
                                                <div class="fs-4 fw-bolder">{{ model.lifetime }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('lifetime') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Lifetime-->
                                        <!--begin::Number-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div class="d-flex align-items-center">
                                                <router-link v-if="model.issue" :to="{name: 'admin.issues.view', params:{id: model.issue.id}}">
                                                    <div class="text-dark text-hover-primary fs-4 fw-bolder">{{ model.issue.name }}</div>
                                                </router-link>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('number') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Number-->
                                        <!--begin::User-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::AccountName-->
                                            <div class="d-flex align-items-center">
                                                <router-link v-if="model.user && model.user.account" :to="{name: 'admin.customers.view', params:{id: model.user.account.id}}">
                                                    <div class="text-dark text-hover-primary fs-4 fw-bolder">{{ model.user.username }}</div>
                                                </router-link>
                                            </div>
                                            <!--end::AccountName-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('email') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::UserEmail-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::AccountEmail-->
                                            <div class="d-flex align-items-center">
                                                <router-link v-if="model.user && model.user.account" :to="{name: 'admin.customers.view', params:{id: model.user.account.id}}">
                                                    <div class="text-dark text-hover-primary fs-4 fw-bolder">{{ model.user.account.name }}</div>
                                                </router-link>
                                            </div>
                                            <!--end::AccountEmail-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('user') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::UserEmail-->
                                    </div>
                                    <!--end::Stats-->
                                </div>
                                <!--end::Info-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Details-->

                    </div>
                </div>
                <!--end::Navbar-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->

    </div>
    <!--end::Content-->
</template>

<script>
import ToolBar from "../../../../layouts/admin/content/ToolBar";
import {useStore} from "vuex";
import {ref, onMounted} from "vue";
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";
import {useI18n} from "vue-i18n";
import ApiService from "../../../../services/api.service";
import {useRoute} from "vue-router";

export default {
    name: 'TicketView',
    components: {ToolBar},
    setup(){
        const store = useStore()
        const route = useRoute()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'tickets', route: 'admin.tickets'},
                {title: 'ticket'},
            ])
        })

        const model = ref(null)
        const loadModel = () => {
            ApiService.get('/tickets/' + route.params.id)
                .then(({data}) => {
                    if(data.success) {
                        model.value = data.data
                    }
                })
        }
        onMounted(loadModel)

        const isActive = (name) => {
            return route.name === name;
        }

        return {
            model,
            loadModel,
            isActive,
        }
    }
}



</script>
