import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { TeamComponent } from './team/team.component';
import { AutoComponent } from './auto/auto.component';
import { ServiceComponent } from './service/service.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { StartupComponent } from './startup/startup.component';
import { PolicyComponent } from './policy/policy.component';
import { PolicyAndRegulationComponent } from './policy-and-regulation/policy-and-regulation.component';
import { InvestmentAndFundingComponent } from './investment-and-funding/investment-and-funding.component';
import { IndustryAndPartnershipsComponent } from './industry-and-partnerships/industry-and-partnerships.component';
import { OtherComponent } from './other/other.component';
import { CompetitorComponent } from './competitor/competitor.component';
import { OtherEventComponent } from './other-event/other-event.component';


export const routes: Routes = [
    { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
    {path:'mainpage',component:MainpageComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'home', component: HomeComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'video', component: VideoComponent},
    {path: 'article', component: ArticleComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'casestudies', component: CasestudiesComponent},
    {path:'team', component: TeamComponent},
    {path:'auto', component: AutoComponent},
    {path: 'startup', component: StartupComponent },
    {path: 'policy', component: PolicyComponent },
    {path: 'startup/:headline', component: StartupComponent },
    {path: 'policy/:headline', component: PolicyComponent },
    {path:'policyandregulation', component: PolicyAndRegulationComponent},
    {path:'investmentandfunding', component: InvestmentAndFundingComponent},
    {path:'industryandpartnerships', component: IndustryAndPartnershipsComponent},
    {path:'other', component: OtherComponent},
    {path:'competitor', component: CompetitorComponent},
    {path:'otherevent', component: OtherEventComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
    
]; 
