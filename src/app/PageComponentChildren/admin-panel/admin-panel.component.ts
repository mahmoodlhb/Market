import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, interval, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  customObservable!: Observable<any>;
  customArray:Array<number>=[];
  loading=new BehaviorSubject("false");

  constructor() {
    this.loading.next("loading...");
  }

  ngOnInit(): void {
    this.loading.subscribe((data)=>{
      console.log(data)
    })
    const timer = interval(1000).subscribe((counter)=>{
      console.log(counter)
    })
    setTimeout(()=> this.dismissTimer(timer),3000);
    this.createCustomObservable();
    this.customObservable.subscribe((value)=>{
      console.log(value);
    });
  }


  public dismissTimer(timer:Subscription){
    timer.unsubscribe();
  }
  public createCustomObservable() {
    this.customObservable=new Observable<any>((subscriber)=>{
      setTimeout(()=>{
        subscriber.complete()
        console.log('its completed')
        this.loading.next("");
        console.log(this.loading.value);
      },2000)
    })

  }
}

