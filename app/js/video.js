System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TableRow;
    return {
        setters:[],
        execute: function() {
            //a data structure includes the data of 5 characters as in HTML 5 characters in a row
            TableRow = (function () {
                function TableRow(id, link, jpPro, jp, cn, id1, link1, jpPro1, jp1, cn1, id2, link2, jpPro2, jp2, cn2, id3, link3, jpPro3, jp3, cn3, id4, link4, jpPro4, jp4, cn4) {
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
                TableRow.prototype.playAudio = function () {
                    var audio = new Audio();
                    audio.src = this.link;
                    audio.load();
                    audio.play();
                    this.playAudio();
                };
                return TableRow;
            }());
            exports_1("TableRow", TableRow);
        }
    }
});
//# sourceMappingURL=video.js.map