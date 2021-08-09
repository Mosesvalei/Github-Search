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


