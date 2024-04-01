import { Component, Input, SimpleChanges } from '@angular/core';
import { User } from '../Interfaces/user';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LocationStrategy } from '@angular/common';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {
  //@Input() foundUser:User ={} as User;

  foundUser: User = {} as User;
  private subscription: Subscription;

  constructor(private router: Router,private route: ActivatedRoute,private location: LocationStrategy) {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadData();
    });
  }
  ngOnInit() {
    // const navigation = this.router.getCurrentNavigation();
    // this.foundUser = navigation?.extras?.state?.['user'];
    const state=this.location.getState() as any;
    this.foundUser=state.user;
    
  }

  loadData() {
    const state=this.location.getState() as any;
    this.foundUser=state.user;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
