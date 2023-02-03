const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Tables.vue')},
      {path: '/Pagination', component: () => import('pages/Pagination.vue')},
      {path: '/Footer', component: () => import('pages/Footer.vue')},

      // Not completed yet
      // {path: '/Taskboard', component: () => import('pages/TaskBoard.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/Maintenance',
    component: () => import('pages/Maintenance.vue')
  }
]

export default routes
