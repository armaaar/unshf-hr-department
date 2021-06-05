import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-profile-page',
  templateUrl: './hero-profile-page.component.html',
  styleUrls: ['./hero-profile-page.component.css']
})
export class HeroProfilePageComponent implements OnInit {
  // TODO: Create Hero interface
  hero: Object|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // get route param
    const routeParams = this.route.snapshot.paramMap;
    const heroId = Number(routeParams.get('heroId'));

    // Display not found if heroId is NaN
    if (isNaN(heroId)) {
      this.router.navigate(['404']);
      return;
    }

    // TODO: fetch hero, redirect to 404 if doesn't exist

  }

}
