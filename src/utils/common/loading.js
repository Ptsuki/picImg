
import { Loading } from 'element-ui'
import Vue from 'vue'
Vue.use(Loading.directive)
let loading
function startLoading(target, text) {
  loading = Loading.service({
    target,
    lock: true, // 是否锁定
    text, // 显示在加载图标下方的加载文案
    spinner: 'el-icon-loading',
    background: 'rgba(0,0,0,.7)' // 遮罩背景色
  })
}

function endLoading() {
  loading.close()
}

export {
  startLoading, endLoading
}
