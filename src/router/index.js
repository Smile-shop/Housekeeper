import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/login.vue'
import Regist from '../components/regist/regist.vue'
import index from '../components/index/index.vue'
import housekeeper from '../components/housekeeper/housekeeper.vue'
import systemConstruction from '../components/systemConstruction/systemConstruction.vue'
import rules from '../components/rules/rules.vue'
import jobManagement from '../components/jobManagement/jobManagement.vue'
import equipmentRegistration from '../components/equipmentRegistration/equipmentRegistration.vue'
import EditInformation from '../components/EditInformation/EditInformation.vue'
import setRules from '../components/setRules/setRules.vue'
import checkForm from '../components/checkForm/checkForm.vue'
import remind from '../components/remind/remind.vue'
import AuditsManagement from '../components/AuditsManagement/AuditsManagement.vue'
import FileManagement from '../components/FileManagement/FileManagement.vue'
import JobMonitoring from '../components/JobMonitoring/JobMonitoring.vue'
import Incomplete from '../components/Incomplete/Incomplete.vue'
import MonitoringManagement from '../components/MonitoringManagement/MonitoringManagement.vue'
import EditJobInformation from '../components/EditJobInformation/EditJobInformation.vue'



Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
        path:'/login',
        name:'login',
        component:Login,
    }, {
        path:'/regist',
        name:'regist',
        component:Regist,
    },{
        path:'/',
        name:'index',
        component:index,
    },{
        path:'/housekeeper',
        name:'housekeeper',
        component:housekeeper,
    },{
        path:'/systemConstruction',
        name:'systemConstruction',
        component:systemConstruction,
    },{
        path:'/rules',
        name:'rules',
        component:rules,
    },{
        path:'/jobManagement',
        name:'jobManagement',
        component:jobManagement,
    },{
        path:'/equipmentRegistration',
        name:'equipmentRegistration',
        component:equipmentRegistration,
    },{
        path:'/EditInformation',
        name:'EditInformation',
        component:EditInformation,
    },{
        path:'/setRules',
        name:'setRules',
        component:setRules,
    },{
        path:'/checkForm',
        name:'checkForm',
        component:checkForm,
    },{
        path:'/remind',
        name:'remind',
        component:remind,
    },{
        path:'/AuditsManagement',
        name:'AuditsManagement',
        component:AuditsManagement,
    },{
        path:'/FileManagement',
        name:'FileManagement',
        component:FileManagement,
    },{
        path:'/JobMonitoring',
        name:'JobMonitoring',
        component:JobMonitoring,
    },{
        path:'/Incomplete',
        name:'Incomplete',
        component:Incomplete,
    },{
        path:'/MonitoringManagement',
        name:'MonitoringManagement',
        component:MonitoringManagement,
    },{
        path:'/EditJobInformation',
        name:'EditJobInformation',
        component:EditJobInformation,
    },]
})

//对将要进入的路由进行权判断
router.beforeEach((to, from, next) =>{
	// console.log(to);
	if(to.path.indexOf('login') < 0 && !window.sessionStorage.getItem('user')){
		router.replace('login');
		next();
	} 
	next();
})

export default router