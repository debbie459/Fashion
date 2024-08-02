import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { BestSellerComponent } from './products/best-seller/best-seller.component';
import { ProductsComponent } from './products/products.component';
import { MenComponent } from './products/men/men.component';
import { WomenComponent } from './products/women/women.component';
import { KidsComponent } from './products/kids/kids.component';
import { CollectionsComponent } from './products/collections/collections.component';
import { TrendingComponent } from './products/trending/trending.component';
import { DealComponent } from './products/deal/deal.component';
import { LoginComponent } from './login/login.component';
import { NewCollectionsComponent } from './products/new-collections/new-collections.component';
import { HotComponent } from './products/hot/hot.component';
import { OnSaleComponent } from './products/on-sale/on-sale.component';
import { ArrivalsComponent } from './products/arrivals/arrivals.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"cart", component:CartComponent},
    {path:'bestseller', component:BestSellerComponent},
    {path:"men", component:MenComponent},
    {path:"women", component:WomenComponent},
    {path:"kids", component:KidsComponent},
    {path:"collections", component:CollectionsComponent,
        children: [
            {path:'new-collections', component:NewCollectionsComponent}
        ]
    },
    {path:'products', component:ProductsComponent,
        children:[
            {path:"hot", component:HotComponent} ,
            {path:"on-sale", component:OnSaleComponent} ,
            {path:"trending", component:TrendingComponent} ,
            {path:"arrivals", component:ArrivalsComponent} ,
        ]
    },
    {path:"deal-of-the-day", component:DealComponent},
    {path:"login", component:LoginComponent}         
];
    

