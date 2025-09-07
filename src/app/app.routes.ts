import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
  
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./Pages/home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./Pages/productss/products/products.component').then(
            (m) => m.ProductsComponent
          )
      },
      {
        path: 'products/:id',
        loadComponent: () =>
          import('./Pages/productss/productsdetails/productsdetails.component').then(
            (m) => m.ProductsdetailsComponent
          )
      },
      {
        path: 'category',
        loadComponent: () =>
          import('./Pages/categoris/categoris.component').then(
            (m) => m.CategorisComponent
          )
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./Pages/brands/brands.component').then((m) => m.BrandsComponent)
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./Pages/whishlist/whishlist.component').then(
            (m) => m.WhishlistComponent
          )
      }
    ]
  },
  // Auth Routes
  {
    path: 'auth',
    loadComponent: () =>
      import('./Pages/Auth/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./Pages/Auth/login/login.component').then((m) => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./Pages/Auth/register/register.component').then(
            (m) => m.RegisterComponent
          )
      }
    ]
  },
  // Fallback 404
  {
    path: '**',
    loadComponent: () =>
      import('./Pages/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      )
  }
];
