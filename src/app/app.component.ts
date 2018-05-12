import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h3{
    color: dodgerBlue;
  }`],
})
export class AppComponent {
  public x = 'hello ';

  public hello = (name: string ) => {
    return this.x + name;
  }
}
