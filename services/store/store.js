import {createStore} from "vuex";

import auth from "./auth.module"
import breadcrumbs from "./breadcrumbs.module"
import form from "./form.module"

const store = createStore({
    modules: {
        auth: auth,
        breadcrumbs: breadcrumbs,
        form: form,
    }
})

export default store
