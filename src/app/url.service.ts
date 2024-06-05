import { Injectable } from '@angular/core';
import { createClient } from 'contentful';


@Injectable({
  providedIn: 'root'
})
export class UrlService {


  private client = createClient({
    space: 'j9wxqfqczhwn',
    accessToken: 'AKr8X7NLUjO9pInWBxCatNQioHUvqzNI_PzgLi4i8cc'
  });

  constructor() { }

  getInvestmentEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'investment'
    }).then(response => {
      // console.log('Investment entries:', response.items); 
      return response.items;
    });
  }
  
  getIndustryEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'industry'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getOtherEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'other'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getStartupEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'startup'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getCompetitorEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'competitor'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getOtherEventEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'otherevent'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getScitechadvancementEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'scitechadvancement'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getPolicyandregulationchangeEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'policyandregulationchange'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }
  
  }
