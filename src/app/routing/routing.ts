export const MainRoutes =[

{
    path: '',
    loadChildren: () => import('../website/home/home.module').then(m => m.HomeModule)
},
    
{
    path: 'Home',
    loadChildren: () => import('../website/home/home.module').then(m => m.HomeModule)
},

{
    path: 'About',
    loadChildren: () => import('../website/about/about.module').then(m => m.AboutModule)
},
{
    path: 'contactus',
    loadChildren: () => import('../website/contactus/contactus.module').then(m => m.ContactusModule)
},
{
    path: 'service',
    loadChildren: () => import('../website/serve/serve.module').then(m => m.ServeModule)
},

{
    path: 'team',
    loadChildren: () => import('../website/team/team.module').then(m => m.TeamModule)
},

]