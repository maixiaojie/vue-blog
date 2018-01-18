import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import index from '@/components/index/index'
import Blog from '@/components/blog/blog'
import BlogDetail from '@/components/blog/detail'
import BlogNew from '@/components/blog/new'
import TimeLine from '@/components/blog/timeline'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
      	{
	    	path: '/',
	    	name: 'index',
	    	component: index
	    },
			{
	    	path: '/blog',
	    	name: 'Blog',
	    	component: Blog
	    },{
	    	path: '/new',
	    	name: 'BlogNew',
	    	component: BlogNew
	    },{
	    	path: 'timeline',
	    	name: 'TimeLine',
	    	component: TimeLine
	    },{
	    	path: '/blog/:id',
	    	name: 'BlogDetail',
	    	component: BlogDetail
	    }
      ]
    }
  ]
})
