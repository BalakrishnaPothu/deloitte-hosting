import { Component, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlService } from '../url.service';
import { CommonModule } from '@angular/common';
import { policydata, policysdata } from '../database/Policydata';
import { startup, startups } from '../database/startup';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,FormsModule
    ,ReactiveFormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent implements OnInit{
  allData: (startup | policydata)[] = [...policysdata, ...startups];
  searchQuery: string = '';
  filteredResults: (startup | policydata)[] = [];
  showSuggestions: boolean = false;
  searchSuggestions: { content: string; item: startup | policydata; }[] = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['q'];
      if (query) {
        this.searchQuery = query;
        this.filterResults();
      }
    });
  }

  onSearchInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
    this.filterResults();
  }

  filterResults() {
    // Filter the data based on search query
    this.filteredResults = this.allData.filter((item: startup | policydata) =>
      Object.values(item).some((val: any) =>
        typeof val === 'string' && val.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    );

    // Generate suggestions based on filtered results
    this.searchSuggestions = this.filteredResults.flatMap(item => this.generateSuggestions(item));

    // Show/hide suggestions based on search query length
    this.showSuggestions = this.searchQuery.length > 0 && this.searchSuggestions.length > 0;
  }

  // generateSuggestions(item: startup | policydata): { content: string; item: startup | policydata; }[] {
  //   const suggestions: { content: string; item: startup | policydata; }[] = [];
  //   Object.values(item).forEach((val: any) => {
  //     if (typeof val === 'string' && val.toLowerCase().includes(this.searchQuery.toLowerCase())) {
  //       const words = val.split(' ');
  //       const index = words.findIndex(word => word.toLowerCase().includes(this.searchQuery.toLowerCase()));
  //       const start = Math.max(0, index - 3);
  //       const end = Math.min(words.length, index + 6);
  //       const context = words.slice(start, end).join(' ');
  //       suggestions.push({ content: context, item: item });
  //     }
  //   });
  //   return suggestions;
  // }

  generateSuggestions(item: startup | policydata): { content: string; item: startup | policydata; }[] {
    const suggestions: { content: string; item: startup | policydata; }[] = [];
    const queryWords = this.searchQuery.toLowerCase().split(' '); // Split the search query into words
  
    Object.values(item).forEach((val: any) => {
      if (typeof val === 'string') {
        const words = val.toLowerCase().split(' '); // Split the text into words
        let hasMatch = false;
        let context = '';
  
        for (let i = 0; i < words.length; i++) {
          // Check if the current word starts with any of the query words
          if (queryWords.some(queryWord => words[i].startsWith(queryWord))) {
            const start = Math.max(0, i - 3);
            const end = Math.min(words.length, i + 6);
            context = words.slice(start, end).join(' ');
            hasMatch = true;
            break; // Exit the loop after finding a match
          }
        }
  
        if (hasMatch) {
          suggestions.unshift({ content: context, item: item }); // Add matched suggestions to the beginning
        }
      }
    });
  
    return suggestions;
  }
  
  
  

  // navigateToContent(item: startup | policydata) {
  //   const headline = ('headline' in item) ? item.headline : (item as any).country;
  // if ('headline' in item) {
  //   // It's a startup, navigate to StartupComponent and pass the headline as a parameter
  //   this.router.navigate(['/startup', this.formatRouteParam(headline)], { queryParams: { headline: this.formatRouteParam(headline) } });
  // } else {
  //   // It's a policy data, navigate to PolicyComponent and pass the headline as a parameter
  //   this.router.navigate(['/policy', this.formatRouteParam(headline)], { queryParams: { headline: this.formatRouteParam(headline) } });
  // }
  // }

  navigateToContent(item: startup | policydata) {
    console.log('Navigating to content:', item);
    let routePath: string = ''; // Initialize routePath with a default value
    
    if ('startupCapability' in item) {
      console.log('Startup item detected:', item);
      // It's a startup, navigate to StartupComponent and pass the headline as a parameter
      routePath = '/startup';
    } else if ('impact' in item) {
      console.log('Policy data item detected:', item);
      // It's a policy data, navigate to PolicyComponent and pass the headline as a parameter
      routePath = '/policy';
    }
  
    // Check if routePath is empty before navigating
    if (routePath !== '') {
      const headline = ('headline' in item) ? item.headline : (item as any).country;
      this.router.navigate([routePath, this.formatRouteParam(headline)], { queryParams: { q: this.searchQuery } });
    } else {
      console.error('Route path not determined. Unable to navigate.');
    }
  }

  formatRouteParam(param: string): string {
    // Format the parameter to remove spaces and special characters
    return param.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
    
  }

}
