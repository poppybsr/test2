import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { analytics } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';
  // sensors: Observable<any[]>;
  public sensors: Observable<any[]>;

  constructor( private db : AngularFireDatabase){
    this.sensors = this.db.list('sensor').valueChanges();
  }
  
  

}
