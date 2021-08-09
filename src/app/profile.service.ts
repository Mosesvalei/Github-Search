import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = 'f8b2761f67f82e2acbce';
  private clientsecret = '8150f0085b5c4006a53bb8d1e42e889930cb60b2';


  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username ='Mosesvalei';
  }

  getProfileInfo() {
    interface ApiResponse {
      login: string;
    }
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
     .pipe(map(res => res));
  }

  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .pipe(map(res => res));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
