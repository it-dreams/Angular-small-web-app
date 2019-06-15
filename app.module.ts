import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FatchDataService } from './service/fatch-data.service';
import { FetchDataAPIService } from './service/FetchDataApi.services';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/register/register.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HighLighterDirective } from './directive/high-lighter.directive';
import { FontHighLighterDirective } from './directive/font-high-lighter.directive';

let routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "services", component: ServiceComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "contact", component: ContactComponent},
  {path: "signup", component: RegisterComponent},
  {path: "admin", component: AdminComponent},
  {path: "posts", component: PostsComponent},
  {path: "posts/:id", component: PostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    PortfolioComponent,
    HomeComponent,
    SidebarComponent,
    AdminComponent,
    RegisterComponent,
    PostsComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    HighLighterDirective,
    FontHighLighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [
    FatchDataService, 
    FetchDataAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
