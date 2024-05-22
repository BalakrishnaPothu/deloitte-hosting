import { Component } from '@angular/core';
import { policydata } from '../database/Policydata';
import { startup } from '../database/startup';
import { Observable } from 'rxjs';
import { UrlService } from '../url.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherComponent } from '../other/other.component';
import { OtherEventComponent } from '../other-event/other-event.component';

@Component({
  selector: 'app-industry-and-partnerships',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,OtherComponent,OtherEventComponent],
  templateUrl: './industry-and-partnerships.component.html',
  styleUrl: './industry-and-partnerships.component.css'
})
export class IndustryAndPartnershipsComponent {
  

  constructor(private urlService: UrlService) { }

  
}
