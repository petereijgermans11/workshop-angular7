import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'confirmation', component: ConfirmationPageComponent },
  { path: 'app', component: AppComponent},
  { path: '**', component: RegistrationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
