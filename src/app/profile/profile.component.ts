import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = { 
    login: '',
    company: '',
    location: '',
    avatar_url: '',
    public_repos: '',
    public_gist: '',
    followers: '',
    following: '',
    email: '',
    bio: '',
    created_at: ''
  };
    repos: any[] =[];
    username!: string;
  
  
  constructor(private ProfileService: ProfileService) {
    this.ProfileService.getProfileInfo().subscribe((profile:any) => {
      console.log(profile);
      this.profile = profile;
    });
    this.ProfileService.getProfileRepos().subscribe((repos:any) => {
      console.log(repos);
      this.repos = repos;
    });
  
  
  }
  

