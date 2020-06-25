System.register(['angular2/core', './config.service', './video', './playlist.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_service_1, video_1, playlist_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            },
            function (video_1_1) {
                video_1 = video_1_1;
            },
            function (playlist_component_1_1) {
                playlist_component_1 = playlist_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    //mainHeading is a variable
                    //mainHeading = "My videos";
                    this.mainHeading = config_service_1.Config.MAIN_HEADING;
                    this.tableRow = [
                        new video_1.TableRow(
                        //read local mp3 is faster than URL
                        1, "./app/audio/01.mp3", "a", "あ", "安", 2, "./app/audio/02.mp3", "i", "い", "以", 3, "./app/audio/03.mp3", "u", "う", "宇", 4, "./app/audio/04.mp3", "e", "え", "衣", 5, "./app/audio/05.mp3", "o", "お", "於"),
                        new video_1.TableRow(6, "./app/audio/06.mp3", "ka", "か", "加", 7, "./app/audio/07.mp3", "ki", "き", "幾", 8, "./app/audio/08.mp3", "ku", "く", "久", 9, "./app/audio/09.mp3", "ke", "け", "‎計", 10, "./app/audio/10.mp3", "ko", "こ", "己"),
                        new video_1.TableRow(11, "./app/audio/11.mp3", "sa", "さ", "左", 12, "./app/audio/12.mp3", "shi", "し", "之", 13, "./app/audio/13.mp3", "su", "す", "寸", 14, "./app/audio/14.mp3", "se", "せ", "世", 15, "./app/audio/15.mp3", "so", "そ", "曽"),
                        new video_1.TableRow(16, "./app/audio/16.mp3", "ta", "た", "太", 17, "./app/audio/17.mp3", "chi", "ち", "知", 18, "./app/audio/18.mp3", "tsu", "つ", "川", 19, "./app/audio/19.mp3", "te", "て", "天", 20, "./app/audio/20.mp3", "to", "と", "止"),
                        new video_1.TableRow(21, "./app/audio/21.mp3", "na", "な", "奈", 22, "./app/audio/22.mp3", "ni", "に", "仁", 23, "./app/audio/23.mp3", "nu", "ぬ", "奴", 24, "./app/audio/24.mp3", "ne", "ね", "祢", 25, "./app/audio/25.mp3", "no", "の", "乃"),
                        new video_1.TableRow(26, "./app/audio/26.mp3", "ha", "は", "波", 27, "./app/audio/27.mp3", "hi", "ひ", "比", 28, "./app/audio/28.mp3", "hu", "ふ", "不", 29, "./app/audio/29.mp3", "he", "へ", "部", 30, "./app/audio/30.mp3", "ho", "ほ", "保"),
                        new video_1.TableRow(31, "./app/audio/31.mp3", "ma", "ま", "末", 32, "./app/audio/32.mp3", "mi", "み", "美", 33, "./app/audio/33.mp3", "mu", "む", "武", 34, "./app/audio/34.mp3", "me", "め", "女", 35, "./app/audio/35.mp3", "mo", "も", "毛"),
                        new video_1.TableRow(36, "./app/audio/36.mp3", "ya", "や", "也", 37, "", " ", " ", " ", 38, "./app/audio/37.mp3", "yu", "ゆ", "由", 39, "", " ", " ", " ", 40, "./app/audio/38.mp3", "yo", "よ", "与"),
                        new video_1.TableRow(41, "./app/audio/41.mp3", "ra", "ら", "良", 42, "./app/audio/42.mp3", "ri", "り", "利", 43, "./app/audio/43.mp3", "ru", "る", "留", 44, "./app/audio/44.mp3", "re", "れ", "礼", 45, "./app/audio/45.mp3", "ro", "ろ", "呂"),
                        new video_1.TableRow(46, "./app/audio/46.mp3", "wa", "わ", "和", 47, "", " ", " ", " ", 48, "", " ", " ", " ", 49, " ", " ", " ", " ", 50, "./app/audio/47.mp3", "wo", "を", "逺"),
                        new video_1.TableRow(51, "", " ", " ", "", 52, "", " ", " ", "", 53, "", " ", " ", "", 54, "", " ", " ", "", 55, "./app/audio/48.mp3", "n", "ん", "无")
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //{{variable}}
                        //not good way of seperate TYPESCRIPT and HTML
                        //template: '<h1>{{mainHeading}}</h1>'
                        templateUrl: 'app/ts/app.component.html',
                        //for <Playlist>
                        directives: [playlist_component_1.Playlist]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map