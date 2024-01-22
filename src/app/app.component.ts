import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngAreas';
  apiUrl = "https://localhost:7269/";
  cats:any[] = [];

  constructor(public http: HttpClient) { }

  async ngOnInit(){
    this.cats = await lastValueFrom(this.http.get<any>(this.apiUrl+'api/Cats'));
    console.log(this.cats);
  }
}
