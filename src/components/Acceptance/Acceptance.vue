<template>
	<table class="listtable">
	    <tbody>
	        <!-- <tr v-for="(item,index) in list">
	          <td>{{item[0]}}</td>
	          <td>
	          	<mt-button type="primary" @click="choose(index,indexs)" class="yes" :class="{'yesActive': active == indexs&&actives == index}" v-for="(arr,indexs) in item[1]">{{arr}}</mt-button><br>
	          </td>
	        </tr> -->
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
				// list:[['所经营的国产化妆品是否由取得有效的《化妆品生产企业卫生许可证》的企业生产。',['是','否']],
				// 	 ['国产特殊用途化妆品是否取得“国产特殊用途化妆品批准文号”。',['是','否']],
				// 	 ['进口非特殊用途化妆品是否取得“进口非特殊用途化妆品备案凭证”（查看复印件）。',['是','否']],
				// 	 ['进口特殊用途化妆品是否取得“进口特殊用途化妆品卫生许可批件”（查看复印件）。',['是','否']],
				// 	 ['经营的进口化妆品是否在卫生许可批件或备案凭证有效期内入境。',['是','否']],
				// 	 ['进口化妆品是否经过检验检疫部门检验。',['是','否']]],
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

		},
		methods: {
			choose1(){
				this.c1 = true;
				this.c1s = false;
				this.chayanzhidu = 1;
			},
			choose2(){
				this.c1 = false;
				this.c1s = true;
				this.chayanzhidu = 0;
			},
			choose3(){
				this.c2 = true;
				this.c2s = false;
				this.zhengjiancailiao = 1;
			},
			choose4(){
				this.c2 = false;
				this.c2s = true;
				this.zhengjiancailiao = 0;
			},
			choose5(){
				this.c3 = true;
				this.c3s = false;
				this.qiyedangan = 1;
			},
			choose6(){
				this.c3 = false;
				this.c3s = true;
				this.qiyedangan = 0;
			},
			choose7(){
				this.c4 = true;
				this.c4s = false;
				this.jinhuotaizhang = 1;
				let acc = JSON.stringify({chayanzhidu:this.chayanzhidu,zhengjiancailiao:this.zhengjiancailiao,qiyedangan:this.qiyedangan,jinhuotaizhang:this.jinhuotaizhang})
				sessionStorage.setItem('acc',acc)
				console.log(JSON.parse(sessionStorage.getItem('acc')))
			},
			choose8(){
				this.c4 = false;
				this.c4s = true;
				this.jinhuotaizhang = 0;
				let acc = JSON.stringify({chayanzhidu:this.chayanzhidu,zhengjiancailiao:this.zhengjiancailiao,qiyedangan:this.qiyedangan,jinhuotaizhang:this.jinhuotaizhang})
				sessionStorage.setItem('acc',acc)
				console.log(JSON.parse(sessionStorage.getItem('acc')))
			},
		},
	}
</script>
