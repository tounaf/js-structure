<template>
    <!--begin::Content-->
    <div v-if="model" class="content d-flex flex-column flex-column-fluid" id="kt_content">

        <!--begin::Toolbar-->
        <ToolBar>
            <button @click="submit" type="submit" class="btn btn-sm btn-primary">{{ $t('save') }}</button>
        </ToolBar>
        <!--end::Toolbar-->

        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div  id="kt_content_container" class="container-fluid">

                <div class="row">
                    <div class="col-6">
                        <!--begin::Input-->
                        <div class="row mb-5">
                            <label class="col-lg-12 col-form-label fw-bold fs-6">{{ $t('title') }}</label>
                            <div class="col-lg-12 fv-plugins-icon-container">
                                <input v-model="model.title" type="text" class="form-control form-control-lg mb-3 mb-lg-0">
                            </div>
                        </div>
                        <!--end::Input-->
                    </div>
                    <div class="col-6">
                        <!--begin::Input-->
                        <div class="row mb-5">
                            <label class="col-lg-12 col-form-label fw-bold fs-6">{{ $t('place') }}</label>
                            <div class="col-lg-12 fv-plugins-icon-container">
                                <InputNavigationPlaceSelect v-model="model.place" />
                            </div>
                        </div>
                        <!--end::Input-->
                    </div>
                </div>

                <div class="draggable-zone" ref="draggable">
                    <div class="draggable" v-for="(menu, index) in model.menus" :data-index="index" :key="`draggable-${menu.order}`">
                        <div class="accordion-item mt-2 mb-2">
                            <div class="d-flex align-items-center">
                                <a href="#" class="btn btn-icon btn-hover-light-primary draggable-handle ms-2">
                                    <!--begin::Svg Icon-->
                                    <span class="svg-icon svg-icon-2x">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black"></path>
                                            <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black"></path>
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                </a>
                                <h2 class="accordion-header w-100" :id="`kt_accordion_header_${menu.id}`">
                                    <button class="accordion-button fs-4 fw-bold collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#kt_accordion_body_${menu.id}`" aria-expanded="false" :aria-controls="`kt_accordion_body_${menu.id}`">
                                        {{ menu.title }}
                                    </button>
                                </h2>
                            </div>
                            <div :id="`kt_accordion_body_${menu.id}`" class="accordion-collapse collapse" :aria-labelledby="`kt_accordion_header_${menu.id}`" >
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-6">
                                            <!--begin::Input-->
                                            <div class="row mb-5">
                                                <label class="col-lg-12 col-form-label fw-bold fs-6">{{ $t('name') }}</label>
                                                <div class="col-lg-12 fv-plugins-icon-container">
                                                    <input v-model="menu.title" type="text" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0">
                                                </div>
                                            </div>
                                            <!--end::Input-->
                                        </div>
                                        <div class="col-6">
                                            <!--begin::Input-->
                                            <div class="row mb-5">
                                                <label class="col-lg-12 col-form-label fw-bold fs-6">{{ $t('link') }}</label>
                                                <div class="col-lg-12 fv-plugins-icon-container">
                                                    <input v-model="menu.link" type="text" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0">
                                                </div>
                                            </div>
                                            <!--end::Input-->
                                        </div>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-6">
                                            <!--begin::Switch-->
                                            <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                <input v-model="menu.mega_menu" class="form-check-input" type="checkbox"/>
                                                <span class="form-check-label fw-bold text-muted">
                                                    {{ $t('mega_menu') }}
                                                </span>
                                            </label>
                                            <!--end::Switch-->
                                        </div>
                                    </div>
                                    <button @click="removeMenu(index)" type="button" class="btn btn-sm btn-danger">{{ $t('remove') }}</button>
                                </div>
                            </div>
                        </div>

                        <div class="draggable-zone draggable-zone-first-child ms-5">
                            <div v-for="(submenu, sub_index) in menu.children" class="draggable" :key="`draggable-${menu.order}-${submenu.order}`" :data-index="index" :data-sub-index="sub_index">
                                <div class="accordion-item mt-2 mb-2">
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="btn btn-icon btn-hover-light-primary draggable-handle ms-2">
                                            <!--begin::Svg Icon-->
                                            <span class="svg-icon svg-icon-2x">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black"></path>
                                                    <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black"></path>
                                                </svg>
                                            </span>
                                            <!--end::Svg Icon-->
                                        </a>
                                        <h2 class="accordion-header w-100" :id="`kt_accordion_header_${menu.id}_${submenu.id}`">
                                            <button class="accordion-button fs-4 fw-bold collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#kt_accordion_body_${menu.id}_${submenu.id}`" aria-expanded="false" :aria-controls="`kt_accordion_body_${menu.id}_${submenu.id}`">
                                                {{ submenu.title }}
                                            </button>
                                        </h2>
                                    </div>
                                    <div :id="`kt_accordion_body_${menu.id}_${submenu.id}`" class="accordion-collapse collapse" :aria-labelledby="`kt_accordion_header_${menu.id}_${submenu.id}`" >
                                        <div class="accordion-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <!--begin::Input-->
                                                    <div class="row mb-5">
                                                        <label class="col-lg-12 col-form-label fw-bold fs-6">{{ $t('name') }}</label>
                                                        <div class="col-lg-12 fv-plugins-icon-container">
                                                            <input v-model="submenu.title" type="text" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0">
                                                        </div>
                                                    </div>
                                                    <!--end::Input-->
                                                </div>
                                                <div class="col-6">
                                                    <!--begin::Input-->
                                                    <div class="row mb-5">
                                                        <label class="col-lg-12 col-form-label fw-bold fs-6">{{ $t('link') }}</label>
                                                        <div class="col-lg-12 fv-plugins-icon-container">
                                                            <input v-model="submenu.link" type="text" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0">
                                                        </div>
                                                    </div>
                                                    <!--end::Input-->
                                                </div>
                                            </div>
                                            <button @click="removeMenu(index, sub_index)" type="button" class="btn btn-sm btn-danger">{{ $t('remove') }}</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="draggable-zone draggable-zone-second-child ms-5">
                                    <div v-for="(_submenu, _sub_index) in submenu.children" class="draggable" :key="`draggable-${menu.order}-${submenu.order}-${_submenu.order}`" :data-index="index" :data-sub-index="sub_index" :data-sub-index-2="_sub_index">
                                        <div class="accordion-item mt-2 mb-2">
                                            <div class="d-flex align-items-center">
                                                <a href="#" class="btn btn-icon btn-hover-light-primary draggable-handle ms-2">
                                                    <!--begin::Svg Icon-->
                                                    <span class="svg-icon svg-icon-2x">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black"></path>
                                                    <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black"></path>
                                                </svg>
                                            </span>
                                                    <!--end::Svg Icon-->
                                                </a>
                                                <h2 class="accordion-header w-100" :id="`kt_accordion_header_${menu.id}_${submenu.id}_${_submenu.id}`">
                                                    <button class="accordion-button fs-4 fw-bold collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#kt_accordion_body_${menu.id}_${submenu.id}_${_submenu.id}`" aria-expanded="false" :aria-controls="`kt_accordion_body_${menu.id}_${submenu.id}_${_submenu.id}`">
                                                        {{ _submenu.title }}
                                                    </button>
                                                </h2>
                                            </div>
                                            <div :id="`kt_accordion_body_${menu.id}_${submenu.id}_${_submenu.id}`" class="accordion-collapse collapse" :aria-labelledby="`kt_accordion_header_${menu.id}_${submenu.id}_${_submenu.id}`" >
                                                <div class="accordion-body">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <!--begin::Input-->
                                                            <div class="row mb-5">
                                                                <label class="col-lg-12 col-form-label fw-bold fs-6">{{ $t('name') }}</label>
                                                                <div class="col-lg-12 fv-plugins-icon-container">
                                                                    <input v-model="_submenu.title" type="text" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0">
                                                                </div>
                                                            </div>
                                                            <!--end::Input-->
                                                        </div>
                                                        <div class="col-6">
                                                            <!--begin::Input-->
                                                            <div class="row mb-5">
                                                                <label class="col-lg-12 col-form-label fw-bold fs-6">{{ $t('link') }}</label>
                                                                <div class="col-lg-12 fv-plugins-icon-container">
                                                                    <input v-model="_submenu.link" type="text" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0">
                                                                </div>
                                                            </div>
                                                            <!--end::Input-->
                                                        </div>
                                                    </div>
                                                    <button @click="removeMenu(index, sub_index, _sub_index)" type="button" class="btn btn-sm btn-danger">{{ $t('remove') }}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button v-if="submenu.children && submenu.children.length" @click="addMenu(index, sub_index)" type="button" class="btn btn-sm btn-primary">{{ $t('add') }}</button>
                                </div>

                            </div>
                            <button v-if="menu.children && menu.children.length" @click="addMenu(index)" type="button" class="btn btn-sm btn-primary">{{ $t('add') }}</button>
                        </div>
                    </div>

                    <button @click="addMenu" type="button" class="btn btn-sm btn-primary">{{ $t('add') }}</button>
                </div>
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
import {nextTick, ref, onMounted, watch} from "vue";
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";
import ApiService from "../../../../services/api.service";
import {useRoute} from "vue-router";
import {useI18n} from "vue-i18n";

export default {
    name: 'NavigationView',
    components: {ToolBar},
    setup(){
        const store = useStore()
        const route = useRoute()
        const {t} = useI18n()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'navigations', route: 'admin.navigations'},
                {title: 'navigation'},
            ])
        })

        const id = ref(route.params.id)
        const initialModel = {
            title: null,
            place: 'header',
            menus: [],
        }
        const initModel = (value) => {
            if(!value){
                model.value = Object.assign({}, initialModel);
            }else{
                if(swappable.value){
                    swappable.value.destroy()
                    swappable.value = null
                }
                model.value = value;
            }
        }
        const init = () => {
            if(id.value){
                loadModel(id.value)
            }else{
                initModel()
            }
        }
        watch(() => id.value, () => { init() })
        onMounted(init)

        const draggable = ref(null)
        const model = ref(null)
        const getData = () => {
            const data = Object.assign({}, model.value)
            data.menus = []
            if(draggable.value.children){
                draggable.value.children.forEach((child) => {
                    let el = $(child)
                    if (el.hasClass('draggable')) {
                        let value;
                        let index = el.data('index')
                        let sub_index = el.data('sub-index')
                        let sub_index_2 = el.data('sub-index-2')
                        if (sub_index_2 !== undefined) {
                            value = model.value.menus[index].children[sub_index].children[sub_index_2]
                        } else if (sub_index !== undefined) {
                            value = model.value.menus[index].children[sub_index]
                        } else {
                            value = model.value.menus[index]
                        }
                        const item = Object.assign({}, value)
                        item.children = []

                        let zone = el.find('.draggable-zone')
                        if (zone.length > 0) {
                            zone[0].children.forEach((_child) => {
                                let _el = $(_child)
                                if (_el.hasClass('draggable')) {
                                    let _value;
                                    let _index = _el.data('index')
                                    let _sub_index = _el.data('sub-index')
                                    let _sub_index_2 = _el.data('sub-index-2')
                                    if (_sub_index_2 !== undefined) {
                                        _value = model.value.menus[_index].children[_sub_index].children[_sub_index_2]
                                    } else if (_sub_index !== undefined) {
                                        _value = model.value.menus[_index].children[_sub_index]
                                    } else {
                                        _value = model.value.menus[_index]
                                    }
                                    const _item = Object.assign({}, _value)
                                    _item.children = []

                                    let _zone = _el.find('.draggable-zone')
                                    if (_zone.length > 0) {
                                        _zone[0].children.forEach((__child) => {
                                            let __el = $(__child)
                                            if (__el.hasClass('draggable')) {
                                                let __value;
                                                let __index = __el.data('index')
                                                let __sub_index = __el.data('sub-index')
                                                let __sub_index_2 = __el.data('sub-index-2')
                                                if (__sub_index_2 !== undefined) {
                                                    __value = model.value.menus[__index].children[__sub_index].children[__sub_index_2]
                                                } else if (__sub_index !== undefined) {
                                                    __value = model.value.menus[__index].children[__sub_index]
                                                } else {
                                                    __value = model.value.menus[__index]
                                                }
                                                const __item = Object.assign({}, __value)
                                                __item.children = []

                                                _item.children.push(__item)
                                            }
                                        })
                                    }

                                    item.children.push(_item)
                                }
                            })
                        }

                        data.menus.push(item)
                    }
                })
            }
            model.value = data
            return data;
        }

        const submit = () => {
            id && id.value ? update() : create();
        }

        const create = () => {
            const data = getData()
            ApiService.post('/navigations', data)
                .then((response) => {
                    if(response.data.success){
                        initModel()
                        toastr.success(t('messages.navigations.created'))
                    }else{
                        toastr.error(t('error'))
                    }
                })
                .catch(() => {
                    toastr.error(t('error'))
                })
        }

        const update = () => {
            const data = getData()
            ApiService.put('/navigations/' + id.value, data)
                .then((response) => {
                    if(response.data.success){
                        initModel(response.data.data)
                        toastr.success(t('messages.navigations.updated'))
                    }else{
                        toastr.error(t('error'))
                    }
                })
                .catch(() => {
                    toastr.error(t('error'))
                })
        }

        const loadModel = () => {
            ApiService.get('/navigations/' + route.params.id)
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

        const initialMenu = {
            id: null,
            order: 0,
            name: null,
            link: null,
            children: [],
        }
        const addMenu = (index, sub_index) => {
            if(sub_index >= 0){
                if(!model.value.menus[index].children[sub_index].children){
                    model.value.menus[index].children[sub_index].children = []
                }
                initialMenu.order = model.value.menus[index].children[sub_index].children.length
                model.value.menus[index].children[sub_index].children.push(
                    Object.assign({}, initialMenu)
                );
            }else if(index >= 0){
                if(!model.value.menus[index].children){
                    model.value.menus[index].children = []
                }
                initialMenu.order = model.value.menus[index].children.length
                model.value.menus[index].children.push(
                    Object.assign({}, initialMenu)
                );
            }else{
                if(!model.value.menus){
                    model.value.menus = []
                }
                initialMenu.order = model.value.menus.length
                model.value.menus.push(
                    Object.assign({}, initialMenu)
                );
            }
        }
        const removeMenu = (index, sub_index, _sub_index) => {
            if(_sub_index){
                model.value.menus[index].children[sub_index].children.splice(_sub_index, 1)
            }else if(sub_index){
                model.value.menus[index].children.splice(sub_index, 1)
            }else{
                model.value.menus.splice(index, 1)
            }
        }

        const swappable = ref(null)
        const initDraggable = () => {
            if (swappable.value) {
                return false;
            }
            let containers = document.querySelectorAll(".draggable-zone");
            if (containers.length === 0) {
                return false;
            }
            swappable.value = new Sortable.default(containers, {
                draggable: ".draggable",
                handle: ".draggable .draggable-handle",
                mirror: {
                    appendTo: "body",
                    constrainDimensions: true
                },
            });
        }
        watch(() => model.value, (value) => {
            if(value){
                nextTick(initDraggable)
            }
        })

        return {
            model,
            draggable,
            loadModel,
            isActive,
            addMenu,
            removeMenu,
            submit,
        }
    }
}



</script>
