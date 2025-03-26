1) app/catalog в каждую страницу добавлять loading.tsx error.tsx (для ошибки и загрузки)
2) app/catalog/[id]
3) можно будет запрашивать данные прям в компоненте
https://www.joshwcomeau.com/react/server-components/

app/(hotel)

catalog
    components
    containers
    store
    utils
    index.ts // =>>> экперт наружу всего что публичное
hotel
    components
    containers
    store
    utils 

модульная архитектура в next