//a data structure includes the data of 5 characters as in HTML 5 characters in a row
export class TableRow{
	//jpPro == pronunciation, cn == chinese origin
	id:number;	link:string; jpPro:string;	jp:string;	cn:string;
	id1:number;	link1:string; jpPro1:string;	jp1:string;	cn1:string;
	id2:number;	link2:string; jpPro2:string;	jp2:string;	cn2:string;
	id3:number;	link3:string; jpPro3:string;	jp3:string;	cn3:string;
	id4:number;	link4:string; jpPro4:string;	jp4:string;	cn4:string;

	constructor(
		id:number,link:string,jpPro:string,jp:string,cn:string,
		id1:number,link1:string,jpPro1:string,jp1:string,cn1:string,
		id2:number,link2:string,jpPro2:string,jp2:string,cn2:string,
		id3:number,link3:string,jpPro3:string,jp3:string,cn3:string,
		id4:number,link4:string,jpPro4:string,jp4:string,cn4:string,){
		this.id = id;
		this.link = link;
		this.jpPro = jpPro;
		this.jp = jp;
		this.cn = cn;
		this.id1 = id1;
		this.link1 = link1;
		this.jpPro1 = jpPro1;
		this.jp1 = jp1;
		this.cn1 = cn1;
		this.id2 = id2;
		this.link2 = link2;
		this.jpPro2 = jpPro2;
		this.jp2 = jp2;
		this.cn2 = cn2;
		this.id3 = id3;
		this.link3 = link3;
		this.jpPro3 = jpPro3;
		this.jp3 = jp3;
		this.cn3 = cn3;
		this.id4 = id4;
		this.link4 = link4;
		this.jpPro4 = jpPro4;
		this.jp4 = jp4;
		this.cn4 = cn4;


	}

}