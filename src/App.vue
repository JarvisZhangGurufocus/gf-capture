<template>
  <div id="app">
    
    <gf-capture 
      @on-capture="onCapture"
      style="width: 80%; padding: 20px; cursor: pointer; font-size: 16px; color: #FFF; background: #409EFF; margin: 10px auto; box-sizing: border-box;">
      Capture
    </gf-capture>


    <div style="width: 80%; height: 80%; margin: 0 auto; border: 1px solid blue; padding: 20px; box-sizing: border-box;">
      <div style="width: 50%; height: 40%; border: 1px solid red; padding: 20px; box-sizing: border-box; display: inline-block; vertical-align: top; box-sizing: border-box;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
      </div>

      <div style="width: 50%; height: 40%; border: 1px solid green; padding: 20px; box-sizing: border-box; display: inline-block; vertical-align: top; box-sizing: border-box; margin-left: -4px;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
      </div>

      <div style="width: 50%; height: 40%; border: 1px solid yellow; padding: 20px; box-sizing: border-box; display: inline-block; vertical-align: top; box-sizing: border-box;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
      </div>

      <div 
        @click="() => { console.log('????') }"
        style="width: 50%; height: 40%; border: 1px solid black; padding: 20px; box-sizing: border-box; display: inline-block; vertical-align: top; box-sizing: border-box; margin-left: -4px;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
      </div>
    </div>

    <div>
      Capture Result
    </div>

    <div class="capture-result" style="border: 1px solid;">
    </div>
  </div>
</template>

<script>
import GfCapture from './components/GfCapture'

export default {
  name: 'App',
  components: {
    GfCapture
  },
  data () {
    return {
      canvas: null
    }
  },
  methods: {
    onCapture (canvas) {
      this.canvas = canvas

      const ele = this.$el.querySelector('.capture-result')
      ele.appendChild(canvas)
    }
  }
}
</script>
