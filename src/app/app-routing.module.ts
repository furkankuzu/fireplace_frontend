import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'products',
    component: PublicLayoutComponent,
    children: [{ path: '', component: ProductsComponent }],
  },
  {
    path: 'about',
    component: PublicLayoutComponent,
    children: [{ path: '', component: AboutComponent }],
  },
  {
    path: 'contact',
    component: PublicLayoutComponent,
    children: [{ path: '', component: ContactComponent }],
  },
  {
    path: '**',
    pathMatch: 'prefix',
    component: PublicLayoutComponent,
    children: [{ path: '', component: NotFoundComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
