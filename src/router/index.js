import Vue from 'vue'
import Router from 'vue-router'
import Demo1 from '@/components/Demo1'
import Demo2 from '@/components/Demo2'
import Demo3 from '@/components/Demo3'
import Demo4 from '@/components/Demo4'

Vue.use(Router)

export default new Router({
  	routes: [
	    {
	      	path: '/demo1',
	      	name: 'demo1',
	      	component: Demo1
	  	},
	  	{
	      	path: '/demo2',
	      	name: 'demo2',
	      	component: Demo2
	  	},
	  	{
	      	path: '/demo3',
	      	name: 'demo3',
	      	component: Demo3
	  	},
	  	{
	      	path: '/demo4',
	      	name: 'demo4',
	      	component: Demo4
	  	}
  	]
})
