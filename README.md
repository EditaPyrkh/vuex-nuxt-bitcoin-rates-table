# 🖼 Vue Nuxt Bitcoin rates table
This apps shows current and historical bitcoin rates via API https://api.coindesk.com. <br /> <br />
_Это приложение позволяет отслеживать текущую и исторические цены биткоина через API. <br /> 
Для выбора периода предоставлены разные варианты сортировки: день, неделя, месяц и год. <br />
Отдельно написан компонент для отображения кастомной (произвольной) даты._

# 🖥 Quick display
![vue-test - Google Chrome 2024-01-25 19-48-06 (online-video-cutter com)](https://github.com/EditaPyrkh/vuex-nuxt-bitcoin-rates-table/assets/113599547/5cacd5fc-19cc-4944-9942-e5c5b8dc2a4c)

# 🛍 Technologies
```Vue```
```Vuex```
```Nuxt```
```Docker Compose```
```Moment```
```Axios```
```API```
```Chart.js```

# 🎯 Features
* Displays current price as main page
* Has different options to see historical prices: day, week, month, year
* Allows to enter custom data
* Build up by nuxt and containered with Docker Compose


# 🧹 What to improve
* Update Vuex code to store components
* Fix issue with docker container to correctly show page on localhost

## Docker Setup
```
# don't forget to open Docker Desktop 
$ npm docker compose up
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
