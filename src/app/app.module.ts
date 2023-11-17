import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectTemplateComponent } from './portfolio/project-template/project-template.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioContactsBackgroundComponent } from './portfolio-contacts-background/portfolio-contacts-background.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    MyButtonComponent,
    PortfolioComponent,
    ProjectTemplateComponent,
    ContactComponent,
    FooterComponent,
    PortfolioContactsBackgroundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
