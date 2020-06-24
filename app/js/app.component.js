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
                        new video_1.TableRow(1, "http://www.dartmouth.edu/~introjpn/text/hiragana/01.mp3", "a", "あ", "安", 2, "http://www.dartmouth.edu/~introjpn/text/hiragana/02.mp3", "i", "い", "以", 3, "http://www.dartmouth.edu/~introjpn/text/hiragana/03.mp3", "u", "う", "宇", 4, "http://www.dartmouth.edu/~introjpn/text/hiragana/04.mp3", "e", "え", "衣", 5, "http://www.dartmouth.edu/~introjpn/text/hiragana/05.mp3", "o", "お", "於"),
                        new video_1.TableRow(6, "", "ka", "か", "加", 7, "", "ki", "き", "幾", 8, "", "ku", "く", "久", 9, "", "ke", "け", "‎計", 10, "", "ko", "こ", "己"),
                        new video_1.TableRow(11, "", "sa", "さ", "左", 12, "", "shi", "し", "之", 13, "", "su", "す", "寸", 14, "", "se", "せ", "世", 15, "", "so", "そ", "曽"),
                        new video_1.TableRow(16, "", "ta", "た", "太", 17, "", "chi", "ち", "知", 18, "", "tsu", "つ", "川", 19, "", "te", "て", "天", 20, "", "to", "と", "止"),
                        new video_1.TableRow(21, "", "na", "な", "奈", 22, "", "ni", "に", "仁", 23, "", "nu", "ぬ", "奴", 24, "", "ne", "ね", "祢", 25, "", "no", "の", "乃"),
                        new video_1.TableRow(26, "", "ha", "は", "波", 27, "", "hi", "ひ", "比", 28, "", "hu", "ふ", "不", 29, "", "he", "へ", "部", 30, "", "ho", "ほ", "保"),
                        new video_1.TableRow(31, "", "ma", "ま", "末", 32, "", "mi", "み", "美", 33, "", "mu", "む", "武", 34, "", "me", "め", "女", 35, "", "mo", "も", "毛"),
                        new video_1.TableRow(36, "http://www.dartmouth.edu/~introjpn/text/hiragana/36.mp3", "ya", "や", "也", 37, "", " ", " ", " ", 38, "http://www.dartmouth.edu/~introjpn/text/hiragana/37.mp3", "yu", "ゆ", "由", 39, "", " ", " ", " ", 40, "http://www.dartmouth.edu/~introjpn/text/hiragana/38.mp3", "yo", "よ", "与"),
                        new video_1.TableRow(41, "http://www.dartmouth.edu/~introjpn/text/hiragana/39.mp3", "ra", "ら", "良", 42, "http://www.dartmouth.edu/~introjpn/text/hiragana/40.mp3", "ri", "り", "利", 43, "http://www.dartmouth.edu/~introjpn/text/hiragana/41.mp3", "ru", "る", "留", 44, "http://www.dartmouth.edu/~introjpn/text/hiragana/42.mp3", "re", "れ", "礼", 45, "http://www.dartmouth.edu/~introjpn/text/hiragana/43.mp3", "ro", "ろ", "呂"),
                        new video_1.TableRow(46, "http://www.dartmouth.edu/~introjpn/text/hiragana/44.mp3", "wa", "わ", "和", 47, "http://www.dartmouth.edu/~introjpn/text/hiragana/45.mp3", "wi", "ゐ", "為", 48, "", " ", " ", " ", 49, "http://www.dartmouth.edu/~introjpn/text/hiragana/46.mp3", "we", "ゑ", "惠", 50, "http://www.dartmouth.edu/~introjpn/text/hiragana/47.mp3", "wo", "を", "逺"),
                        new video_1.TableRow(51, "", " ", " ", "", 52, "", " ", " ", "", 53, "", " ", " ", "", 54, "", " ", " ", "", 55, "http://www.dartmouth.edu/~introjpn/text/hiragana/48.mp3", "n", "ん", "无")
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