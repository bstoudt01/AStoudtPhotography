import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about = {
    title: "SUCCESS",
    description: "Hi, I'm Allie",
    detail: "I am Based on Leavenworth, WA where we have access to all the beauties the North Cascades has to offer. I love to bring the fun and capture everyones personalities.",
    IconBlocks : [
      {
      id:1, 
      icon: "",
      title: "Experience", 
      description: ""
      }
      ,{
        id:2, 
        icon: "",
        title: "", 
        description: ""
      }
      ,{
        id:3, 
        icon: "",
        title: "", 
        description: ""
      },
      {
        id:4, 
        icon: "",
        title: "", 
        description: ""
      }
    ]
  }
}
