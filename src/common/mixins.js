import {debounce} from 'common/utils/utils.js'

export const imgRefrashMixin={
  data(){
    return {
      itemimgmix:null,
      refresh:null,
    }
  },
  mounted(){
    //接收孙子组件的事件，然后使得孙子组件可以使用父组件中的对象
    // this.$bus.$on('loadimghome',()=>{
    //   //this.$refs.scrollback.scrollrefresh();
    // })
    this.refresh=debounce(this.$refs.scrollback.scrollrefresh,500);
    this.itemimgmix=()=>{
      this.refresh();
    }
    
    this.$bus.$on('loadimgmix',this.itemimgmix)
    console.log('我是混入中的内容');
  }
}