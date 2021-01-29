import {debounce} from 'common/utils/utils.js'
import BackTop from 'components/content/backtop/BackTop.vue'

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

export const backtopMixins={
  data(){
    return{}
  },
  components:{
    BackTop
  },
  methods:{
    backtopclick(){
      //封装了方法 
      this.$refs.scrollback.backtopscroll(0,0,500);
      //另一种方法，没有封装方法 ,scrollTo(x位置，y位置，花费时间)
      //this.$refs.scrollback.bs.scrollTo(0,0,500);
      console.log("返回顶部");
    },
  }
}