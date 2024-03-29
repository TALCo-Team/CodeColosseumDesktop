import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LobbyEventType } from 'src/app/services/api-service/api.service';
import { MatchInfo } from 'src/app/services/api-service/api.service';
import { ChatMessage } from 'src/app/ChatMessage';
import { ConnectionManagerService } from '../../../services/connection-manager.service';
import { ApiService } from '../../../services/api-service/api.service';
@Component({
  selector: 'app-spectate-view',
  templateUrl: './spectate-view.component.html',
  styleUrls: ['./spectate-view.component.scss']
})
export class SpectateViewComponent implements OnInit {

  gameId:string="";
  lastMatchState!:MatchInfo;
  newMsg:string="";
  messages:ChatMessage[]=[];

  apiService:ApiService;

  constructor(private activatedRoute:ActivatedRoute,
    connectionService:ConnectionManagerService) { 
      this.apiService = connectionService.api!;
    }

  ngOnInit(): void {
    this.gameId = this.activatedRoute.snapshot.params['id'];


    let onMatchUpdate = (matchInfo:MatchInfo)=>{
      console.log("onMatchUpdate (join) was executed")

      if (!this.lastMatchState){
        this.newMsg="Connection established."
        this.messages.push({sender:"server",content:this.newMsg})
        if(matchInfo.connected.length>0){
          this.newMsg="Already connected players: "
          for(let i=0; i < matchInfo.connected.length; i++){
            this.newMsg += matchInfo.connected[i] + ", "
          }
          this.newMsg = this.newMsg.substring(0,this.newMsg.length-2)
          this.messages.push({sender:"server",content:this.newMsg})
        }
      }
      else{ 

        // Check if game started running
        if (!this.lastMatchState.running && matchInfo.running){
          this.messages.push({sender:"server",content:"Game is starting!"})
          this.messages.push({sender:"divider",content:"Game started!"})
        }

        // this finds the name of the new player that has joined.
        let newPlayer="";
        let pastConnected=this.lastMatchState.connected;
        let newConnected=matchInfo.connected=matchInfo.connected
        if(pastConnected.length < newConnected.length){
          newPlayer=newConnected.filter((item)=>pastConnected.indexOf(item))[0]
          this.newMsg=newPlayer+" has joined the match!";
          this.messages.push({sender:"server",content:this.newMsg})
        }
        else if (pastConnected.length > newConnected.length){
          newPlayer=pastConnected.filter((item)=>newConnected.indexOf(item))[0]
          this.newMsg=newPlayer+" has left the match!";
          this.messages.push({sender:"server",content:this.newMsg})
        }
      }
      this.lastMatchState=matchInfo;
    }
  

    let onData = (data:string)=>{
      this.messages.push({sender:"server", content:data.replaceAll("\n", "<br>")});
    }

    let onEvent = (type:LobbyEventType)=>{
      if(type == LobbyEventType.End){
        this.messages.push({sender:"server", content:"Game ended!"})
      }
    }

    // gestire se l'id è canato
    this.apiService.connectToSpectate(
      this.gameId,
      onEvent,
      onMatchUpdate,
      onData
    )
  }
}
