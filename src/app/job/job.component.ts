import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css',
})
export class JobComponent {
  toggle: boolean = true;

  jobs = [1, 2, 3, 4];
}
