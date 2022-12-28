import { Component } from '@angular/core';
import { Cell } from 'src/model/model';
import { HttpService } from 'src/service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'convay-game-of-life-ng';

  listCells: Array<Cell> = [];
  // listCellsSetNewPattern: Array<Cell>  = [];
  numberOfCols: number = 10;

  sizesOfBoard:Array<number> = [10,20,30,40,50,60,70];



  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getListCells();
    // console.log(this.listCells);

  }


  private getListCells() {
    this.httpService.getListCells().subscribe(cells => {
      this.listCells = cells;
      this.numberOfCols = Math.sqrt(this.listCells.length);
      console.log(this.listCells);
    })

  }

  public setLive(event: any) {
    // console.log(event.srcElement.id);
    let idCell = event.srcElement.id;

    this.listCells.forEach(cell => {
      if (cell.id == idCell){
        cell.live = !cell.live;
      }
    })
  }

  public updateListOfCellsOnSrv(){
    this.httpService.updateListCells(this.listCells).subscribe(cells =>{
      this.listCells = cells;
      this.numberOfCols = Math.sqrt(this.listCells.length);
      console.log(this.listCells);
    })
  }

  public nextGameTurn(){
    this.httpService.nextGameTurn().subscribe(cells => {
      this.listCells = cells;
      this.numberOfCols = Math.sqrt(this.listCells.length);
      console.log(this.listCells);
    })
  }

  public changeBoard(event: any){
    console.log(event.srcElement.value);
    this.httpService.changSizeBoard(event.srcElement.value).subscribe(cells =>{
      this.listCells = cells;
      this.numberOfCols = Math.sqrt(this.listCells.length);
      console.log(this.listCells);
    });

  }


}
