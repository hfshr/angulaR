// @ts-nocheck
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shiny + angular!';
  buttonValue = 0
  shinyValue = 0

  myClick() {
    this.buttonValue++
    Shiny.setInputValue("btn", this.buttonValue)
    
  }

  ngOnInit() {
    Shiny.addCustomMessageHandler("randomNumber", (message) => {
      console.log(message)
      $("#shiny-text").text(message)
      //this.shinyValue++
      //this.shinyValue = message

    })
  }
  
}
