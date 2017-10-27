<template>
	<table class="listtable">
	    <tbody>
	         <tr>
	          <td>检查化妆品经营企业是否执行化妆品进货查验制度。</td>
	          <td>
	          	<mt-button type="primary" @click="choose1()" class="yes" :class="{'yesActive':c1}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose2()" class="yes" :class="{'yesActive1':c1s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>是否索取供货企业的相关合法性证件材料。</td>
	          <td>
	          	<mt-button type="primary" @click="choose3()" class="yes" :class="{'yesActive':c2}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose4()" class="yes" :class="{'yesActive1':c2s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>是否建立供货企业档案。</td>
	          <td>
	          	<mt-button type="primary" @click="choose5()" class="yes" :class="{'yesActive':c3}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose6()" class="yes" :class="{'yesActive1':c3s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>是否建立进货台账。</td>
	          <td>
	          	<mt-button type="primary" @click="choose7()" class="yes" :class="{'yesActive':c4}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose8()" class="yes" :class="{'yesActive1':c4s}">否</mt-button><br>
	          </td>
	        </tr>
	    </tbody>
	</table>
</template>

<script type="text/javascript">
	// import './legitimate.scss'
	export default {
		data(){
			return {
				c1:'',
				c1s:'',
				c2:'',
				c2s:'',
				c3:'',
				c3s:'',
				c4:'',
				c4s:'',
				chayanzhidu:'',
				zhengjiancailiao:'',
				qiyedangan:'',
				jinhuotaizhang:'',
			}
		},
		created(){
			let acc = JSON.stringify({chayanzhidu:this.chayanzhidu,zhengjiancailiao:this.zhengjiancailiao,qiyedangan:this.qiyedangan,jinhuotaizhang:this.jinhuotaizhang})
			sessionStorage.setItem('acc',acc)
		},
		methods: {
			choose1(){
				this.c1 = true;
				this.c1s = false;
				this.chayanzhidu = 1;
				let acc = JSON.stringify({chayanzhidu:this.chayanzhidu,zhengjiancailiao:this.zhengjiancailiao,qiyedangan:this.qiyedangan,jinhuotaizhang:this.jinhuotaizhang})
				sessionStorage.setItem('acc',acc)
			},
			choose2(){
				this.c1 = false;
				this.c1s = true;
				this.chayanzhidu = 0;
				let acc = JSON.stringify({chayanzhidu:this.chayanzhidu,zhengjiancailiao:this.zhengjiancailiao,qiyedangan:this.qiyedangan,jinhuotaizhang:this.jinhuotaizhang})
				sessionStorage.setItem('acc',acc)
			},
			choose3(){
				this.c2 = true;
				this.c2s = false;
				this.zhengjiancailiao = 1;
				let acc = JSON.stringify({chayanzhidu:this.chayanzhidu,zhengjiancailiao:this.zhengjiancailiao,qiyedangan:this.qiyedangan,jinhuotaizhang:this.jinhuotaizhang})
				sessionStorage.setItem('acc',acc)
			},
			choose4(){
				this.c2 = false;
				this.c2s = true;
				this.zhengjiancailiao = 0;
				let acc = JSON.stringify({chayanzhidu:this.chayanzhidu,zhengjiancailiao:this.zhengjiancailiao,qiyedangan:this.qiyedangan,jinhuotaizhang:this.jinhuotaizhang})
				sessionStorage.setItem('acc',acc)
			},
			choose5(){
				this.c3 = true;
				this.c3s = false;
				this.qiyedangan = 1;
				let acc = JSON.stringify({chayanzhidu:this.chayanzhidu,zhengjiancailiao:this.zhengjiancailiao,qiyedangan:this.qiyedangan,jinhuotaizhang:this.jinhuotaizhang})
				sessionStorage.setItem('acc',acc)
			},
			choose6(){
				this.c3 = false;
				this.c3s = true;
				this.qiyedangan = 0;
				let acc = JSON.stringify({chayanzhidu:this.chayanzhidu,zhengjiancailiao:this.zhengjiancailiao,qiyedangan:this.qiyedangan,jinhuotaizhang:this.jinhuotaizhang})
				sessionStorage.setItem('acc',acc)
			},
			choose7(){
				this.c4 = true;
				this.c4s = false;
				this.jinhuotaizhang = 1;
				let acc = JSON.stringify({chayanzhidu:this.chayanzhidu,zhengjiancailiao:this.zhengjiancailiao,qiyedangan:this.qiyedangan,jinhuotaizhang:this.jinhuotaizhang})
				sessionStorage.setItem('acc',acc)
			},
			choose8(){
				this.c4 = false;
				this.c4s = true;
				this.jinhuotaizhang = 0;
				let acc = JSON.stringify({chayanzhidu:this.chayanzhidu,zhengjiancailiao:this.zhengjiancailiao,qiyedangan:this.qiyedangan,jinhuotaizhang:this.jinhuotaizhang})
				sessionStorage.setItem('acc',acc)
			},
		},
	}
</script>
