import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientGestionStockProduits';
  OpenClose: boolean=true;

  CloseOpen() {
    this.OpenClose=!this.OpenClose ;

  }

  onShowSideBarChange(OpenClose) {
    this.OpenClose=OpenClose;

  }
}
