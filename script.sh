# GENERATE FEATURE

npx nx generate @nx/angular:library home --directory=web-store/feature --skipModule
npx nx generate @nx/angular:component home --project=web-store-feature-home --standalone

npx nx generate @nx/angular:library basket --directory=web-store/feature --skipModule
npx nx generate @nx/angular:component basket --project=web-store-feature-basket --standalone

npx nx generate @nx/angular:library checkout --directory=web-store/feature --skipModule
npx nx generate @nx/angular:component checkout --project=web-store-feature-checkout --standalone

npx nx generate @nx/angular:library success --directory=web-store/feature --skipModule
npx nx generate @nx/angular:component success --project=web-store-feature-success --standalone
npx nx generate @nx/angular:library success --directory=web-store/data-access --skipModule

npx nx generate @nx/angular:library product-card --directory=web-store/ui --skipModule
npx nx generate @nx/angular:component product-card --project=web-store-ui-product-card --standalone

npx nx generate @nx/angular:library product-summary --directory=web-store/ui --skipModule
npx nx generate @nx/angular:component product-summary --project=web-store-ui-product-summary --standalone
