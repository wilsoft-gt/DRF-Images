import { Component, OnInit } from '@angular/core';

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
    console.log("File is over the div")
  }

  drop(event) {
    event.preventDefault()
    var fileInput = document.querySelector("inputFile") 
    this.droped = event.dataTransfer.files;
    for (let file of this.droped) {
      this.dropedList.push(file)
      fileInput.files
    }
  }

  onDropSuccess(event) {
    event.preventDefault()
    /* this.generateImages(event) */
  }
  
/*   generateImages(ev) {
    var imagediv = document.getElementById("images")
    imagediv.innerHTML = null
    for (let images of this.dropedList) {
      var img = document.createElement('img');
      img.classList.add("img-droped");
      var reader = new FileReader();
      reader.onload = (ev) => {
        img.src = reader.result as string;
        imagediv.appendChild(img);
      }
      reader.readAsDataURL(images)
    }
    
  } */

  delete(idx) {
    this.dropedList.splice(idx, 1)
  }

}
