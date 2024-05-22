import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PolicyComponent } from '../policy/policy.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UrlService } from '../url.service';
import { startup ,startups} from '../database/startup';



@Component({
  selector: 'app-startup',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  RouterModule,PolicyComponent],
  templateUrl: './startup.component.html',
  styleUrl: './startup.component.css'
})
export class StartupComponent implements OnInit{
  startups: startup[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      console.log('Headline:', headline); // Log the received headline
    });

    this.startups = startups;
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      if (headline) {
        setTimeout(() => {
          const element = document.getElementById(headline);
          console.log('Element:', element); // Log the retrieved element
          
          if (element) {
            console.log('Scrolling...'); // Log scrolling attempt
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          }
        }, 1000);
      }
    });
  }

  generateId(headline: string): string {
    return headline.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');

    // return param.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
  }
  }


  



  
