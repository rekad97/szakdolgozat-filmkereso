import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'app/shared/movie/movies.service';
import { Observable, Subject } from 'rxjs';
import { first, takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-qr-code-modal',
  templateUrl: './qr-code-modal.component.html',
  styleUrls: ['./qr-code-modal.component.css']
})
export class QrCodeModalComponent implements OnInit {

  public qrCodeString: string = null;
  result;
  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
this.getData();
  }

  async getData(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      this.moviesService.getAll().subscribe(res =>
        {
          this.result = res;
          console.log("result", this.result);
          const index = (Math.floor((Math.random() * this.result.length) + 1));
          this.qrCodeString = this.result[index].Title;
        }, error => {
          console.log(error);
        }
      );
     });
  }
}
