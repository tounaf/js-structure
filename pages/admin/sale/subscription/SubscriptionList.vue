<template>
    <div class="content d-flex flex-column flex-column-fluid vh-100" id="kt_content">
        <!--begin::Toolbar-->
        <ToolBar>
            <!--begin::Button-->
            <button
                type="button"
                @click="loadModels"
                class="btn btn-sm btn-flex btn-light fw-bolder me-2">
                {{ $t('refresh') }}
            </button>
            <!--end::Button-->
        </ToolBar>
        <!--end::Toolbar-->

        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container-fluid">

                <!--begin::Card-->
                <div class="card">

                    <!--begin::Card header-->
                    <div class="card-header border-0 pt-6">
                        <!--begin::Card title-->
                        <div class="card-title" v-if="false">
                            <InputSearch v-model="search" />
                        </div>
                        <!--begin::Card title-->
                        <!--begin::Card toolbar-->
                        <div class="card-toolbar flex-row-fluid justify-content-end gap-5">

                            <!--begin::Dates-->
                            <div class="input-group mw-250px">
                                <InputDateRange :placeholder="$t('messages.select.date_range')" v-model="dates" />
                            </div>
                            <!--end::Dates-->

                            <!--begin::Status-->
                            <div class="w-100 mw-250px">
                                <select v-model="status" class="form-select form-select-solid" data-control="select2" data-hide-search="true" :data-placeholder="$t('status')" data-kt-ecommerce-order-filter="status">
                                    <option :value="null">{{ $t('all') }}</option>
                                    <option value="complete">{{ $t('complete') }}</option>
                                </select>
                            </div>
                            <!--end::Status-->
                        </div>
                        <!--end::Card toolbar-->
                    </div>
                    <!--end::Card header-->

                    <!--begin::Card body-->
                    <div class="card-body pt-0">

                        <!--begin::Table-->
                        <table class="table align-middle table-row-dashed fs-6 gy-5">
                            <!--begin::Table head-->
                            <thead>
                            <!--begin::Table row-->
                            <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                <th class="min-w-125px">{{ $t('product') }}</th>
                                <th class="min-w-125px">{{ $t('account') }}</th>
                                <th class="min-w-125px">{{ $t('sale.order') }}</th>
                                <th class="min-w-125px">{{ $t('duration') }}</th>
                                <th class="min-w-125px">{{ $t('start_at') }}</th>
                                <th class="min-w-125px">{{ $t('end_at') }}</th>
                                <th class="text-end min-w-125px">{{ $t('actions') }}</th>
                            </tr>
                            <!--end::Table row-->
                            </thead>
                            <!--end::Table head-->
                            <!--begin::Table body-->
                            <tbody class="fw-bold text-gray-600" v-if="models && models.length">
                            <template
                                v-for="(model, index) in models"
                                :key="model.id"
                                :id="`table-row-${model.id}`"
                            >
                                <!--begin::Principal-->
                                <tr :class="{'border-bottom-0': model.expanded}">
                                    <!--begin::Product=-->
                                    <td>
                                        <router-link v-if="model.version" :to="{name: 'admin.versions.view', params:{id: model.version.id}}" class="d-flex align-models-center">
                                            <div class="d-flex align-items-center">
                                                <!--begin::Avatar-->
                                                <div class="mw-50px me-5">
                                                    <img :src="$filters.vignette('version', model.version.mid)" class="w-100" alt="">
                                                </div>
                                                <!--end::Avatar-->
                                                <!--begin::Text-->
                                                <div class="flex-grow-1">
                                                    <a href="#" class="text-dark fw-bolder text-hover-primary fs-6">{{ model.version.name }}</a>
                                                    <span class="text-muted d-block fw-bold">{{ model.version.mid }}</span>
                                                </div>
                                                <!--end::Text-->
                                            </div>
                                        </router-link>
                                        <router-link v-else-if="model.package" :to="{name: 'admin.packages.view', params:{id: model.package.id}}">
                                            <div class="text-muted fs-6 fw-bolder">{{ $t('package') }}</div>
                                            <div class="text-dark fs-6 fw-bolder text-hover-primary">{{ model.package.name }}</div>
                                        </router-link>
                                    </td>
                                    <!--end::Product=-->
                                    <!--begin::Account=-->
                                    <td>
                                        <router-link v-if="model.order && model.order.account" :to="{name: 'admin.customers.view', params:{id: model.order.account.id}}" class="d-flex align-items-center">
                                            <div class="d-flex justify-content-start flex-column">
                                                <span class="text-dark fw-bolder text-hover-primary fs-6">{{ model.order.account.name }}</span>
                                            </div>
                                        </router-link>
                                    </td>
                                    <!--end::Account=-->
                                    <!--begin::Order=-->
                                    <td>
                                        <router-link v-if="model.order" :to="{name: 'admin.orders.view', params:{id: model.order.id}}" class="d-flex align-items-center">
                                            <div class="d-flex justify-content-start flex-column">
                                                <span class="text-dark fw-bolder text-hover-primary fs-6">{{ model.order.id }}</span>
                                            </div>
                                        </router-link>
                                    </td>
                                    <!--end::Order=-->
                                    <!--begin::Duration=-->
                                    <td>
                                        <router-link v-if="model.duration" :to="{name: 'admin.durations.view', params:{id: model.duration.id}}" class="d-flex align-items-center">
                                            <div class="d-flex justify-content-start flex-column">
                                                <span class="text-dark fw-bolder text-hover-primary fs-6">{{ model.duration.name }}</span>
                                            </div>
                                        </router-link>
                                    </td>
                                    <!--end::Duration=-->
                                    <!--begin::Start=-->
                                    <td>
                                        <span class="text-dark text-hover-primary">{{ $filters.formatDate(model.start_at) }}</span>
                                    </td>
                                    <!--end::Start=-->
                                    <!--begin::End=-->
                                    <td>
                                        <span class="text-dark text-hover-primary">{{ $filters.formatDate(model.end_at) }}</span>
                                    </td>
                                    <!--end::End=-->
                                    <!--begin::Action=-->
                                    <td class="text-end">
                                        <button v-if="model.children && model.children.length" @click="toggle(model)" type="button" class="btn btn-sm btn-icon btn-light btn-active-light-primary me-2">
                                            <!--begin::Svg Icon | path: icons/duotune/arrows/arr087.svg-->
                                            <span v-if="!model.expanded" class="svg-icon svg-icon-3 m-0">
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
                                    <!--end::Action=-->
                                </tr>
                                <!--end::Principal=-->

                                <!--begin::Children-->
                                <SubSubscriptionList v-if="model.expanded" :models="model.children" />
                                <!--end::Children=-->

                            </template>
                            </tbody>
                            <tbody v-else class="fw-bold text-gray-600">
                            <tr class="odd">
                                <td colspan="9">{{ $t('no_subscription_found') }}</td>
                            </tr>
                            </tbody>
                            <!--end::Table body-->
                        </table>
                        <!--end::Table-->

                        <Pagination v-model="page" @changePerPage="changePerPage" :meta="meta"></Pagination>
                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Card-->

            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
</template>

<script>
import {computed, ref, nextTick, onMounted, watch} from "vue";
import ToolBar from "../../../../layouts/admin/content/ToolBar";
import {useI18n} from "vue-i18n";
import ApiService from "../../../../services/api.service";
import SubSubscriptionList from "./SubSubscriptionList";
import {useStore} from "vuex";
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";

export default {
    name: 'SubscriptionList',
    components: {SubSubscriptionList, ToolBar},
    setup(){
        const { t } = useI18n()
        const store = useStore()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'subscriptions'},
            ])
        })

        const models = ref([])
        const selected = ref([])
        const selectAll = ref(false)
        const page = ref(1)
        const per_page = ref(null)
        const meta = ref(null)
        const search = ref(null)
        const status = ref(null)
        const dates = ref(null)

        const params = computed(() => {
            let data = {}
            if(per_page.value){
                data['per-page'] = per_page.value
            }
            if(search.value){
                data['s'] = search.value
            }
            if(status.value){
                data['status'] = status.value
            }
            if(dates.value){
                const values = dates.value.split(' to ')
                data['start'] = values[0] ? values[0] : null
                data['end'] = values[1] ? values[1] : null
            }
            return data
        })

        watch(() => params.value, () => {
            page.value = 1
            loadModels()
        })

        watch(() => page.value, () => {
            loadModels()
        })

        const changePerPage = (value) => {
            per_page.value = value
        }

        const loadModels = () => {
            const query = params.value
            query.page = page.value
            ApiService.get('/subscriptions', {params: query}, true)
                .then(({data}) => {
                    if(data.success) {
                        models.value = data.data
                        meta.value = data.meta
                    }
                    nextTick(function(){ KTMenu.createInstances(); });
                })
        }

        onMounted(loadModels)

        const handleDelete = (model) => {
            Swal.fire({
                title: t('messages.confirm.delete'),
                icon: "error",
                showCancelButton: true,
                cancelButtonText: t('cancel'),
                confirmButtonText: t('yes'),
            }).then((result) => {
                if (result.isConfirmed) {
                    ApiService.delete('/subscriptions/' + model.id)
                        .then(response => {
                            if(response.data.success){
                                loadModels()
                            }
                        })
                }
            })
        }

        const handleMassDelete = () => {
            Swal.fire({
                title: t('messages.confirm.mass_delete'),
                icon: "error",
                showCancelButton: true,
                cancelButtonText: t('cancel'),
                confirmButtonText: t('yes'),
            }).then((result) => {
                if (result.isConfirmed) {
                    let data = []
                    selected.value.forEach(function (item){
                        data.push(item.id)
                    })
                    ApiService.delete('/subscriptions', {data: {subscriptions: data}})
                        .then(response => {
                            if(response.data.success){
                                selectAll.value = false
                                selected.value = []
                                loadModels()
                            }
                        })
                }
            })
        }

        watch(selectAll, (value) => {
            selected.value = []
            if(value){
                selected.value = [...models.value]
            }
        })

        const toggle = (item) => {
            item.expanded = !item.expanded
        }

        return {
            models,
            selected,
            selectAll,
            page,
            meta,
            search,
            status,
            dates,
            loadModels,
            handleDelete,
            handleMassDelete,
            changePerPage,
            toggle,
        }
    }
}
</script>
