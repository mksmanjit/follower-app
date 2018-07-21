import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
export class GithubFollowersComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ]).pipe(switchMap(combined => {
            let id = combined[0].get('id');
            let page = combined[1].get('page');
            return this.service.getFollowers();
        }))
            .subscribe(followers => this.followers = followers);
    }
}
GithubFollowersComponent.decorators = [
    { type: Component, args: [{
                selector: 'github-followers',
                templateUrl: './github-followers.component.html',
                styleUrls: ['./github-followers.component.css']
            },] },
];
/** @nocollapse */
GithubFollowersComponent.ctorParameters = () => [
    { type: ActivatedRoute, },
    { type: GithubFollowersService, },
];
//# sourceMappingURL=github-followers.component.js.map