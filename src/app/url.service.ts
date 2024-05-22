import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { policydata } from './database/Policydata';
import { startup } from './database/startup';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private policies: policydata[] = [];
  private startups: startup[] = [];
  private searchResultsSubject: BehaviorSubject<(policydata | startup)[]> = new BehaviorSubject<(policydata | startup)[]>([]);

  constructor(private router: Router) { }

  setPolicies(policies: policydata[]) {
    this.policies = policies;
  }

  setStartups(startups: startup[]) {
    this.startups = startups;
  }

  search(query: string): Observable<(policydata | startup)[]> {
    const policyResults = this.policies.filter(policy =>
      policy.country.toLowerCase().includes(query.toLowerCase()) ||
      policy.headline.toLowerCase().includes(query.toLowerCase())
    );

    const startupResults = this.startups.filter(startup =>
      startup.country.toLowerCase().includes(query.toLowerCase()) ||
      startup.headline.toLowerCase().includes(query.toLowerCase())
    );

    const searchResults = [...policyResults, ...startupResults];
    this.searchResultsSubject.next(searchResults);

    return this.searchResultsSubject.asObservable();
  }

  navigateToResult(result: policydata | startup) {
    if ('startupCapability' in result) {
      this.router.navigate(['/startup']);
    } else {
      this.router.navigate(['/policy']);
    }
  }
  
  // }












      //-----------------------------------

//       startupComponentContent = 
//       `Rocket Lab Launches StriX-3 Satellite for Synspective
//       SpeQtral and Arquimea Announce Strategic MOU to Advance Quantum Secure Solutions and Satellite Technologies
//       5 spacetech startups taking off in Southeast Asia
//       Taiwan launches its first international SpaceTech startup collaboration project
//       AgniKul set to launch 3D printed sub-orbital rocket later this month
//       Cow-Dung Powers Japans New Rocket Engine Prototype, Advances in Sustainable Space Tech
//       Hong Kong marine technology space start-up Clearbot’s new generation of autonomous boats will tackle Indian water pollution
//       Spacetech firm Aliena to spend half of $5.6m raise to ramp up engine production
//       ispace Signs MoU with mu Space for Future Lunar Missions
//       Peak XV-Backed Digantara Inaugurates 25,000-sq ft Satellite Assembly Facility In Bengaluru
//       kyroot Aerospace Leads Indias Space Sector Surge with Historic Private Rocket Launch
//       mu Space + RBC Signals sign MoU for satellite ground station facilities project 
//       `;
    
//       autoComponentContent = 
//       `Qualcomm Announces Support for India’s NavIC Satellite Navigation System
//       Plants in Space to address sustainability challenges
//       Space Spotlight: Moving spacecraft with mothball power
//       'Homegrown AgTech using space to benefit farmers',
//       Rocket Lab Electron rocket lifts off with space debris removal mission
//       Axelspace s Demonstration Satellite PYXIS Scheduled for Launch
//       Filipino Space Experiments Performed by JAXA Astronaut on the ISS
//       IHI AEROSPACEs Hydrogen Fuel Cell Electric Propulsion System Technology Development
//       Cow-Dung Powers Japans New Rocket Engine Prototype, Advances in Sustainable Space Tech
//       Nuclear fusion reactor in South Korea runs at 100 million degrees C for a record-breaking 48 seconds
//       `;

//       policyandregulationContent= 
//       `Why Russia won’t have its anti-satellite weapon in space anytime soon 
//       Senate bills seek to reform commercial space regulations
//       Senate passes the Orbital Sustainability Act of 2023 or the Orbits Act of 2023
//       US and Japan to sponsor a U.N. Security Resolution to ban deployment of nuclear weapons in space
//       Uruguay is the most recent country which signed the Artemis Accords
//       White House directs NASA to develop lunar time standard
//       China, Thailand sign pacts on outer space, lunar outposts
//       SpaceX applies for Indonesia internet service provider permit, government says
//       A general introduction to Space Law in Thailand
//       SpaceX launches South Koreas second spy satellite amid race with North
//       Official visit of Luxembourg Space Agency to SG strengthens bilateral ties
//       Singapore, UK co-lead first Asia-Pacific shared mission to space
//       Mitsui Sumitomo announces plans to develop space tourism insurance
//       Japanese astronaut to be the first non-American on the Moon
//       India announced the first 4 astronauts selected for Gaganyaan Mission
//       Nicaragua joined Chinas ILRS moon base program
//       Russia vetoes UN Security Council Resolution proposed by US and Japan
//       `;
//       investmentandfundingContent=
//       `Qosmosys Secures Historic US$100 Million In Seed Funding, Sets New Industry Record
//       Telkomsat investing IDR 3.5 trillion ($218 million) for Satelit Merah Putih 2, Jasindo gives full coverage
//       Elon Musk's SpaceX to Invest in Indonesia's New Capital City for Starlink Internet Network
//       Kominfo unveils plans for the Satria-2 Satellite funded through foreign investment
//       India Boosts Space Sector Investment with Expanded Foreign Funding Limits
//       Spacetech Startup Manastu Raises Funding To Reduce Debris Pollution In Space
//       India eases approval process for foreign direct investment in space sector
//       India enters era of research, private investment to boost space tech innovation
//       Japan to create ¥1 trillion fund to develop outer space industry 
//       SKY Perfect JSAT Announces 10 Billion Yen Investment to Accelerate Collaborations with Space-related Startups
//       Seoul to double budget by 2027 to join global space race 
//       Funding for three Australia-UK projects
//       SmartSat backs autonomous satellite technologies for Australian in-orbit servicing capabilities in $2.3 million research effort
//       $15.7m for space initiatives: Speedy delivery crucial, sector leaders say
//       US wants NZ to stump up cash for $1.6b military satellite project
//       New Zealand Govt. drives investment in the global space sector
//       Tsai announces NT$40bn boost for space program
//       Abu Dhabi sovereign fund to invest in space tech, AI this year
//       `;

//       industryandpartnershipsContent=
//       `NATO to Strengthen Partnership With Space Industry, Launches APSS
//       Astrolight Joins DIANA to Accelerate Innovation in Defense Tech
//       FACT SHEET: STRENGTHENING U.S. INTERNATIONAL SPACE PARTNERSHIPS
//       A Beacon of Hope: Artemis II will send first woman and first person of color around the moon
//       Uzma and Satellogic to Advance Geospatial Capabilities in Southeast Asia
//       India aims to achieve debris-free space missions by 2030
//       SpaceX secures network operating permit for Indonesia
//       NASA, Japan Advance Space Cooperation, Sign Agreement for Lunar Rover
//       Mitsubishi Corporation Joins Starlab Space as Strategic Partner, Equity Owner in Joint Venture
//       NZ-Australia work to advance space science
//       Bridging the Digital Gulf: mu Space and OneWeb Launch Satellite Internet, Revolutionizing Connectivity in Southeast Asia
//       Kepler, TESAT, and Airbus Join Forces to Build High-Speed Optical Communications Network in Space
//       China to build satellite ground stations in Antarctica
//       The Philippines gives green light to Starlink
//       Boryung, Axiom Space launch joint venture in Korea
//       Indonesia and India Forge New Space Collaboration through ISRO and BRIN Sign Agreement
//       Thailand approves 2 MoUs for exploration of Moon, outer space with China
//       `;

//       otherContent=
//       `
//       SpaceXs Starlink Satellite Internet Service Is Now Open to the Public, But Its Not Cheap
//       Amazons Kuiper System Plans to Launch 3,236 Satellites to Provide Global Internet Coverage
//       How SpaceX, OneWeb and Amazon Will Make Space-Based Internet a Reality
//       ISS Astronauts Are Testing a New Surface Coating to Fight Space Germs
//       The Next Frontier: Biomedical Research in Space
//       Could mini space-grown organs be our 'cancer moonshot?
//       Does the future of medicine lie in space?
//       NASA rolls out new space sustainability strategy - SpaceNews
//       Varda raises $90 million to fuel space manufacturing efforts
//       Future quantum computers will be no match for space encryption that uses light to beam data around — with the 1st satellite launching in 2025
//       A Stellar Guide To Equality: Empowering Women In Space Tech Through Training, Networks And Mentorship
//       From Lab to Classroom: How NASA Tech Improves Learning 
//       Surgeons Perform Simulated Surgery in Space Using New Remote Technology
// Surgery in space: Tiny remotely operated robot completes first simulated procedure at the space station.
// Earthbound doctors successfully operate surgical robot in space.
// Space surgery: Doctors on ground operate robot on ISS for first time. 
// What breakthroughs in medicine came from NASA? | HowStuffWorks
// Why scientists are making space data into sounds
// The Philippine Space Program: A Modern Take on Establishing a National Space Program
// SES has launched its O3b mPower satellite connectivity service.
// Results of the Space Fire Safety Theme at Kibo Published as Japan Industrial Standards
// Collaboration to Bolster Satellite Ground Station Capabilities in Southeast Asia
     
//       `;

//       competitorContent=
//       `From design to launch: AI capabilities for the future of spaceflight How AI is accelerating the pace of space engineering
//       Elevating the Space Business: EY Japans Strategic Move
//       ST Engineering and EY sign MOU in space technology and geospatial analytics for sustainability purposes
//       KPMG selects winners for nature and space start-up competitions 
//       (EY Space for Tech) From outer Space to your workspace: Unlock the power of satellite data for your business
//       McKinseys Work in the Space Sector
//       How insights from Earth observation data can optimise rail operations | EY Australia
//       BCG Announces Collaborations with NASA and USRA to Launch a Generative Artificial Intelligence Lab for Science and Engineering
//       KPMG at the 39th Space Symposium at the Broadmoor in Colorado Springs, CO, USA
//       Foreign Direct Investment in Indian Space Sector - A POV on a press release by the Indian Government, on updated FDI thresholds in the space sector.
//     THE GROWING SPACE ECONOMY REACHING FOR THE STARS
//       `;
//       othereventContent=
//       `
//       10th Asia-Pacific Space Generation Workshop (Space Generation Advisory Council)
//       SatelliteAsia
//       Asia Satellite Business Week
//       The Australian Space Summit and Exhibition
//       3rd Edition INDIA SPACE CONGRESS 2024
//       The 6th Summit for Space Sustainability
//       COSPAR 45th Scientific Assembly 2024
//       8th Bengaluru Space Expo
//       Asia-Pacific Satellite Industry Association (APSCC) 2024
//       Asia-Pacific Regional Space Agency Forum (APRSAF) 30th Meeting
//     Global Space and Technology Convention
//     Southern Space Symposium
//     Australian Space Forum

//       `;

//       search(term: string): any[] {
//         const results: { titles: string[], url: string }[] = [];

//         // Check for matches in competitorContent
// if (typeof this.othereventContent === 'string' && this.othereventContent.toLowerCase().includes(term.toLowerCase())) {
//   results.push({
//     titles: [
//       '10th Asia-Pacific Space Generation Workshop (Space Generation Advisory Council)',
//       'SatelliteAsia',
//       'Asia Satellite Business Week',
//       'The Australian Space Summit and Exhibition',
//       '3rd Edition INDIA SPACE CONGRESS 2024',
//       'The 6th Summit for Space Sustainability',
//       'COSPAR 45th Scientific Assembly 2024',
//       '8th Bengaluru Space Expo',
//       'Asia-Pacific Satellite Industry Association (APSCC) 2024 ',
//       'Asia-Pacific Regional Space Agency Forum (APRSAF) 30th Meeting',
//     'Global Space and Technology Convention', 
//     'Southern Space Symposium',
//     'Australian Space Forum',
//   ],
//     url: '/otherevent'
//   });
// }

// // Check for matches in competitorContent
// if (typeof this.competitorContent === 'string' && this.competitorContent.toLowerCase().includes(term.toLowerCase())) {
//   results.push({
//     titles: [
//       'From design to launch: AI capabilities for the future of spaceflight How AI is accelerating the pace of space engineering',
//       'Elevating the Space Business: EY Japans Strategic Move',
//       'ST Engineering and EY sign MOU in space technology and geospatial analytics for sustainability purposes',
//       'KPMG selects winners for nature and space start-up competitions ',
//       '(EY Space for Tech) From outer Space to your workspace: Unlock the power of satellite data for your business',
//       'McKinseys Work in the Space Sector',
//       'How insights from Earth observation data can optimise rail operations | EY Australia',
//       'BCG Announces Collaborations with NASA and USRA to Launch a Generative Artificial Intelligence Lab for Science and Engineering',
//       'KPMG at the 39th Space Symposium at the Broadmoor in Colorado Springs, CO, USA',
//       'Foreign Direct Investment in Indian Space Sector - A POV on a press release by the Indian Government, on updated FDI thresholds in the space sector. ',
//     'THE GROWING SPACE ECONOMY REACHING FOR THE STARS', 
//   ],
//     url: '/competitor'
//   });
// }


// // Check for matches in otherContent
// if (typeof this.otherContent === 'string' && this.otherContent.toLowerCase().includes(term.toLowerCase())) {
//   results.push({
//     titles: [
//       'SpaceXs Starlink Satellite Internet Service Is Now Open to the Public, But Its Not Cheap',
//       'Amazons Kuiper System Plans to Launch 3,236 Satellites to Provide Global Internet Coverage',
//       'How SpaceX, OneWeb and Amazon Will Make Space-Based Internet a Reality',
//       'ISS Astronauts Are Testing a New Surface Coating to Fight Space Germs',
//       'The Next Frontier: Biomedical Research in Space',
//       'Could mini space-grown organs be our cancer moonshot?',
//       'Does the future of medicine lie in space?',
//       'NASA rolls out new space sustainability strategy - SpaceNews',
//       'Varda raises $90 million to fuel space manufacturing efforts',
//       'Future quantum computers will be no match for space encryption that uses light to beam data around — with the 1st satellite launching in 2025',
//     'A Stellar Guide To Equality: Empowering Women In Space Tech Through Training, Networks And Mentorship',
//     'From Lab to Classroom: How NASA Tech Improves Learning ',
//     'Surgeons Perform Simulated Surgery in Space Using New Remote Technology',
//     'Surgery in space: Tiny remotely operated robot completes first simulated procedure at the space',
//     'Earthbound doctors successfully operate surgical robot in space',
//     'Space surgery: Doctors on ground operate robot on ISS for first time',
//     'What breakthroughs in medicine came from NASA? | HowStuffWorks',
//     'NASA’s Optical Comms Demo Transmits Data Over 140 Million Miles',
//     'Why scientists are making space data into sounds',
//     'The Philippine Space Program: A Modern Take on Establishing a National Space Program',
//     'SES has launched its O3b mPower satellite connectivity service.',
//     'Collaboration to Bolster Satellite Ground Station Capabilities in Southeast Asia',
//     'Results of the Space Fire Safety Theme at Kibo Published as Japan Industrial Standards',

//   ],
//     url: '/other'
//   });
// }

//         // Check for matches in industryandpartnershipsContent
// if (typeof this.industryandpartnershipsContent === 'string' && this.industryandpartnershipsContent.toLowerCase().includes(term.toLowerCase())) {
//   results.push({
//     titles: [
//       'NATO to Strengthen Partnership With Space Industry, Launches APSS',
//       'Astrolight Joins DIANA to Accelerate Innovation in Defense Tech',
//       'FACT SHEET: STRENGTHENING U.S. INTERNATIONAL SPACE PARTNERSHIPS',
//       'A Beacon of Hope: Artemis II will send first woman and first person of color around the moon',
//       'Uzma and Satellogic to Advance Geospatial Capabilities in Southeast Asia',
//       'Tata co launches India’s 1st privately-built sub-metre resolution satellite',
//       'India aims to achieve debris-free space missions by 2030',
//       'SpaceX secures network operating permit for Indonesia',
//       'NASA, Japan Advance Space Cooperation, Sign Agreement for Lunar Rover',
//       'Mitsubishi Corporation Joins Starlab Space as Strategic Partner, Equity Owner in Joint Venture',
//     'NZ-Australia work to advance space science',
//     'Bridging the Digital Gulf: mu Space and OneWeb Launch Satellite Internet, Revolutionizing Connectivity in Southeast Asia',
//     'Kepler, TESAT, and Airbus Join Forces to Build High-Speed Optical Communications Network in Space',
//     'China to build satellite ground stations in Antarctica',
//     'The Philippines gives green light to Starlink',
//     'Boryung, Axiom Space launch joint venture in Korea',
//     'Indonesia and India Forge New Space Collaboration through ISRO and BRIN Sign Agreement',
//     'Thailand approves 2 MoUs for exploration of Moon, outer space with China',

//   ],
//     url: '/industryandpartnerships'
//   });
// }

// // Check for matches in investmentandfundingContent
// if (typeof this.investmentandfundingContent === 'string' && this.investmentandfundingContent.toLowerCase().includes(term.toLowerCase())) {
//   results.push({
//     titles: [
//       'Qosmosys Secures Historic US$100 Million In Seed Funding, Sets New Industry Record',
//       'Telkomsat investing IDR 3.5 trillion ($218 million) for Satelit Merah Putih 2, Jasindo gives full coverage',
//       'Elon Musks SpaceX to Invest in Indonesia s New Capital City for Starlink Internet Network',
//       'Kominfo unveils plans for the Satria-2 Satellite funded through foreign investment',
//       'India Boosts Space Sector Investment with Expanded Foreign Funding Limits',
//       'Spacetech Startup Manastu Raises Funding To Reduce Debris Pollution In Space',
//       'India eases approval process for foreign direct investment in space sector',
//       'India enters era of research, private investment to boost space tech innovation',
//       'Japan to create ¥1 trillion fund to develop outer space industry',
//       'SKY Perfect JSAT Announces 10 Billion Yen Investment to Accelerate Collaborations with Space-related Startups',
//     'Seoul to double budget by 2027 to join global space race ',
//     'Funding for three Australia-UK projects',
//     'SmartSat backs autonomous satellite technologies for Australian in-orbit servicing capabilities in $2.3 million research effort',
//     '$15.7m for space initiatives: Speedy delivery crucial, sector leaders say',
//     'US wants NZ to stump up cash for $1.6b military satellite project',
//     'New Zealand Govt. drives investment in the global space sector',
//     'Tsai announces NT$40bn boost for space program',
//     'Abu Dhabi sovereign fund to invest in space tech, AI this year',

//   ],
//     url: '/investmentandfunding'
//   });
// }




//          // Check for matches in policyandregulationContent
//          if (typeof this.policyandregulationContent === 'string' && this.policyandregulationContent.toLowerCase().includes(term.toLowerCase())) {
//           results.push({
//             titles: [
//               'Why Russia won’t have its anti-satellite weapon in space anytime soon',
//               'Senate bills seek to reform commercial space regulations',
//               'Senate passes the Orbital Sustainability Act of 2023 or the Orbits Act of 2023',
//               'US and Japan to sponsor a U.N. Security Resolution to ban deployment of nuclear weapons in space',
//               'Uruguay is the most recent country which signed the Artemis Accords',
//               'White House directs NASA to develop lunar time standard',
//               'China, Thailand sign pacts on outer space, lunar outposts',
//               'SpaceX applies for Indonesia internet service provider permit, government says',
//               'A general introduction to Space Law in Thailand',
//               'SpaceX launches South Koreas second spy satellite amid race with North',
//             'Official visit of Luxembourg Space Agency to SG strengthens bilateral ties',
//             'Mitsui Sumitomo announces plans to develop space tourism insurance',
//             'Japanese astronaut to be the first non-American on the Moon',
//             'India announced the first 4 astronauts selected for Gaganyaan Mission',
//             'Nicaragua joined Chinas ILRS moon base program',
//             'Russia vetoes UN Security Council Resolution proposed by US and Japan',
//           ],
//             url: '/policyandregulation'
//           });
//         }

      
//         // Check for matches in startupComponentContent
//         if (typeof this.startupComponentContent === 'string' && this.startupComponentContent.toLowerCase().includes(term.toLowerCase())) {
//           results.push({
//             titles: [
//               'Rocket Lab Launches StriX-3 Satellite for Synspective',
//               'SpeQtral and Arquimea Announce Strategic MOU to Advance Quantum Secure Solutions and Satellite Technologies',
//             '5 spacetech startups taking off in Southeast Asia',
//             'Taiwan launches its first international SpaceTech startup collaboration project',
//             'AgniKul set to launch 3D printed sub-orbital rocket later this month',
//             'Cow-Dung Powers Japans New Rocket Engine Prototype, Advances in Sustainable Space Tech',
//             'Hong Kong marine technology space start-up Clearbot’s new generation of autonomous boats will tackle Indian water pollution',
//           'Spacetech firm Aliena to spend half of $5.6m raise to ramp up engine production',
//          'ispace Signs MoU with mu Space for Future Lunar Missions',
//         'Peak XV-Backed Digantara Inaugurates 25,000-sq ft Satellite Assembly Facility In Bengaluru',
//         'Singapores ESS and Australias ELA Join Forces to Redefine Space Exploration',
//         'mu Space + RBC Signals sign MoU for satellite ground station facilities project',
//         ],
//             url: '/startup'
//           });
//         }
      
       
//         // Check for matches in autoComponentContent
//         if (typeof this.autoComponentContent === 'string' && this.autoComponentContent.toLowerCase().includes(term.toLowerCase())) {
//           results.push({
//             titles: [
//               'Qualcomm Announces Support for India’s NavIC Satellite Navigation System',
//               'Plants in Space to address sustainability challenges',
//               'Space Spotlight: Moving spacecraft with mothball power',
//               'Homegrown AgTech using space to benefit farmers',
//               'Rocket Lab Electron rocket lifts off with space debris removal mission',
//               'Axelspace s Demonstration Satellite PYXIS Scheduled for Launch',
//               'Filipino Space Experiments Performed by JAXA Astronaut on the ISS',
//               'IHI AEROSPACEs Hydrogen Fuel Cell Electric Propulsion System Technology Development',
//               'Cow-Dung Powers Japans New Rocket Engine Prototype, Advances in Sustainable Space Tech',
//               'Nuclear fusion reactor in South Korea runs at 100 million degrees C for a record-breaking 48 seconds',
//             'Singapores ESS and Australias ELA Join Forces to Redefine Space Exploration',
//             'Skyroot Aerospace Leads Indias Space Sector Surge with Historic Private Rocket Launch',
//           ],
//             url: '/auto'
//           });
//         }
      
//         // Flatten the results array and sort based on whether the search term appears in titles
//         const flatResults: string[] = results.reduce<string[]>((acc, curr) => acc.concat(curr.titles), []);
//         const sortedResults: string[] = flatResults.sort((a: string, b: string) => {
//           const aMatch: boolean = a.toLowerCase().includes(term.toLowerCase());
//           const bMatch: boolean = b.toLowerCase().includes(term.toLowerCase());
//           if (aMatch && bMatch) return 0;
//           if (aMatch) return -1;
//           if (bMatch) return 1;
//           return 0;
//         });
      
//         // Group sorted results back into objects with titles and URLs
//         const groupedResults: any[] = [];
//         let currentIndex: number = 0;
//         for (const result of results) {
//           const titles: string[] = [];
//           for (let i = 0; i < result.titles.length; i++) {
//             titles.push(sortedResults[currentIndex]);
//             currentIndex++;
//           }
//           groupedResults.push({
//             titles,
//             url: result.url
//           });
//         }
      
//         return groupedResults;
//       }
      

      

//       navigateTo(result: any) {
//         this.router.navigate([result.url]);
//       }
      
      }

