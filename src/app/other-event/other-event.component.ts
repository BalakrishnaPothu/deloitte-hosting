
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from '../url.service';
import { startup } from '../database/startup';
import { policydata } from '../database/Policydata';
@Component({
  selector: 'app-other-event',
  standalone: true,
  imports: [],
  templateUrl: './other-event.component.html',
  styleUrl: './other-event.component.css'
})
export class OtherEventComponent {
  

  constructor(private urlService: UrlService) { }

 
}
