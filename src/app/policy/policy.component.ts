import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { policydata ,policysdata} from '../database/Policydata'; // Import the policydata interfac



@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    RouterModule],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css'
})
export class PolicyComponent implements OnInit{
  @ViewChild('contentSection') contentSection!: ElementRef;
  policysdata: policydata[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      console.log('Headline:', headline); // Log the received headline

      if (headline) {
        setTimeout(() => {
          const id = this.generateId(headline);
          console.log('Generated ID:', id); // Log the generated ID

          const element = document.getElementById(id);
          console.log('Element:', element); // Log the retrieved element

          if (element) {
            console.log('Scrolling...'); // Log scrolling attempt
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          }
        }, 100);
      }
    });

    this.policysdata = policysdata;
  }

  generateId(headline: string): string {
    // Ensure that the generated ID matches the format used in the HTML
    // return headline.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
    return headline.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');

  }
}    
