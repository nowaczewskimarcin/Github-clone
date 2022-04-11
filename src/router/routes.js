

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/Search', component: () => import('pages/Search.vue') },
      { path: '/FinderV2', component: () => import('pages/FinderV2.vue') },
      { path: '/FinderV3', component: () => import('pages/FinderV3.vue') },
      { path: '/user/:login/details', props: true, name: 'userDetails', component: () => import('pages/user/Details.vue') }
    ]
  },

  // {
  //   path: '/login', // here it is, route /user/profile
  //   component: Login // we reference /src/pages/Profile.vue imported above
  // },
  // {
  //   path: '/repositories', // here it is, route /user/profile
  //   component: Repositories // we reference /src/pages/Profile.vue imported above
  // },
  // {
  //   path: '/searchuser', // here it is, route /user/profile
  //   component: SearchUser // we reference /src/pages/Profile.vue imported above
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
