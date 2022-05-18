<template>
    <div v-if="model" class="modal fade show d-block" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Détail de commande</h5>
                    <!--begin::Close-->
                    <router-link :to="{name: 'admin.orders'}" class="btn btn-icon btn-sm btn-active-light-primary ms-2">
                        <span class="svg-icon svg-icon-2x"></span>
                    </router-link>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <!--begin::Table-->
                    <table class="table align-middle table-row-dashed fs-6 gy-5">
                        <!--begin::Table head-->
                        <thead>
                        <!--begin::Table row-->
                        <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                            <th class="min-w-125px">{{ $t('product') }}</th>
                            <th class="min-w-125px">{{ $t('start_at') }}</th>
                            <th class="min-w-125px">{{ $t('end_at') }}</th>
                            <th class="min-w-125px text-end"></th>
                        </tr>
                        <!--end::Table row-->
                        </thead>
                        <!--end::Table head-->
                        <!--begin::Table body-->
                        <tbody class="fw-bold text-gray-600" v-if="model.subscriptions && model.subscriptions.length">
                        <template
                            v-for="item in model.subscriptions"
                            :key="item.id"
                            :id="`table-row-${item.id}`">
                            <tr>
                                <!--begin::Product=-->
                                <td>
                                    <router-link v-if="item.version" :to="{name: 'admin.versions.view', params:{id: item.version.id}}" class="d-flex align-items-center">
                                        <span>{{ item.version.name }}</span>
                                    </router-link>
                                    <router-link v-else-if="item.package" :to="{name: 'admin.packages.view', params:{id: item.package.id}}" class="d-flex align-items-center">
                                        <span>{{ item.package.name }}</span>
                                    </router-link>
                                </td>
                                <!--end::Product=-->
                                <!--begin::Start=-->
                                <td>
                                    <span>{{ $filters.formatDate(item.start_at) }}</span>
                                </td>
                                <!--end::Start=-->
                                <!--begin::End=-->
                                <td>
                                    <span>{{ $filters.formatDate(item.end_at) }}</span>
                                </td>
                                <!--end::End=-->
                                <!--begin::Actions=-->
                                <td class="text-end">
                                    <button @click="toggle(item)" type="button" class="btn btn-sm btn-icon btn-light btn-active-light-primary h-25px w-25px">
                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr087.svg-->
                                        <span v-if="!item.expanded" class="svg-icon svg-icon-3 m-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr089.svg-->
                                        <span v-else class="svg-icon svg-icon-3 m-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </button>
                                </td>
                                <!--end::Actions=-->
                            </tr>
                            <tr
                                v-if="item.expanded"
                                v-for="child in item.children"
                                :key="child.id"
                                :id="`table-row-${item.id}-${child.id}`">
                                <!--begin::Product=-->
                                <td>
                                    <router-link v-if="child.version" :to="{name: 'admin.versions.view', params:{id: child.version.id}}" class="d-flex align-items-center">
                                        <span>{{ child.version.name }}</span>
                                    </router-link>
                                    <router-link v-else-if="child.package" :to="{name: 'admin.packages.view', params:{id: child.package.id}}" class="d-flex align-items-center">
                                        <span>{{ child.package.name }}</span>
                                    </router-link>
                                </td>
                                <!--end::Product=-->
                                <!--begin::Start=-->
                                <td>
                                    <span>{{ $filters.formatDate(child.start_at) }}</span>
                                </td>
                                <!--end::Start=-->
                                <!--begin::End=-->
                                <td>
                                    <span>{{ $filters.formatDate(child.end_at) }}</span>
                                </td>
                                <!--end::End=-->
                                <!--begin::Actions=-->
                                <td class="text-end">
                                </td>
                                <!--end::Actions=-->
                            </tr>
                        </template>
                        </tbody>
                        <tbody v-else class="fw-bold text-gray-600">
                        <tr class="odd">
                            <td colspan="3">{{ $t('no_subscription_found') }}</td>
                        </tr>
                        </tbody>
                        <!--end::Table body-->
                    </table>
                    <!--end::Table-->
                </div>

                <div class="modal-footer">
                    <router-link :to="{name: 'admin.orders'}" class="btn btn-light">{{ $t('close') }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ToolBar from "../../../../layouts/admin/content/ToolBar";
import {ref, onMounted, watch} from "vue";
import ApiService from "../../../../services/api.service";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";

export default {
    name: 'SubscriptionView',
    components: {ToolBar},
    setup(){
        const route = useRoute()
        const store = useStore()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'orders'},
            ])
        })

        watch(() => route.params.id, () => { loadModel() })

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

        const isActive = (name) => {
            return route.name === name;
        }

        const toggle = (item) => {
            item.expanded = !item.expanded
        }

        return {
            model,
            loadModel,
            isActive,
            toggle,
        }
    }
}
</script>
