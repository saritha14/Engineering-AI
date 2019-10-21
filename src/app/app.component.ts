import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ServiceService } from './service.service';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  set;
  data;
  th;
   subscrition:Subscription;
   statusText:string;
  url: any;
  id: any;
  created_at: any;
  author: any;
 
  keyValue: any;

  s: any;
  userFilter:any={title:''};
  constructor(private ht:HttpClient,private a:ServiceService){

  }
  ngOnInit(){
  this.subscrition=timer(0,10000).pipe(
    switchMap(()=> this.a.getInfo())
    ).subscribe(resp=>{console.log(resp)
    this.set=resp
    this.data=this.set.hits});
   ;
  }
  // button(id){
  //   console.log(id)
  //  this.th=id;
  // }
f;
  fun(d){
    // this.th = d;
    // this.url=d.url,
    // this.title=d.title,
    // this.author=d.author,
    // this.created_at=d.created_at,
    console.log(d);
    this.f=d;
    this.a.postInfo(d).subscribe(
      resp=>console.log(resp)
    );
  }
 
public selectedName:any;
public highlightRow(d){
  this.selectedName=d.title;
}
}
