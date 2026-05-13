import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },                 // default route
  { path: 'home', component: HomeComponent },             // optional alias
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '' }                          // wildcard fallback to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
