<template>
    <div class="modal fade">
        <!--begin::Modal dialog-->
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <!--begin::Modal content-->
            <div class="modal-content rounded">
                <!--begin::Modal body-->
                <div class="modal-body">
                    <!--begin::Card-->
                    <div class="card">

                        <!--begin::Card header-->
                        <div class="card-header border-0 pt-6">
                            <!--begin::Card title-->
                            <div class="card-title">
                                <InputSearch v-model="search" />
                            </div>
                            <!--begin::Card title-->
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
                                    <th class="w-10px pe-2">
                                        <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                            <input class="form-check-input" type="checkbox" v-model="selectAll" />
                                        </div>
                                    </th>
                                    <th class="min-w-125px">{{ $t('nice_name') }}</th>
                                    <th class="min-w-125px">{{ $t('iso') }}</th>
                                    <th class="min-w-125px">{{ $t('iso3') }}</th>
                                    <th class="min-w-125px">{{ $t('num_code') }}</th>
                                    <th class="min-w-125px">{{ $t('phone_code') }}</th>
                                    <th class="text-end min-w-125px">{{ $t('actions') }}</th>
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
                                    <!--begin::Nice Name=-->
                                    <td>
                                        <a href="#" class="d-flex align-items-center">
                                            <div class="d-flex justify-content-start flex-column">
                                                <span class="text-dark fw-bolder text-hover-primary fs-6">{{ model.nice_name }}</span>
                                            </div>
                                        </a>
                                    </td>
                                    <!--end::Nice Name=-->
                                    <!--begin::ISO=-->
                                    <td>
                                        <span class="text-dark fw-bolder text-hover-primary fs-6">{{ model.iso }}</span>
                                    </td>
                                    <!--end::ISO=-->
                                    <!--begin::ISO3=-->
                                    <td>
                                        <span class="text-dark fw-bolder text-hover-primary fs-6">{{ model.iso3 }}</span>
                                    </td>
                                    <!--end::ISO3=-->
                                    <!--begin::Num Code=-->
                                    <td>
                                        <span class="text-dark fw-bolder text-hover-primary fs-6">{{ model.num_code }}</span>
                                    </td>
                                    <!--end::Num Code=-->
                                    <!--begin::Phone Code=-->
                                    <td>
                                        <span class="text-dark fw-bolder text-hover-primary fs-6">{{ model.phone_code }}</span>
                                    </td>
                                    <!--end::Phone Code=-->

                                    <!--begin::Action=-->
                                    <td class="text-end">
                                        <a href="#" @click="selectCountry(model)" class="btn btn-light btn-active-light-primary btn-sm">
                                            {{ $t('select') }}
                                        </a>
                                    </td>
                                    <!--end::Action=-->
                                </tr>
                                </tbody>
                                <tbody v-else class="fw-bold text-gray-600">
                                <tr class="odd">
                                    <td colspan="6">{{ $t('no_country_found') }}</td>
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
                <!--end::Modal body-->

                <div class="modal-footer">
                    <button @click="closeCountry" type="button" class="btn btn-light">{{  $t('close') }}</button>
                    <button v-if="selected.length > 0" @click="selectCountries" type="button" class="btn btn-primary">{{ $t('select') }} ({{ selected.length }})</button>
                </div>
            </div>
            <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
    </div>
</template>

<script>
    import {computed, ref, nextTick, onMounted, watch} from "vue";
    import ToolBar from "../../../../layouts/admin/content/ToolBar";
    import ApiService from "../../../../services/api.service";

    export default {
        name: 'CountryModal',
        components: {ToolBar},
        props: {
            excludes: {
                type: Array,
                default: [],
            },
        },
        setup(props, {emit}){
            const models = ref([])
            const selected = ref([])
            const selectAll = ref(false)
            const page = ref(1)
            const per_page = ref(null)
            const meta = ref(null)
            const search = ref(null)

            const params = computed(() => {
                let data = {}
                if(per_page.value){
                    data['per-page'] = per_page.value
                }
                if(search.value){
                    data['s'] = search.value
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

            watch(() => props.excludes, () => {
                loadModels()
            })

            const changePerPage = (value) => {
                per_page.value = value
            }

            const loadModels = () => {
                const query = params.value
                query.page = page.value
                if(props.excludes && props.excludes.length){
                    const excludes = []
                    props.excludes.forEach((item) => {
                        excludes.push(item.id)
                    })
                    query.excludes = excludes.join(',')
                }
                ApiService.get('/countries', {params: query}, true)
                    .then(({data}) => {
                        if(data.success) {
                            models.value = data.data
                            meta.value = data.meta
                        }
                        nextTick(function(){ KTMenu.createInstances(); });
                    })
            }
            onMounted(loadModels)

            const closeCountry = () => {
                emit("close");
            }

            const selectCountry = (model) => {
                let data = []
                data.push(model)
                emit("select", data);
            }

            const selectCountries = () => {
                let data = []
                selected.value.forEach(function (item){
                    data.push(item)
                })
                emit("select", data);
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
                loadModels,
                closeCountry,
                selectCountry,
                selectCountries,
                changePerPage,
            }
        }
    }
</script>
