import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'test-view',
  templateUrl: './api-view.component.html',
  styleUrls: ['./api-view.component.scss']
})
export class ApiViewComponent implements OnInit {

  ngOnInit(): void {
    alert("API is available");
    let api = new ApiService();
    let type = "spectate";

    api.gameList((gameList: any) => {
      console.log(gameList);
    });

    if (type === "play") {
      api.createNewGame((gameNew: any) => {
        console.log('New game created: ' + gameNew);
        api.connectToPlay(
          (lobbyData: any) => console.log(lobbyData),
          (lobbyUpdated: any) => console.log(lobbyUpdated),
          (matchStarted: any) => console.log(matchStarted),
          (binaryInfo: any) => console.log(binaryInfo),
          (matchEnded: any) => console.log(matchEnded),
          gameNew, "Lollo123", undefined,
          (error: any) => alert(error));
      }, "Lobby", "roshambo", 2, 1, undefined, undefined, undefined, undefined, (error: any) => {
        alert("error 3");
      });

      (new Promise(resolve => setTimeout(resolve, 5000))).then(() => api.play("ROCK\n"));
      (new Promise(resolve => setTimeout(resolve, 6000))).then(() => api.play("ROCK\n"));
      (new Promise(resolve => setTimeout(resolve, 7000))).then(() => api.play("ROCK\n"));
      (new Promise(resolve => setTimeout(resolve, 8000))).then(() => api.play("ROCK\n"));
      (new Promise(resolve => setTimeout(resolve, 9000))).then(() => api.play("ROCK\n"));
      (new Promise(resolve => setTimeout(resolve, 10000))).then(() => api.play("ROCK\n"));
      (new Promise(resolve => setTimeout(resolve, 11000))).then(() => api.play("ROCK\n"));
      (new Promise(resolve => setTimeout(resolve, 12000))).then(() => api.play("ROCK\n"));
      (new Promise(resolve => setTimeout(resolve, 13000))).then(() => api.play("ROCK\n"));
      (new Promise(resolve => setTimeout(resolve, 14000))).then(() => api.play("ROCK\n"));

    } else {
      api.connectToSpectate(
        (spectateJoined: any) => console.log(spectateJoined),
        (spectateStarted: any) => console.log(spectateStarted),
        (spectatSynced: any) => console.log(spectatSynced),
        (lobbyUpdated: any) => console.log(lobbyUpdated),
        (binaryMessage: any) => console.log(binaryMessage),
        (spectateEnded: any) => console.log(spectateEnded),
        "3m41h0rn9meb4"
      );
    }

  }

}
