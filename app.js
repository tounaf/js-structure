require('./bootstrap');

import InputAjaxSelect from "./utils/InputAjaxSelect";
import InputAttachedSelect from "./utils/InputAttachedSelect";
import InputNumber from "./utils/InputNumber";
import InputNavigationPlaceSelect from "./utils/InputNavigationPlaceSelect";
import InputSearch from "./utils/InputSearch";
import InputSelect from "./utils/InputSelect";
import InputDateRange from "./utils/InputDateRange";
import InputImage from "./utils/InputImage";
import InputStatusSelect from "./utils/InputStatusSelect";
import Pagination from "./utils/Pagination";

import App from "./pages/App";
import router from "./router";
import i18n from "./i18n";
import store from "./services/store/store";
import CKEditor from '@ckeditor/ckeditor5-vue';
const {createApp} = require("vue");
const vm = createApp(App)
vm.use(router)
vm.use(i18n)
vm.use(store)
vm.use(CKEditor)

vm.mount('#app')

vm.component(InputAjaxSelect.name, InputAjaxSelect)
vm.component(InputAttachedSelect.name, InputAttachedSelect)
vm.component(InputNavigationPlaceSelect.name, InputNavigationPlaceSelect)
vm.component(InputNumber.name, InputNumber)
vm.component(InputStatusSelect.name, InputStatusSelect)
vm.component(InputDateRange.name, InputDateRange)
vm.component(InputImage.name, InputImage)
vm.component(InputSearch.name, InputSearch)
vm.component(InputSelect.name, InputSelect)
vm.component(Pagination.name, Pagination)

vm.config.globalProperties.$filters = {
    vignette(type, mid) {
        return "https://static.milibris.com/thumbnail/" + type+ "/" + mid + "/front/catalog-cover.jpeg";
    },
    url(path) {
        return process.env.MIX_APP_URL + path;
    },
    formatDate(value) {
        if(value){
            return moment(value).locale("fr-FR").format('L')
        }
        return '';
    },
    formatDateTime(value) {
        if(value){
            return moment(value).locale("fr-FR").format('L HH:mm')
        }
        return '';
    },
}

