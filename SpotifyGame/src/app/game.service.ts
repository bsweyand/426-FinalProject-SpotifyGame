import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private username: string = "";
  private state: string = "login";
  private artistName: string = "Bailey Van Wormer";

  constructor() { }

  public generateSong() {
    // logic to call previews api and generate song goes here
  }

  public getUsername() {
    return this.username;
  }

  public getState() {
    return this.state;
  }

  public getArtistName() {
    return this.artistName;
  }

  public setUsername(username: string) {
    this.username = username;
  }

  public setState(state: string) {
    this.state = state;
  }

  public setArtistName(artistName: string) {
    this.artistName = artistName;
  }
}
