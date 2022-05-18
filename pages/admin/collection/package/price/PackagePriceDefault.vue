<template>
    <!--begin::Card-->
    <div class="card">

        <!--begin::Card body-->
        <div class="card-body">
            <!--begin::Form-->
            <form @submit.prevent="submit" id="form" method="post" class="form fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">
                <!--begin::Input group-->
                <div
                    v-for="item in models"
                    :key="`price-item-default-${item.duration_id}`"
                    class="row mb-6"
                >
                    <div class="col-xl-2 col-lg-3">
                        <label class="checkbox mt-3">
                            <input
                                v-model="item.is_active"
                                type="checkbox"
                            >
                            <span class="ms-2">{{  item.name }}</span>
                        </label>
                    </div>
                    <div class="col-xl-2 col-lg-3">
                        <input
                            v-model="item.price"
                            :disabled="!item.is_active"
                            :placeholder="$t('messages.enter.price')"
                            class="form-control"
                            type="text"
                        >
                    </div>
                </div>
                <!--end::Input group-->

                <!--begin::Actions-->
                <div class="card-footer d-flex justify-content-end">
                    <router-link :to="{name: 'admin.packages'}" class="btn btn-sm btn-flex btn-light fw-bolder me-2">{{ $t('back') }}</router-link>
                    <button form="form" type="submit" class="btn btn-sm btn-primary">{{ $t('save') }}</button>
                </div>
                <!--end::Actions-->
            </form>
            <!--end::Form-->
        </div>
        <!--end::Card body-->
    </div>
    <!--end::Card-->
</template>

<script>
import {useRoute} from "vue-router";
import {computed, nextTick, onMounted, ref, watch} from "vue";
import ApiService from "../../../../../services/api.service";
import {SET_BREADCRUMB} from "../../../../../services/store/breadcrumbs.module";
import {useStore} from "vuex";
import {useI18n} from "vue-i18n";

export default {
    name: 'VersionPriceCurrency',
    setup(){
        const {t} = useI18n()
        const store = useStore()
        const route = useRoute()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'packages', route: 'admin.packages'},
                {title: 'messages.prices.default'},
            ])
        })

        const id = computed(() => route.params.id)

        const models = ref([])
        const loadModels = () => {
            if(!id.value){
                return;
            }
            ApiService.get('/packages/' + id.value + '/prices', null, true)
                .then(({data}) => {
                    if(data.success) {
                        models.value = data.data
                    }
                    nextTick(function(){ KTMenu.createInstances(); });
                })
        }
        onMounted(loadModels)
        watch(() => id.value, () => loadModels())

        const getData = () => {
            return {
                prices: models.value
            }
        }

        const submit = () => {
            if(!id.value){
                return;
            }
            const data = getData()
            ApiService.put('/packages/' + id.value + '/prices', data)
                .then((response) => {
                    if(response.data.success){
                        models.value = response.data.data
                        toastr.success(t('messages.prices.updated'))
                    }else{
                        toastr.error(t('error'))
                    }
                })
                .catch(() => {
                    toastr.error(t('error'))
                })

        }

        return {
            models,
            submit,
        }
    }
}
</script>
