<template>
    <div class="content d-flex flex-column flex-column-fluid vh-100" id="kt_content">
        <!--begin::Toolbar-->
        <ToolBar>
        </ToolBar>
        <!--end::Toolbar-->
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container-fluid">
                <!--begin::Content-->
                <div class="flex-lg-row-fluid ms-lg-15">
                    <!--begin:::Tabs-->
                    <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
                        <!--begin:::Tab General -->
                        <li class="nav-item">
                            <router-link :to="{name:'admin.settings'}" :class="{'active': isActive('admin.settings')}" class="nav-link text-active-primary pb-4">
                                {{ $t('general') }}
                            </router-link>
                        </li>
                        <!--end:::Tab General-->
                        <!--begin:::Tab Social-->
                        <li class="nav-item">
                            <router-link :to="{name: 'admin.settings.social'}" :class="{'active': isActive('admin.settings.social')}" class="nav-link text-active-primary pb-4">
                                {{ $t(("social_networks")) }}
                            </router-link>
                        </li>
                        <!--end:::Tab Social -->
                        <!--begin:::Tab Application-->
                        <li class="nav-item">
                            <router-link :to="{name: 'admin.settings.application'}" :class="{'active': isActive('admin.settings.application')}" class="nav-link text-active-primary pb-4">
                                {{ $t(("application")) }}
                            </router-link>
                        </li>
                        <!--end:::Tab Application -->
                        <!--begin:::Tab Color-->
                        <li class="nav-item">
                            <router-link :to="{name: 'admin.settings.color'}" :class="{'active': isActive('admin.settings.color')}" class="nav-link text-active-primary pb-4">
                                {{ $t(("color")) }}
                            </router-link>
                        </li>
                        <!--end:::Tab Color -->
                        <!--begin:::Tab SMTP-->
                        <li class="nav-item">
                            <router-link :to="{name: 'admin.settings.smtp'}" :class="{'active': isActive('admin.settings.smtp')}" class="nav-link text-active-primary pb-4">
                                {{ $t(("smtp")) }}
                            </router-link>
                        </li>
                        <!--end:::Tab SMTP -->
                    </ul>
                    <!--end:::Tabs-->
                    <!--begin:::Tab content-->
                    <div class="tab-content" id="tab-settings">
                        <router-view />
                    </div>
                    <!--end:::Tab content-->
                </div>
                <!--end::Content-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
</template>
<script>
    import ToolBar from "../../../../layouts/admin/content/ToolBar";
    import {useStore} from "vuex";
    import {onMounted, ref} from "vue";
    import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";
    import {useRoute} from "vue-router";

    export default {
        name: "Settings",
        components: {ToolBar},
        setup(){
            const store = useStore()
            const route = useRoute()

            onMounted(() => {
                store.dispatch(SET_BREADCRUMB, [
                    {title: 'dashboard', route: 'admin.dashboard'},
                    {title: 'settings'},
                ])
            })

            const isActive = (name) => {
                return route.name === name;
            }

            return {
                isActive,
            }
        }
    }
</script>
