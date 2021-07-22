import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
// Message弹框提示组件

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 这里的$message是自定义属性，不做强制要求
Vue.prototype.$message = Message
