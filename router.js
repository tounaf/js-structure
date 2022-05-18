import {createRouter, createWebHistory} from "vue-router";

import AdminLayout from "./layouts/admin/Layout";
import AdminDashboard from "./pages/admin/dashboard/Dashboard";
import AdminPointOfSaleList from "./pages/admin/catalog/point-of-sale/PointOfSaleList";
import AdminPointOfSaleView from "./pages/admin/catalog/point-of-sale/PointOfSaleView";
import AdminPointOfSaleCategoryList from "./pages/admin/catalog/point-of-sale/PointOfSaleCategoryList";
import AdminPublisherList from "./pages/admin/catalog/publisher/PublisherList";
import AdminPublisherView from "./pages/admin/catalog/publisher/PublisherView";
import AdminPublisherTitleList from "./pages/admin/catalog/publisher/PublisherTitleList";
import AdminPublisherVersionList from "./pages/admin/catalog/publisher/PublisherVersionList";
import AdminTitleList from "./pages/admin/catalog/title/TitleList";
import AdminTitleView from "./pages/admin/catalog/title/TitleView";
import AdminVersionList from "./pages/admin/catalog/version/VersionList";
import AdminVersionEdit from "./pages/admin/catalog/version/VersionEdit";
import AdminVersionView from "./pages/admin/catalog/version/VersionView";
import AdminVersionIssueList from "./pages/admin/catalog/version/VersionIssueList";
import AdminVersionPackageList from "./pages/admin/catalog/version/VersionPackageList";
import AdminVersionCategoryList from "./pages/admin/catalog/version/VersionCategoryList";
import AdminVersionPrices from "./pages/admin/catalog/version/price/VersionPrices";
import AdminVersionPriceDefault from "./pages/admin/catalog/version/price/VersionPriceDefault";
import AdminVersionPriceCurrency from "./pages/admin/catalog/version/price/VersionPriceCurrency";
import AdminTitleVersionList from "./pages/admin/catalog/title/TitleVersionList";
import AdminTitleIssueList from "./pages/admin/catalog/title/TitleIssueList";
import AdminIssueList from "./pages/admin/catalog/issue/IssueList";
import AdminIssueView from "./pages/admin/catalog/issue/IssueView";
import AdminIssueTicketList from "./pages/admin/catalog/issue/IssueTicketList";
import AdminTicketList from "./pages/admin/catalog/ticket/TicketList";
import AdminTicketView from "./pages/admin/catalog/ticket/TicketView";
import AdminAdministratorList from "./pages/admin/account/administrator/AdministratorList";
import AdminAdministratorCreate from "./pages/admin/account/administrator/AdministratorCreate";
import AdminAdministratorView from "./pages/admin/account/administrator/AdministratorView";
import AdminAAdministratorPackageList from "./pages/admin/account/administrator/AdministratorPackageList";
import AdminAAdministratorVersionList from "./pages/admin/account/administrator/AdministratorVersionList";
import AdminAdministratorEdit from "./pages/admin/account/administrator/AdministratorEdit";
import AdminCustomerList from "./pages/admin/account/customer/CustomerList";
import AdminCategoryList from "./pages/admin/collection/category/CategoryList";
import AdminCategoryView from "./pages/admin/collection/category/CategoryView";
import AdminCategoryEdit from "./pages/admin/collection/category/CategoryEdit";
import AdminCategoryVersionList from "./pages/admin/collection/category/CategoryVersionList";
import AdminLocalisationList from "./pages/admin/collection/localisation/LocalisationList";
import AdminLocalisationCreate from "./pages/admin/collection/localisation/LocalisationCreate";
import AdminLocalisationEdit from "./pages/admin/collection/localisation/LocalisationEdit";
import AdminLocalisationView from "./pages/admin/collection/localisation/LocalisationView";
import AdminLocalisationVersionList from "./pages/admin/collection/localisation/LocalisationVersionList";
import AdminLanguageList from "./pages/admin/appearance/language/LanguageList";
import AdminLanguageCreate from "./pages/admin/appearance/language/LanguageCreate";
import AdminLanguageEdit from "./pages/admin/appearance/language/LanguageEdit";
import AdminLanguageView from "./pages/admin/appearance/language/LanguageView";
import AdminCurrencyList from "./pages/admin/appearance/currency/CurrencyList";
import AdminCurrencyCreate from "./pages/admin/appearance/currency/CurrencyCreate";
import AdminCurrencyEdit from "./pages/admin/appearance/currency/CurrencyEdit";
import AdminCurrencyView from "./pages/admin/appearance/currency/CurrencyView";
import AdminPackageList from "./pages/admin/collection/package/PackageList";
import AdminPackageView from "./pages/admin/collection/package/PackageView";
import AdminPackageEdit from "./pages/admin/collection/package/PackageEdit";
import AdminPackageVersionList from "./pages/admin/collection/package/PackageVersionList";

import AdminPackagePrices from "./pages/admin/collection/package/price/PackagePrices";
import AdminPackagePriceDefault from "./pages/admin/collection/package/price/PackagePriceDefault";
import AdminPackagePriceCurrency from "./pages/admin/collection/package/price/PackagePriceCurrency";
import AdminDurationList from "./pages/admin/collection/duration/DurationList";
import AdminDurationEdit from "./pages/admin/collection/duration/DurationEdit";
import AdminDurationView from "./pages/admin/collection/duration/DurationView";
import AdminDurationVersionList from "./pages/admin/collection/duration/DurationVersionList";
import AdminDurationPackageList from "./pages/admin/collection/duration/DurationPackageList";
import AdminCustomerView from  "./pages/admin/account/customer/CustomerView";
import AdminCustomerPackageList from  "./pages/admin/account/customer/CustomerPackageList";
import AdminCustomerVersionList from  "./pages/admin/account/customer/CustomerVersionList";
import AdminCustomerEdit from  "./pages/admin/account/customer/CustomerEdit";
import AdminCivilityList from "./pages/admin/account/civility/CivilityList";
import AdminCivilityCreate from "./pages/admin/account/civility/CivilityCreate";
import AdminCivilityEdit from "./pages/admin/account/civility/CivilityEdit";
import AdminCountryList from "./pages/admin/tools/country/CountryList";
import AdminCountryCreate from "./pages/admin/tools/country/CountryCreate";
import AdminCountryEdit from "./pages/admin/tools/country/CountryEdit";

import AdminNavigationList from  "./pages/admin/appearance/menu/NavigationList";
import AdminNavigationView from  "./pages/admin/appearance/menu/NavigationView";

import AdminSettings from  "./pages/admin/appearance/setting/Settings";
import AdminSettingGeneral from  "./pages/admin/appearance/setting/SettingGeneral";
import AdminSettingSocial from  "./pages/admin/appearance/setting/SettingSocial";
import AdminSettingApplication from  "./pages/admin/appearance/setting/SettingApplication";
import AdminSettingColor from  "./pages/admin/appearance/setting/SettingColor";
import AdminSettingSmtp from  "./pages/admin/appearance/setting/SettingSmtp";

import AdminTranslationList from "./pages/admin/tools/translation/TranslationList";
import AdminTranslationCreate from "./pages/admin/tools/translation/TranslationCreate";
import AdminTranslationEdit from "./pages/admin/tools/translation/TranslationEdit";
import AdminTranslationView from "./pages/admin/tools/translation/TranslationView";

import AdminBlogList from "./pages/admin/blog/blog/BlogList";
import AdminBlogCreate from "./pages/admin/blog/blog/BlogCreate";
import AdminBlogEdit from "./pages/admin/blog/blog/BlogEdit";
import AdminBlogView from "./pages/admin/blog/blog/BlogView";

import AdminBlogCategoryList from "./pages/admin/blog/category/CategoryList";
import AdminBlogCategoryCreate from "./pages/admin/blog/category/CategoryCreate";
import AdminBlogCategoryEdit from "./pages/admin/blog/category/CategoryEdit";
import AdminBlogCategoryView from "./pages/admin/blog/category/CategoryView";

import AdminBlogTagList from "./pages/admin/blog/tag/TagList";
import AdminBlogTagCreate from "./pages/admin/blog/tag/TagCreate";
import AdminBlogTagEdit from "./pages/admin/blog/tag/TagEdit";
import AdminBlogTagView from "./pages/admin/blog/tag/TagView";

import AdminFaqList from "./pages/admin/faq/faq/FaqList";
import AdminFaqCreate from "./pages/admin/faq/faq/FaqCreate";
import AdminFaqEdit from "./pages/admin/faq/faq/FaqEdit";
import AdminFaqView from "./pages/admin/faq/faq/FaqView";

import AdminFaqCategoryList from "./pages/admin/faq/category/CategoryList";
import AdminFaqCategoryCreate from "./pages/admin/faq/category/CategoryCreate";
import AdminFaqCategoryEdit from "./pages/admin/faq/category/CategoryEdit";
import AdminFaqCategoryView from "./pages/admin/faq/category/CategoryView";

import AdminPageList from "./pages/admin/page/PageList";
import AdminPageCreate from "./pages/admin/page/PageCreate";
import AdminPageEdit from "./pages/admin/page/PageEdit";
import AdminPageView from "./pages/admin/page/PageView";

import AdminOrderList from "./pages/admin/sale/order/OrderList";
import AdminOrderView from "./pages/admin/sale/order/OrderView";

import AdminSubscriptionList from "./pages/admin/sale/subscription/SubscriptionList";
import AdminSubscriptionView from "./pages/admin/sale/subscription/SubscriptionView";

const routes = [
    {
        path: '/' + (WEB_ROUTE_ADMIN !== undefined ? WEB_ROUTE_ADMIN : 'admin'),
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            {path: '', name: 'admin.dashboard', component: AdminDashboard},

            {path: 'point-of-sales', name: 'admin.point-of-sales', component: AdminPointOfSaleList},
            {
                path: 'point-of-sales/:id',
                component: AdminPointOfSaleView,
                children: [
                    {path: '', name: 'admin.point-of-sales.view', component: AdminPointOfSaleCategoryList},
                ],
            },

            {path: 'publishers', name: 'admin.publishers', component: AdminPublisherList},
            {
                path: 'publishers/:id',
                component: AdminPublisherView,
                children: [
                    {path: '', name: 'admin.publishers.view', component: AdminPublisherTitleList},
                    {path: 'versions', name: 'admin.publishers.versions', component: AdminPublisherVersionList},
                ],
            },

            {path: 'titles', name: 'admin.titles', component: AdminTitleList},
            {
                path: 'titles/:id',
                component: AdminTitleView,
                children: [
                    {path: '', name: 'admin.titles.view', component: AdminTitleVersionList},
                    {path: 'issues', name: 'admin.titles.issues', component: AdminTitleIssueList},
                ],
            },

            {path: 'versions', name: 'admin.versions', component: AdminVersionList},
            {path: 'versions/:id/edit', name: 'admin.versions.edit', component: AdminVersionEdit},
            {
                path: 'versions/:id/prices',
                component: AdminVersionPrices,
                children: [
                    {path: '', name: 'admin.versions.prices', component: AdminVersionPriceDefault},
                    {path: ':currency', name: 'admin.versions.prices.currency', component: AdminVersionPriceCurrency},
                ],
            },
            {
                path: 'versions/:id',
                component: AdminVersionView,
                children: [
                    {path: '', name: 'admin.versions.view', component: AdminVersionIssueList},
                    {path: 'packages', name: 'admin.versions.packages', component: AdminVersionPackageList},
                    {path: 'categories', name: 'admin.versions.categories', component: AdminVersionCategoryList},
                ],
            },

            {path: 'issues', name: 'admin.issues', component: AdminIssueList},
            {
                path: 'issues/:id',
                component: AdminIssueView,
                children: [
                    {path: '', name: 'admin.issues.view', component: AdminIssueTicketList},
                ],
            },

            {path: 'tickets', name: 'admin.tickets', component: AdminTicketList},
            {path: 'tickets/:id', name: 'admin.tickets.view', component: AdminTicketView},

            {path: 'administrators', name: 'admin.administrators', component: AdminAdministratorList},
            {path: 'administrators/create', name: 'admin.administrators.create', component: AdminAdministratorCreate},
            {
                path: 'administrators/:id',
                component: AdminAdministratorView,
                children: [
                    {path: '', name: 'admin.administrators.view', component: AdminAAdministratorPackageList},
                    {path: 'versions', name: 'admin.administrators.versions', component: AdminAAdministratorVersionList},
                ],
            },
            {path: 'administrators/:id/edit', name: 'admin.administrators.edit', component: AdminAdministratorEdit},

            {path: 'customers', name: 'admin.customers', component: AdminCustomerList},
            {
                path: 'customers/:id',
                component: AdminCustomerView,
                children: [
                    {path: '', name: 'admin.customers.view', component: AdminCustomerPackageList},
                    {path: 'versions', name: 'admin.customers.versions', component: AdminCustomerVersionList},
                ],
            },
            {path: 'customers/:id/edit', name: 'admin.customers.edit', component: AdminCustomerEdit},

            {path: 'civilities', name: 'admin.civilities', component: AdminCivilityList},
            {path: 'civilities/create', name: 'admin.civilities.create', component: AdminCivilityCreate},
            {path: 'civilities/:id/edit', name: 'admin.civilities.edit', component: AdminCivilityEdit},

            {path: 'countries', name: 'admin.countries', component: AdminCountryList},
            {path: 'countries/create', name: 'admin.countries.create', component: AdminCountryCreate},
            {path: 'countries/:id/edit', name: 'admin.countries.edit', component: AdminCountryEdit},

            {path: 'users', name: 'admin.users', component: AdminAdministratorList},
            {path: 'users/:id', name: 'admin.users.view', component: AdminAdministratorView},

            {path: 'categories', name: 'admin.categories', component: AdminCategoryList},
            {
                path: 'categories/:id',
                component: AdminCategoryView,
                children: [
                    {path: '', name: 'admin.categories.view', component: AdminCategoryVersionList},
                ],
            },
            {path: 'categories/:id/edit', name: 'admin.categories.edit', component: AdminCategoryEdit},

            {path: 'localisations', name: 'admin.localisations', component: AdminLocalisationList},
            {path: 'localisations/create', name: 'admin.localisations.create', component: AdminLocalisationCreate},
            {path: 'localisations/:id/edit', name: 'admin.localisations.edit', component: AdminLocalisationEdit},
            {
                path: 'localisations/:id',
                component: AdminLocalisationView,
                children: [
                    {path: '', name: 'admin.localisations.view', component: AdminLocalisationVersionList},
                ],
            },

            {path: 'languages', name: 'admin.languages', component: AdminLanguageList},
            {path: 'languages/create', name: 'admin.languages.create', component: AdminLanguageCreate},
            {path: 'languages/:id/edit', name: 'admin.languages.edit', component: AdminLanguageEdit},
            {path: 'languages/:id', name: 'admin.languages.view', component: AdminLanguageView},

            {path: 'currencies', name: 'admin.currencies', component: AdminCurrencyList},
            {path: 'currencies/create', name: 'admin.currencies.create', component: AdminCurrencyCreate},
            {path: 'currencies/:id/edit', name: 'admin.currencies.edit', component: AdminCurrencyEdit},
            {path: 'currencies/:id', name: 'admin.currencies.view', component: AdminCurrencyView},

            {path: 'packages', name: 'admin.packages', component: AdminPackageList},
            {
                path: 'packages/:id',
                component: AdminPackageView,
                children: [
                    {path: '', name: 'admin.packages.view', component: AdminPackageVersionList},
                ],
            },
            {path: 'packages/:id/edit', name: 'admin.packages.edit', component: AdminPackageEdit},
            {
                path: 'packages/:id/prices',
                name: 'admin.packages.prices',
                component: AdminPackagePrices,
            },
            {
                path: 'packages/:id/prices',
                component: AdminPackagePrices,
                children: [
                    {path: '', name: 'admin.packages.prices', component: AdminPackagePriceDefault},
                    {path: ':currency', name: 'admin.packages.prices.currency', component: AdminPackagePriceCurrency},
                ],
            },

            {path: 'durations', name: 'admin.durations', component: AdminDurationList},
            {path: 'durations/:id/edit', name: 'admin.durations.edit', component: AdminDurationEdit},
            {
                path: 'durations/:id',
                component: AdminDurationView,
                children: [
                    {path: '', name: 'admin.durations.view', component: AdminDurationVersionList},
                    {path: 'packages', name: 'admin.durations.packages', component: AdminDurationPackageList},
                ],
            },

            {path: 'navigations', name: 'admin.navigations', component: AdminNavigationList},
            {path: 'navigations/:id', name: 'admin.navigations.view', component: AdminNavigationView},

            {
                path: 'settings',
                component: AdminSettings,
                children: [
                    {path: '', name: 'admin.settings', component: AdminSettingGeneral},
                    {path: 'social', name: 'admin.settings.social', component: AdminSettingSocial},
                    {path: 'application', name: 'admin.settings.application', component: AdminSettingApplication},
                    {path: 'color', name: 'admin.settings.color', component: AdminSettingColor},
                    {path: 'smtp', name: 'admin.settings.smtp', component: AdminSettingSmtp},
                ],
            },

            {path: 'translations', name: 'admin.translations', component: AdminTranslationList},
            {path: 'translations/create', name: 'admin.translations.create', component: AdminTranslationCreate},
            {path: 'translations/:id/edit', name: 'admin.translations.edit', component: AdminTranslationEdit},
            {path: 'translations/:id', name: 'admin.translations.view', component: AdminTranslationView},

            {path: 'pages', name: 'admin.pages', component: AdminPageList},
            {path: 'pages/create', name: 'admin.pages.create', component: AdminPageCreate},
            {path: 'pages/:id/edit', name: 'admin.pages.edit', component: AdminPageEdit},
            {path: 'pages/:id', name: 'admin.pages.view', component: AdminPageView},

            {path: 'blogs', name: 'admin.blogs', component: AdminBlogList},
            {path: 'blogs/create', name: 'admin.blogs.create', component: AdminBlogCreate},
            {path: 'blogs/:id/edit', name: 'admin.blogs.edit', component: AdminBlogEdit},
            {path: 'blogs/:id', name: 'admin.blogs.view', component: AdminBlogView},

            {path: 'blog/categories', name: 'admin.blog.categories', component: AdminBlogCategoryList},
            {path: 'blog/categories/create', name: 'admin.blog.categories.create', component: AdminBlogCategoryCreate},
            {path: 'blog/categories/:id/edit', name: 'admin.blog.categories.edit', component: AdminBlogCategoryEdit},
            {path: 'blog/categories/:id', name: 'admin.blog.categories.view', component: AdminBlogCategoryView},

            {path: 'blog/tags', name: 'admin.blog.tags', component: AdminBlogTagList},
            {path: 'blog/tags/create', name: 'admin.blog.tags.create', component: AdminBlogTagCreate},
            {path: 'blog/tags/:id/edit', name: 'admin.blog.tags.edit', component: AdminBlogTagEdit},
            {path: 'blog/tags/:id', name: 'admin.blog.tags.view', component: AdminBlogTagView},

            {path: 'faqs', name: 'admin.faqs', component: AdminFaqList},
            {path: 'faqs/create', name: 'admin.faqs.create', component: AdminFaqCreate},
            {path: 'faqs/:id/edit', name: 'admin.faqs.edit', component: AdminFaqEdit},
            {path: 'faqs/:id', name: 'admin.faqs.view', component: AdminFaqView},

            {path: 'faq/categories', name: 'admin.faq.categories', component: AdminFaqCategoryList},
            {path: 'faq/categories/create', name: 'admin.faq.categories.create', component: AdminFaqCategoryCreate},
            {path: 'faq/categories/:id/edit', name: 'admin.faq.categories.edit', component: AdminFaqCategoryEdit},
            {path: 'faq/categories/:id', name: 'admin.faq.categories.view', component: AdminFaqCategoryView},

            {path: 'orders', name: 'admin.orders', component: AdminOrderList},
            {path: 'orders/:id', name: 'admin.orders.view', component: AdminOrderView},

            {path: 'subscriptions', name: 'admin.subscriptions', component: AdminSubscriptionList},
            {path: 'subscriptions/:id', name: 'admin.subscriptions.view', component: AdminSubscriptionView},
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.MIX_BASE_URL),
    routes: routes,
})

export default router
