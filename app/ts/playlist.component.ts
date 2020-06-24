import {Component} from 'angular2/core';
import {Video} from './video';

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
}