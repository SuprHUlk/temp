import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { FactComponent } from './fact/fact.component';
import { SkillComponent } from './skill/skill.component';
import { CustomerComponent } from './customer/customer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from '../footer/footer.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    WelcomeComponent,
    AboutComponent,
    FactComponent,
    SkillComponent,
    CustomerComponent,
    PortfolioComponent,
    FooterComponent,
    TestimonyComponent,
    ContactInfoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  toggle: boolean = false;
}
