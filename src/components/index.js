import GfCapture from './GfCapture'

const components = {
  install (Vue) {
    Vue.component(GfCapture.name, GfCapture)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components)
}

export default components