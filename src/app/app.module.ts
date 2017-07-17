import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './___common_module/__components/navbar/navbar.component';
import { ListEnginComponent } from './___engin_module/__components/engins/list-engin/list-engin.component';
import { DashboardComponent } from './___common_module/__components/dashboard/dashboard.component';
import { AdvancedSearchEnginComponent } from './___engin_module/__components/advanced-search-engin/advanced-search-engin.component';
import { EnginService } from './___engin_module/__services/engin/engin.service';
import { AdvancedSearchEnginService } from './___engin_module/__services/advanced-search-engin/advanced-search-engin.service';
import { AddEnginComponent } from './___engin_module/__components/engins/add-engin/add-engin.component';
import { AsideComponent } from './___common_module/__components/aside/aside.component';
import { UpdateEnginModalComponent } from './___engin_module/__components/engins/update-engin-modal/update-engin-modal.component';
import { DetailEnginModalComponent } from './___engin_module/__components/engins/detail-engin-modal/detail-engin-modal.component';
import { LoginComponent } from './___authentication_module/__components/login/login.component';
import { RegisterComponent } from './___authentication_module/__components/register/register.component';
import { AuthGuard } from './___authentication_module/__guards/auth.guard';
import { AuthenticationService } from './___authentication_module/__services/authentication_service/authentication.service';
import { AddPanneComponent } from './___panne_module/__components/add-panne/add-panne.component';
import { ListPanneComponent } from './___panne_module/__components/list-panne/list-panne.component';
import { SharedService } from './___common_module/__services/shared-services/shared.service';
import { ChoixDevisComponent } from './___panne_module/__components/choix-devis/choix-devis.component';
import { DetailPanneModalComponent } from './___panne_module/__components/detail-panne-modal/detail-panne-modal.component';
import { AddDevisComponent } from './___panne_module/__components/add-devis/add-devis.component';
import { UpdatePanneModalComponent } from './___panne_module/__components/update-panne-modal/update-panne-modal.component';
import { AddDevisModalComponent } from './___panne_module/__components/add-devis-modal/add-devis-modal.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'engins', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  // engins is the home page ==> guard the home page for unauthorized persons
  { path: 'engins', component: ListEnginComponent }, // , canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent }, // , canActivate: [AuthGuard]},
  { path: 'engins/add', component: AddEnginComponent }, // , canActivate: [AuthGuard]},

  { path: 'pannes', component: ListPanneComponent},
  { path: 'ajout-panne', component: AddPanneComponent},
  { path: 'engins/:id/ajout-panne', component: AddPanneComponent},
  { path: 'pannes/choix-devis', component: ChoixDevisComponent},
  { path: '**', redirectTo: 'engins', pathMatch: 'full' } // , canActivate: [AuthGuard]}
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListEnginComponent,
    DashboardComponent,
    AdvancedSearchEnginComponent,
    AddEnginComponent,
    AsideComponent,
    UpdateEnginModalComponent,
    DetailEnginModalComponent,
    LoginComponent,
    RegisterComponent,
    AddPanneComponent,
    ListPanneComponent,
    ChoixDevisComponent,
    DetailPanneModalComponent,
    AddDevisComponent,
    UpdatePanneModalComponent,
    AddDevisModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule,
    FlashMessagesModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EnginService,
    AdvancedSearchEnginService,
    AuthGuard,
    AuthenticationService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

