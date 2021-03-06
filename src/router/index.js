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
import FileManagementType from '../components/FileManagement/FileManagementType.vue'
import JobMonitoring from '../components/JobMonitoring/JobMonitoring.vue'
import Incomplete from '../components/Incomplete/Incomplete.vue'
import MonitoringManagement from '../components/MonitoringManagement/MonitoringManagement.vue'
import EditJobInformation from '../components/EditJobInformation/EditJobInformation.vue'
import EnterpriseSelfExamination from '../components/EnterpriseSelfExamination/EnterpriseSelfExamination.vue'
import legitimate from '../components/legitimate/legitimate.vue'
import EditPsw from '../components/EditPsw/EditPsw.vue'
import Identification from '../components/Identification/Identification.vue'
import Acceptance from '../components/Acceptance/Acceptance.vue'
import Term from '../components/Term/Term.vue'
import Others from '../components/Others/Others.vue'
import StorageCondition from '../components/StorageCondition/StorageCondition.vue'
import Propaganda from '../components/Propaganda/Propaganda.vue'
import Purchase from '../components/Purchase/Purchase.vue'
import EditPurchase from '../components/Purchase/EditPurchase.vue'
import workStatus from '../components/Purchase/workStatus.vue'
import PurchaseLie from '../components/Purchase/PurchaseLie.vue'
import FirstBusiness from '../components/FirstBusiness/FirstBusiness.vue'
import EditFirstBusiness from '../components/FirstBusiness/EditFirstBusiness.vue'
import AddProduct from '../components/AddProduct/AddProduct.vue'
import EditAddProduct from '../components/AddProduct/EditAddProduct.vue'
import Sale from '../components/Sale/Sale.vue'
import FirstSelf from '../components/FirstSelf/FirstSelf.vue'
import Result from '../components/Result/Result.vue'
import Result1 from '../components/Result1/Result1.vue'
import Result2 from '../components/Result2/Result2.vue'
import Result3 from '../components/Result3/Result3.vue'
import QualityTracking from '../components/QualityTracking/QualityTracking.vue'
import TraceabilityFile from '../components/TraceabilityFile/TraceabilityFile.vue'
import Recall from '../components/Recall/Recall.vue'
import RecallInformation from '../components/RecallInformation/RecallInformation.vue'
import RecallNote from '../components/RecallNote/RecallNote.vue'
import SendNotice from '../components/SendNotice/SendNotice.vue'
import FillDirections from '../components/FillDirections/FillDirections.vue'
import FillTable from '../components/FillTable/FillTable.vue'
import newsdetail from '../components/newsdetail/newsdetail.vue'




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
        path:'/FileManagementType',
        name:'FileManagementType',
        component:FileManagementType,
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
    },{
        path:'/EnterpriseSelfExamination',
        name:'EnterpriseSelfExamination',
        component:EnterpriseSelfExamination,
        children: [  
            { path: "/legitimate", 
              name:'legitimate', 
              component: legitimate 
            },{ path: "/Identification", 
              name:'Identification', 
              component: Identification 
            },
            { path: "/Acceptance", 
              name:'Acceptance', 
              component: Acceptance 
            },{ path: "/Term", 
              name:'Term', 
              component: Term 
            },{ path: "/Others", 
              name:'Others', 
              component: Others 
            },{ path: "/StorageCondition", 
              name:'StorageCondition', 
              component: StorageCondition 
            },{ path: "/Propaganda", 
              name:'Propaganda', 
              component: Propaganda 
            },]  
    },{
        path:'/EditPsw',
        name:'EditPsw',
        component:EditPsw,
    },{
        path:'/Purchase',
        name:'Purchase',
        component:Purchase,
    },{
        path:'/EditPurchase',
        name:'EditPurchase',
        component:EditPurchase,
    },{
        path:'/workStatus',
        name:'workStatus',
        component:workStatus,
    },{
        path:'/PurchaseLie',
        name:'PurchaseLie',
        component:PurchaseLie,
    },{
        path:'/FirstBusiness',
        name:'FirstBusiness',
        component:FirstBusiness,
    },{
        path:'/EditFirstBusiness',
        name:'EditFirstBusiness',
        component:EditFirstBusiness,
    },{
        path:'/AddProduct',
        name:'AddProduct',
        component:AddProduct,
    },{
        path:'/EditAddProduct',
        name:'EditAddProduct',
        component:EditAddProduct,
    },{
        path:'/Sale',
        name:'Sale',
        component:Sale,
    },{
        path:'/FirstSelf',
        name:'FirstSelf',
        component:FirstSelf,
    },{
        path:'/Result',
        name:'Result',
        component:Result,
    },{
        path:'/Result1',
        name:'Result1',
        component:Result1,
    },{
        path:'/Result2',
        name:'Result2',
        component:Result2,
    },{
        path:'/Result3',
        name:'Result3',
        component:Result3,
    },{
        path:'/QualityTracking',
        name:'QualityTracking',
        component:QualityTracking,
    },{
        path:'/TraceabilityFile',
        name:'TraceabilityFile',
        component:TraceabilityFile,
    },{
        path:'/Recall',
        name:'Recall',
        component:Recall,
    },{
        path:'/RecallInformation',
        name:'RecallInformation',
        component:RecallInformation,
    },{
        path:'/RecallNote',
        name:'RecallNote',
        component:RecallNote,
    },{
        path:'/SendNotice',
        name:'SendNotice',
        component:SendNotice,
    },{
        path:'/FillDirections',
        name:'FillDirections',
        component:FillDirections,
    },{
        path:'/FillTable',
        name:'FillTable',
        component:FillTable,
    },{
        path:'/newsdetail',
        name:'newsdetail',
        component:newsdetail,
    },]
})

// 对将要进入的路由进行权判断
router.beforeEach((to, from, next) =>{
	// console.log(to);
    window.scrollTo(0, 0)
	if(to.path.indexOf('login') < 0 && !window.sessionStorage.getItem('user')){
		router.replace('login');
		next();
	} 
	next();
})

export default router