import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photoup',
  templateUrl: './photoup.component.html',
  styleUrls: ['./photoup.component.scss']
})
export class PhotoupComponent implements OnInit {

  public droped;

  constructor() { }

  ngOnInit() {
  }

  onDragOver(event) {
    event.preventDefault()
    console.log("File is over the div")
  }

  onDropSuccess(event) {
    event.preventDefault()
    this.droped = event.dataTransfer.files[0].getAsFile();
    console.log("file has been dropt")
    console.log(this.droped)
  }

}
