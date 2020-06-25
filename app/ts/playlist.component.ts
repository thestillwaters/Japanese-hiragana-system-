import {Component} from 'angular2/core';
import {TableRows} from './video';

@Component({
    selector: 'playlist',
    //{{variable}}
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['tableRows']
})

export class Playlist{
	onSelect(vid:TableRows){
		console.log(JSON.stringify(vid));
	}
	//pass link a parameter and play sound after click
	playAudio(link:string){
      let audio = new Audio();
      audio.src = link;
      audio.load();
      audio.play();
      //vid.playAudio();
    }

}