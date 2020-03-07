import { Component, OnInit } from '@angular/core';
import { PhotoupService } from '../photoup.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-photoup',
  templateUrl: './photoup.component.html',
  styleUrls: ['./photoup.component.scss']
})
export class PhotoupComponent implements OnInit {
  public dropedList: Array<File> = []
  public droped;
  public images: Array<any> = []

  constructor(
    private photoService: PhotoupService,
  ) { }

  ngOnInit() {
    this.getFiles()

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
    this.droped = <File>event.dataTransfer.files;
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

  async getFiles(): Promise<void> {
    try{
      const response = await this.photoService.getImages().toPromise();
      this.images = response;
    }
    catch(e) {

    }
  }

  async pushImages(): Promise<void> {
    const formData = new FormData();
    for (let image of this.dropedList){
      formData.append("photo", image, image.name)
      this.photoService.submit(formData).subscribe( () => {
        this.getFiles()
      })
    }
    this.dropedList = []
  }

  async deleteImage(id): Promise<void> {
    this.photoService.deleteImage(id).subscribe( e => {
      this.getFiles()
    })
  }

}
