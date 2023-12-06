/*
 * @Author: lengao 841423154@qq.com
 * @Date: 2021-05-30 08:58:16
 * @LastEditors: lengao 841423154@qq.com
 * @LastEditTime: 2023-12-06 17:12:31
 * @FilePath: \form-generator-dev\src\views\index\main.js
 * @Description:
 */
// 引用 echarts
import * as echarts from 'echarts'
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/styles/index.scss'
import '@/icons'
import axios from 'axios'
import Tinymce from '@/components/tinymce/index.vue'
import TsSubform from '@/components/ts-sub-form/index.vue'
import tsLineChart from '@/components/ts-charts/ts-line-chart/index'
import TsIframe from '@/components/ts-iframe/index'
import store from '@/store'
import TsSelectDataDictionary from '@/components/ts-select-data-dictionary/index'
import TsUniversalSelect from '@/components/ts-universal-select/index'

Vue.component('TsUniversalSelect', TsUniversalSelect)
Vue.component('TsSelectDataDictionary', TsSelectDataDictionary)
Vue.component('tsIframe', TsIframe)
Vue.component('tsLineChart', tsLineChart)

// 全局方法挂载
Vue.component('tinymce', Tinymce)
Vue.component('tsSubform', TsSubform)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
