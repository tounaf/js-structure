<template>
    <div class="content d-flex flex-column flex-column-fluid vh-100" id="kt_content">
        <!--begin::Toolbar-->
        <ToolBar>
            <!--begin::Button-->
            <button
                @click="loadModels"
                type="button"
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
                        <div class="card-title">
                            <InputSearch v-model="search" />
                        </div>
                        <!--begin::Card title-->

                        <!--begin::Card toolbar-->
                        <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
                            <!--begin::Titles-->
                            <div class="w-100 mw-250px">
                                <InputAjaxSelect url="/api/v1/admin/publishers" name="publisher" :placeholder="$t('messages.select.publisher')" class="mb-0" v-model="publisher" :rules="{}" />
                            </div>
                            <!--end::Titles-->

                            <!--begin::Status-->
                            <div class="w-100 mw-250px">
                                <InputStatusSelect  v-model="status" />
                            </div>
                            <!--end::Status-->
                        </div>
                        <!--end::Card toolbar-->
                    </div>
                    <!--end::Card header-->

                    <!--begin::Card body-->
                    <div class="card-body pt-0">

                        <div v-if="selected.length > 0">
                            <button @click="handleMassDelete()" class="btn btn-sm btn-danger">
                                {{ $t('delete') }} ({{ selected.length }})
                            </button>
                        </div>

                        <!--begin::Table-->
                        <table class="table align-middle table-row-dashed fs-6 gy-5">
                            <!--begin::Table head-->
                            <thead>
                            <!--begin::Table row-->
                            <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                <th class="w-10px pe-2">
                                    <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                        <input class="form-check-input" type="checkbox" v-model="selectAll" />
                                    </div>
                                </th>
                                <th class="min-w-125px">{{ $t('name') }}</th>
                                <th class="min-w-125px">{{ $t('publisher') }}</th>
                                <th class="min-w-125px">{{ $t('versions_count') }}</th>
                                <th class="min-w-125px">{{ $t('status') }}</th>
                                <th class="min-w-125px">{{ $t('external_id') }}</th>
                                <th class="min-w-125px text-end">{{ $t('actions') }}</th>
                            </tr>
                            <!--end::Table row-->
                            </thead>
                            <!--end::Table head-->
                            <!--begin::Table body-->
                            <tbody class="fw-bold text-gray-600" v-if="models && models.length">
                            <tr
                                v-for="(model, index) in models"
                                :key="model.id"
                                :id="`table-row-${model.id}`">
                                <!--begin::Checkbox-->
                                <td>
                                    <div class="form-check form-check-sm form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" v-model="selected" :value="model" />
                                    </div>
                                </td>
                                <!--end::Checkbox-->
                                <!--begin::Name=-->
                                <td>
                                    <router-link :to="{name: 'admin.titles.view', params:{id: model.id}}" class="d-flex align-items-center">
                                        <div class="d-flex align-items-center mb-7">
                                            <!--begin::Avatar-->
                                            <div class="mw-50px me-5">
                                                <img :src="$filters.vignette('title', model.mid)" class="w-100" alt="">
                                            </div>
                                            <!--end::Avatar-->
                                            <!--begin::Text-->
                                            <div class="flex-grow-1">
                                                <a href="#" class="text-dark fw-bolder text-hover-primary fs-6">{{ model.name }}</a>
                                                <span class="text-muted d-block fw-bold">{{ model.mid }}</span>
                                            </div>
                                            <!--end::Text-->
                                        </div>
                                    </router-link>
                                </td>
                                <!--end::Name=-->
                                <!--begin::Publisher=-->
                                <td>
                                    <router-link v-if="model.publisher" :to="{name: 'admin.publishers.view', params:{id: model.publisher.id}}" class="d-flex align-items-center">
                                        <div class="d-flex justify-content-start flex-column">
                                            <span class="text-dark fw-bolder text-hover-primary fs-6">{{ model.publisher.name }}</span>
                                        </div>
                                    </router-link>
                                </td>
                                <!--end::Publisher=-->
                                <!--begin::Versions Count=-->
                                <td>
                                    <router-link :to="{name: 'admin.titles.view', params:{id: model.id}}" class="text-dark text-hover-primary fs-6">{{ $tc('count.versions', model.versions_count) }}</router-link>
                                </td>
                                <!--end::Versions Count=-->
                                <!--begin::Status=-->
                                <td>
                                    <span
                                        v-if="model.status"
                                        class="badge"
                                        :class="{
                                        'badge-light-success': model.status === 'publish',
                                        'badge-light-danger': model.status === 'draft',
                                    }">
                                        {{ $t(model.status) }}
                                    </span>
                                </td>
                                <!--end::Status=-->
                                <!--begin::External_ID=-->
                                <td>
                                    <span class="text-dark text-hover-primary fs-6">{{ model.external_id }}</span>
                                </td>
                                <!--end::External_ID=-->
                                <!--begin::Action=-->
                                <td class="text-end">
                                    <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
                                        <!--begin::Svg Icon-->
                                        <span class="svg-icon svg-icon-5 m-0">
                                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                              <polygon points="0 0 24 0 24 24 0 24" />
                                              <path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)" />
                                            </g>
                                          </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </a>
                                    <!--begin::Menu-->
                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                                        <!--begin::Menu item-->
                                        <div class="menu-item px-3">
                                            <router-link :to="{name: 'admin.titles.view', params: {id: model.id}}" class="menu-link px-3">{{ $t('view') }}</router-link>
                                        </div>
                                        <!--end::Menu item-->
                                        <!--begin::Menu item-->
                                        <div class="menu-item px-3">
                                            <a href="#" @click="handleDelete(model)" class="menu-link text-danger px-3">{{ $t('delete') }}</a>
                                        </div>
                                        <!--end::Menu item-->
                                    </div>
                                    <!--end::Menu-->
                                </td>
                                <!--end::Action=-->
                            </tr>
                            </tbody>
                            <tbody v-else class="fw-bold text-gray-600">
                            <tr class="odd">
                                <td colspan="7">{{ $t('no_title_found') }}</td>
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
    import {useStore} from "vuex";
    import {computed, ref, nextTick, onMounted, watch} from "vue";
    import ToolBar from "../../../../layouts/admin/content/ToolBar";
    import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";
    import {useI18n} from "vue-i18n";
    import ApiService from "../../../../services/api.service";
    export default {
        name: 'TitleList',
        components: {ToolBar},
        setup(){
            const store = useStore()

            onMounted(() => {
                store.dispatch(SET_BREADCRUMB, [
                    {title: 'dashboard', route: 'admin.dashboard'},
                    {title: 'titles'},
                ])
            })

            const { t } = useI18n()

            const models = ref([])
            const selected = ref([])
            const selectAll = ref(false)
            const page = ref(1)
            const per_page = ref(null)
            const meta = ref(null)
            const search = ref(null)
            const publisher = ref(null)
            const status = ref(null)

            const params = computed(() => {
                let data = {}
                if(per_page.value){
                    data['per-page'] = per_page.value
                }
                if(search.value){
                    data['s'] = search.value
                }
                if(publisher.value){
                    data['publisher'] = publisher.value
                }
                if(status.value){
                    data['status'] = status.value
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
                ApiService.get('/titles', {params: query}, true)
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
                        ApiService.delete('/title/' + model.id)
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
                        ApiService.delete('/titles', {data: {titles: data}})
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

            return {
                models,
                selected,
                selectAll,
                page,
                meta,
                search,
                publisher,
                status,
                loadModels,
                handleDelete,
                handleMassDelete,
                changePerPage,
            }
        }
    }
</script>
