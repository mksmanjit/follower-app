import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
export class GithubFollowersService {
    constructor(http) {
        this.http = http;
        this._url = 'https://api.github.com/users/mosh-hamedani/followers';
    }
    getFollowers() {
        return this.http.get(this._url).pipe(map(response => response.json()));
    }
}
GithubFollowersService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GithubFollowersService.ctorParameters = () => [
    { type: Http, },
];
//# sourceMappingURL=github-followers.service.js.map