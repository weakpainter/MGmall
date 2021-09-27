import Toast from './Toast'
const obj = {}

obj.install = function(app) {
    // document.body.appendChild(Toast.$el)
    
    // app.prototype.$toast = Toast
    
    // console.log(app);
    
    // 1.创建组件构造器 //Vue 2.x适用
    // const toastContrustor = Vue.extend(Toast)
    // 2.new的方式，根据组件构造器创建一个组件对象
    // const toast = new toastContrustor()
    // 3.将一个组件对象手动挂载到一个元素上
    // toast.mount(document.createElement('div'))
    // 4.将元素挂载到文档中显示|toast.$el对应的就是div
    // document.body.appendChild(toast.$el)

    // Vue.prototype.$toast = toast

}

export default obj