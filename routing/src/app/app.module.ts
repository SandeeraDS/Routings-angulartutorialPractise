import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServerComponent} from './servers/server/server.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersService} from './servers/servers.service';
import {importExpr} from '@angular/compiler/src/output/output_ast';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGaurd} from './auth-gaurd.service';
import {AuthService} from './auth.service';
import {CanDeactivateGaurd} from './servers/edit-server/can-deactivate-gaurd.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';

// const appRoute: Routes = [
//   {path: '', component: HomeComponent},
//   {
//     path: 'users', component: UsersComponent, children: [
//       {path: ':id/:name', component: UserComponent}
//     ]
//   },
//
//   {
//     path: 'servers', component: ServersComponent, children: [
//       {path: ':id', component: ServerComponent},
//       {path: ':id/edit', component: EditServerComponent}
//     ]
//   },
//   {path: 'not-found', component: PageNotFoundComponent},
//   {path: '**', redirectTo: '/not-found'}
//
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoute) // registering our route
  ],
  providers: [ServersService, AuthGaurd, AuthService, CanDeactivateGaurd, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
