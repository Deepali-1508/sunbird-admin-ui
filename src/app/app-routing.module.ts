import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './sb-admin/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { BulkUploadComponent } from './sb-admin/components/bulk-upload/bulk-upload.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./sb-admin/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'pages', loadChildren: () => import('./sb-admin/components/pages/pages.module').then(m => m.PagesModule) }
                    ,
                    { path: 'bulkUpload',
                    component: BulkUploadComponent
                    }
                    
              
                ]
            },
           
           
             
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
