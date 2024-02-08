import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { BodyComponentComponent } from './components/body-component/body-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ImageModule } from 'primeng/image';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { ExperienceComponentComponent } from './components/body-component/experience-component/experience-component.component';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { DataViewModule } from 'primeng/dataview';
import { TabViewModule } from 'primeng/tabview';
import { EducationComponentComponent } from './components/body-component/education-component/education-component.component';
import { CardModule } from 'primeng/card';
import { CoreCompetenciesComponent } from './components/body-component/core-competencies/core-competencies.component';
import { TechnicalSkillsComponent } from './components/body-component/technical-skills/technical-skills.component';
import { OrderListModule } from 'primeng/orderlist';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponentComponent,
    BodyComponentComponent,
    FooterComponentComponent,
    ExperienceComponentComponent,
    EducationComponentComponent,
    CoreCompetenciesComponent,
    TechnicalSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageModule,
    FieldsetModule,
    BrowserAnimationsModule,
    PanelModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    DataViewModule,
    TabViewModule,
    CardModule,
    OrderListModule,
    AnimateOnScrollModule,
    AutoCompleteModule,
    FormsModule,
    ScrollPanelModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
