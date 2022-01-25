import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CinemaService} from "../service/cinema.service";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  public villes: any;
  public cinemas: any;
  public salles: any;
  public currentVille: any;
  public currentCinemas: any;

  constructor(private cinemaService: CinemaService) {
  }

  ngOnInit(): void {
    this.cinemaService.getVilles()
      .subscribe(data => {
          this.villes = data
        }, error => {
          console.log(error)
        }
      )
  }

  onGetCinemas(v: any) {
    this.currentVille = v;
    this.cinemaService.getCinemas(v)
      .subscribe(data => {
        this.cinemas = data
      }, error => {
        console.log(error)
      })
  }

  onGetSalle(s: any) {
    this.currentCinemas = s;
    this.cinemaService.getSalle(s)
      .subscribe(data => {
        this.salles = data
      }, error => {
        console.log(error)
      })
  }
}
