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
            <div id="kt_content_container" class="container-fluid">
                <!--begin::Layout-->
                <div class="d-flex flex-column flex-xl-row">
                    <!--begin::Sidebar-->
                    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
                        <!--begin::Card-->
                        <div v-if="model.account" class="card mb-5 mb-xl-8">
                            <!--begin::Card body-->
                            <div class="card-body pt-15">
                                <!--begin::Summary-->
                                <div class="d-flex flex-center flex-column mb-5">
                                    <!--begin::Name-->
                                    <a href="#" class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-1">{{ model.account.name }}</a>
                                    <!--end::Name-->
                                    <!--begin::Position-->
                                    <div class="fs-5 fw-bold text-muted mb-6">{{ $t(model.account.role) }}</div>
                                    <!--end::Position-->
                                </div>
                                <!--end::Summary-->
                            </div>
                            <!--end::Card body-->
                        </div>
                        <!--end::Card-->

                        <!--begin::Connected Accounts-->
                        <div v-if="model.account && model.account.users" class="card mb-5 mb-xl-8">
                            <!--begin::Card header-->
                            <div class="card-header border-0">
                                <div class="card-title">
                                    <h3 class="fw-bolder m-0">Accès</h3>
                                </div>
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body pt-2">
                                <!--begin::Items-->
                                <div v-for="user in model.account.users" class="py-2">
                                    <!--begin::Item-->
                                    <div class="d-flex flex-stack">
                                        <div class="d-flex">
                                            <div class="d-flex flex-column">
                                                <a href="#" class="fs-5 text-dark text-hover-primary fw-bolder">{{ user.username }}</a>
                                                <div class="fs-6 fw-bold text-muted">{{ $t(user.type) }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Item-->
                                </div>
                                <!--end::Items-->
                            </div>
                            <!--end::Card body-->
                        </div>
                        <!--end::Connected Accounts-->
                    </div>
                    <!--end::Sidebar-->

                    <!--begin::Content-->
                    <div class="flex-lg-row-fluid ms-lg-15">
                        <!--begin:::Tab content-->
                        <div class="tab-content">
                            <!--begin::Card-->
                            <div class="card">
                                <!--begin::Card body-->
                                <div class="card-body">
                                    <!--begin::Table-->
                                    <table class="table align-middle table-row-dashed fs-6 gy-5">
                                        <!--begin::Table body-->
                                        <tbody class="fw-bold text-gray-600" v-if="model.subscriptions && model.subscriptions.length">
                                            <!--begin::Children-->
                                            <SubscriptionList :models="model.subscriptions" />
                                            <!--end::Children=-->
                                        </tbody>
                                        <tbody v-else class="fw-bold text-gray-600">
                                        <tr class="odd">
                                            <td colspan="9">{{ $t('no_subscription_found') }}</td>
                                        </tr>
                                        </tbody>
                                        <!--end::Table body-->
                                    </table>
                                    <!--end::Table-->
                                </div>
                                <!--end::Card body-->
                            </div>
                            <!--end::Card-->
                        </div>
                        <!--end:::Tab content-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Layout-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->

    </div>
    <!--end::Content-->
</template>

<script>
import ToolBar from "../../../../layouts/admin/content/ToolBar";
import {ref, onMounted} from "vue";
import ApiService from "../../../../services/api.service";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";
import SubscriptionList from "./SubscriptionList";

export default {
    name: 'OrderView',
    components: {SubscriptionList, ToolBar},
    setup(){
        const route = useRoute()
        const store = useStore()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'sale.orders', route: 'admin.orders'},
                {title: 'messages.orders.view'},
            ])
        })

        const model = ref(null)
        const loadModel = () => {
            model.value = null
            if(!route.params.id){
                return;
            }
            ApiService.get('/orders/' + route.params.id)
                .then(({data}) => {
                    if(data.success) {
                        model.value = data.data
                    }
                })
        }
        onMounted(loadModel)

        return {
            model,
            loadModel,
        }
    }
}
</script>
