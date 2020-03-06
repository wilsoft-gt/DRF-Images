import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-photoup',
  templateUrl: './photoup.component.html',
  styleUrls: ['./photoup.component.scss']
})
export class PhotoupComponent implements OnInit {
  public dropedList: any = []
  public droped;

  constructor() { }

  ngOnInit() {
  }

  onDragOver(event) {
    event.preventDefault()
    let hoverArea = document.getElementById("dropArea");
    hoverArea.style.backgroundColor = "#bebebe"
  }

  onDragLeage() {
    event.preventDefault()
    let hoverArea = document.getElementById("dropArea");
    hoverArea.style.backgroundColor = "#f0f0f0"
  }


  drop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.onDragLeage()
    this.droped = event.dataTransfer.files;
    for (let file of this.droped) {
      this.dropedList.push(file)
    }
  }

  fileBrowserHandler(file){
    this.dropedList.push(file)
  }

  onDropSuccess(event) {
    event.preventDefault()
    /* this.generateImages(event) */
  }
  
  delete(idx) {
    this.dropedList.splice(idx, 1)
  }

  inputFileClicked() {
    let inputFile = document.getElementById("inputFile") as HTMLElement;
    inputFile.click()
  }

}
