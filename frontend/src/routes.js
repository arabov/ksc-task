export default [
    {
        path: '/logs',
        component: () => import('./components/Logs.vue'),
        title: 'Logs',
        icon: 'notification_important'
    }, {
        path: '/data',
        component: () => import('./components/Data.vue'),
        title: 'Data',
        icon: 'dns'
    }, {
        path: '/addData',
        component: () => import('./components/AddData.vue'),
        title: 'Add Data',
        icon: 'note_add'
    }
]
