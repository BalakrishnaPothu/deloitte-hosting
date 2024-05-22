import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, CommonModule} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { IgxInputGroupModule } from 'igniteui-angular';
import { MatIconModule } from '@angular/material/icon';
import { Observable, map, startWith } from 'rxjs';
import { UrlService } from '../url.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-auto',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    IgxInputGroupModule,
    AsyncPipe,
    CommonModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent,
    ],
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.css',
  
})
export class AutoComponent {
  
  
}
