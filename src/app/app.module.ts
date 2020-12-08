import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { NgxLoadingModule } from 'ngx-loading';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { HttpService } from './http.service';
import { HttpClientModule, HttpClient } from '@angular/common/http'


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DonorComponent } from './pages/donor/donor.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreatejobComponent } from './pages/createjob/createjob.component';
import { ShowjobsComponent } from './pages/showjobs/showjobs.component';
import { JobitemComponent } from './pages/jobitem/jobitem.component';
import { IndivisualComponent } from './pages/indivisual/indivisual.component';
import { HonorwallComponent } from './pages/honorwall/honorwall.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    DonorComponent,
    WelcomeComponent,
    CreatejobComponent,
    ShowjobsComponent,
    JobitemComponent,
    IndivisualComponent,
    HonorwallComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    NgxLoadingModule.forRoot({}),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
