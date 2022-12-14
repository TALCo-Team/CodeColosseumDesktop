import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { MatchInfo } from 'src/app/services/api-service/api.service';
import { ConnectionManagerService } from 'src/app/services/connection-manager.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {


  gamelist:MatchInfo[]=[];
  hasGames:boolean = true;
  loading:boolean = true;

  refreshSub:Subscription=new Subscription();

  

  stateOptions: any[]= [{icon: 'pi pi-bars', value: 'table'}, {icon: 'pi pi-th-large', value: 'card'}];
  view_mode: string = "card";

  // Questi serve per mostrare il tempo nella view, perché apparentemente
  // non posso usare Math nella valutazione di Typescript nell' html
  truncateDecimals = function (number:number) {
    return Math[number < 0 ? 'ceil' : 'floor'](number);
  };
  

  constructor(private uploadService:UploadService, private connectionManager:ConnectionManagerService) {
    //TODO: turning off to test, turn back on+
    //this.refreshSub = interval(1000).subscribe(func => {this.onClickRefresh();})
  }

  ngOnInit(): void {


    console.log("[Homeview] Resetting gameplay...")
    this.uploadService.reset()

    let onSuccess = (gameList:MatchInfo[])=>{ 
      this.loading=true;
      this.gamelist = gameList;
      this.loading=false;
      this.hasGames = this.gamelist.length !== 0;
      for(let i=0;i<this.gamelist.length;i++){
        this.gamelist[i].time=(this.gamelist[i].time-Date.now()/1000);
      }
    }

    this.connectionManager.lobbyList1(onSuccess)

    

  }




/* 
  async lobbyList() {
   
    //Starting the refresh
    this.loading=true;

    //Get lobbyList AND AWAIT FOR THE RESPONSE THIS TOOK ME AGES
    await this.connectionManager.lobbyList();

    // If response is undefined, no games. 
    // !! Assumes that landing in this page means a connection has already
    // !! been established
    this.gamelist = this.connectionManager.lobbylistvar ?? [];
    this.hasGames = this.gamelist.length !== 0;

    // Use remaining time instead of "expiration" time.
    // If this causes problems, can be moved onto HTML template.
    for(let i=0;i<this.gamelist.length;i++){
      this.gamelist[i].time=(this.gamelist[i].time-Date.now()/1000);
    }

    this.loading=false;
  }
*/
  // Clicking on refresh button will refresh results. Would be
  // optimal to have this as "autorefresh every X seconds" instead.
  onClickRefresh(){

    let onSuccess = (gameList:MatchInfo[])=>{ 
      this.loading=true;
      this.gamelist = gameList;
      this.hasGames = this.gamelist.length !== 0;
      for(let i=0;i<this.gamelist.length;i++){
        this.gamelist[i].time=(this.gamelist[i].time-Date.now()/1000);
      }
      this.loading=false;
    }
    this.connectionManager.lobbyList1(onSuccess)

  }
}
