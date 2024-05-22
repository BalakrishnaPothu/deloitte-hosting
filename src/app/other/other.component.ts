import { Component, Output ,EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { policydata, policysdata } from '../database/Policydata';
import { startup, startups } from '../database/startup';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlService } from '../url.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';





@Component({
  selector: 'app-other',
  standalone: true,
  imports: [
    FormsModule,ReactiveFormsModule,CommonModule
    ],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
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

  generateSuggestions(item: startup | policydata): { content: string; item: startup | policydata; }[] {
    const suggestions: { content: string; item: startup | policydata; }[] = [];
    Object.values(item).forEach((val: any) => {
      if (typeof val === 'string' && val.toLowerCase().includes(this.searchQuery.toLowerCase())) {
        const words = val.split(' ');
        const index = words.findIndex(word => word.toLowerCase().includes(this.searchQuery.toLowerCase()));
        const start = Math.max(0, index - 0);
        const end = Math.min(words.length, index + 5);
        const context = words.slice(start, end).join(' ');
        suggestions.push({ content: context, item: item });
      }
    });
    return suggestions;
  }

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
