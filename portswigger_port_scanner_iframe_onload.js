class PortScanner {
    constructor() {
        this.detectBrowser();
        this.detectOS();
        this.restrictedPorts = {
            Chrome: [1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115, 117, 119, 123, 135, 139, 143, 179, 389, 465, 512, 513, 514, 515, 526, 530, 531, 532, 540, 556, 563, 587, 601, 636, 993, 995, 2049, 3659, 4045, 6000, 6665, 6666, 6667, 6668, 6669, 6697, 65535],
            Firefox: [1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 77, 79, 87, 95, 101, 102, 103, 104, 109, 2, 110, 3, 111, 113, 115, 117, 119, 123, 135, 139, 143, 2, 179, 389, 465, 512, 513, 514, 515, 526, 530, 531, 532, 540, 556, 563, 587, 601, 636, 993, 995, 3, 2049, 4045, 6000],
            Edge: [19, 21, 25, 110, 119, 143, 220, 993,],
            Safari: [1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115, 117, 119, 123, 135, 139, 143, 179, 389, 465, 512, 513, 514, 515, 526, 530, 531, 532, 540, 556, 563, 587, 601, 636, 993, 995, 2049, 3659, 4045, 6000, 6665, 6666, 6667, 6668, 6669, 6697, 65535]
        };
    }

    setUrl(url) {
        this.url = url;
    }

    detectOS() {
        if (/Mac/i.test(navigator.platform)) {
            this.os = "Mac";
        } else if (/Linux/i.test(navigator.platform)) {
            this.os = "Linux";
        } else if (/^Win/i.test(navigator.platform)) {
            this.os = "Windows";
        }
    }

    detectBrowser() {
        this.browser = /Google/i.test(navigator.vendor) ? 'Chrome' : /Apple/i.test(navigator.vendor) ? 'Safari' : [].toSource ? 'Firefox' : top.msCredentials ? 'Edge' : 'Unsupported';
    }

    getCommonHttpPorts() {
        return [66, 80, 81, 443, 445, 457, 1080, 1100, 1241, 1352, 1337, 1433, 1434, 1521, 1944, 2301, 3000, 3128, 3306, 4000, 4001, 4002, 4100, 5000, 5432, 5800, 5801, 5802, 6346, 6347, 7001, 7002, 8000, 8080, 8888, 30821].filter(x => !~this.restrictedPorts[this.browser].indexOf(x));
    }

    getCommonPorts() {
        return [1, 3, 4, 6, 7, 9, 13, 17, 19, 20, 21, 22, 23, 24, 25, 26, 30, 32, 33, 37, 42, 43, 49, 53, 70, 79, 80, 81, 82, 83, 84, 85, 88, 89, 90, 99, 100, 106, 109, 110, 111, 113, 119, 125, 135, 139, 143, 144, 146, 161, 163, 179, 199, 211, 212, 222, 254, 255, 256, 259, 264, 280, 301, 306, 311, 340, 366, 389, 406, 407, 416, 417, 425, 427, 443, 444, 445, 458, 464, 465, 481, 497, 500, 512, 513, 514, 515, 524, 541, 543, 544, 545, 548, 554, 555, 563, 587, 593, 616, 617, 625, 631, 636, 646, 648, 666, 667, 668, 683, 687, 691, 700, 705, 711, 714, 720, 722, 726, 749, 765, 777, 783, 787, 800, 801, 808, 843, 873, 880, 888, 898, 900, 901, 902, 903, 911, 912, 981, 987, 990, 992, 993, 995, 999, 1000, 1001, 1002, 1007, 1009, 1010, 1011, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1102, 1104, 1105, 1106, 1107, 1108, 1110, 1111, 1112, 1113, 1114, 1117, 1119, 1121, 1122, 1123, 1124, 1126, 1130, 1131, 1132, 1137, 1138, 1141, 1145, 1147, 1148, 1149, 1151, 1152, 1154, 1163, 1164, 1165, 1166, 1169, 1174, 1175, 1183, 1185, 1186, 1187, 1192, 1198, 1199, 1201, 1213, 1216, 1217, 1218, 1233, 1234, 1236, 1244, 1247, 1248, 1259, 1271, 1272, 1277, 1287, 1296, 1300, 1301, 1309, 1310, 1311, 1322, 1328, 1334, 1352, 1417, 1433, 1434, 1443, 1455, 1461, 1494, 1500, 1501, 1503, 1521, 1524, 1533, 1556, 1580, 1583, 1594, 1600, 1641, 1658, 1666, 1687, 1688, 1700, 1717, 1718, 1719, 1720, 1721, 1723, 1755, 1761, 1782, 1783, 1801, 1805, 1812, 1839, 1840, 1862, 1863, 1864, 1875, 1900, 1914, 1935, 1947, 1971, 1972, 1974, 1984, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2013, 2020, 2021, 2022, 2030, 2033, 2034, 2035, 2038, 2040, 2041, 2042, 2043, 2045, 2046, 2047, 2048, 2049, 2065, 2068, 2099, 2100, 2103, 2105, 2106, 2107, 2111, 2119, 2121, 2126, 2135, 2144, 2160, 2161, 2170, 2179, 2190, 2191, 2196, 2200, 2222, 2251, 2260, 2288, 2301, 2323, 2366, 2381, 2382, 2383, 2393, 2394, 2399, 2401, 2492, 2500, 2522, 2525, 2557, 2601, 2602, 2604, 2605, 2607, 2608, 2638, 2701, 2702, 2710, 2717, 2718, 2725, 2800, 2809, 2811, 2869, 2875, 2909, 2910, 2920, 2967, 2968, 2998, 3000, 3001, 3003, 3005, 3006, 3007, 3011, 3013, 3017, 3030, 3031, 3052, 3071, 3077, 3128, 3168, 3211, 3221, 3260, 3261, 3268, 3269, 3283, 3300, 3301, 3306, 3322, 3323, 3324, 3325, 3333, 3351, 3367, 3369, 3370, 3371, 3372, 3389, 3390, 3404, 3476, 3493, 3517, 3527, 3546, 3551, 3580, 3659, 3689, 3690, 3703, 3737, 3766, 3784, 3800, 3801, 3809, 3814, 3826, 3827, 3828, 3851, 3869, 3871, 3878, 3880, 3889, 3905, 3914, 3918, 3920, 3945, 3971, 3986, 3995, 3998, 4000, 4001, 4002, 4003, 4004, 4005, 4006, 4045, 4111, 4125, 4126, 4129, 4224, 4242, 4279, 4321, 4343, 4443, 4444, 4445, 4446, 4449, 4550, 4567, 4662, 4848, 4899, 4900, 4998, 5000, 5001, 5002, 5003, 5004, 5009, 5030, 5033, 5050, 5051, 5054, 5060, 5061, 5080, 5087, 5100, 5101, 5102, 5120, 5190, 5200, 5214, 5221, 5222, 5225, 5226, 5269, 5280, 5298, 5357, 5405, 5414, 5431, 5432, 5440, 5500, 5510, 5544, 5550, 5555, 5560, 5566, 5631, 5633, 5666, 5678, 5679, 5718, 5730, 5800, 5801, 5802, 5810, 5811, 5815, 5822, 5825, 5850, 5859, 5862, 5877, 5900, 5901, 5902, 5903, 5904, 5906, 5907, 5910, 5911, 5915, 5922, 5925, 5950, 5952, 5959, 5960, 5961, 5962, 5963, 5987, 5988, 5989, 5998, 5999, 6000, 6001, 6002, 6003, 6004, 6005, 6006, 6007, 6009, 6025, 6059, 6100, 6101, 6106, 6112, 6123, 6129, 6156, 6346, 6389, 6502, 6510, 6543, 6547, 6565, 6566, 6567, 6580, 6646, 6666, 6667, 6668, 6669, 6689, 6692, 6699, 6779, 6788, 6789, 6792, 6839, 6881, 6901, 6969, 7000, 7001, 7002, 7004, 7007, 7019, 7025, 7070, 7100, 7103, 7106, 7200, 7201, 7402, 7435, 7443, 7496, 7512, 7625, 7627, 7676, 7741, 7777, 7778, 7800, 7911, 7920, 7921, 7937, 7938, 7999, 8000, 8001, 8002, 8007, 8008, 8009, 8010, 8011, 8021, 8022, 8031, 8042, 8045, 8080, 8081, 8082, 8083, 8084, 8085, 8086, 8087, 8088, 8089, 8090, 8093, 8099, 8100, 8180, 8181, 8192, 8193, 8194, 8200, 8222, 8254, 8290, 8291, 8292, 8300, 8333, 8383, 8400, 8402, 8443, 8500, 8600, 8649, 8651, 8652, 8654, 8701, 8800, 8873, 8888, 8899, 8994, 9000, 9001, 9002, 9003, 9009, 9010, 9011, 9040, 9050, 9071, 9080, 9081, 9090, 9091, 9099, 9100, 9101, 9102, 9103, 9110, 9111, 9200, 9207, 9220, 9290, 9415, 9418, 9485, 9500, 9502, 9503, 9535, 9575, 9593, 9594, 9595, 9618, 9666, 9876, 9877, 9878, 9898, 9900, 9917, 9929, 9943, 9944, 9968, 9998, 9999, 10000, 10001, 10002, 10003, 10004, 10009, 10010, 10012, 10024, 10025, 10082, 10180, 10215, 10243, 10566, 10616, 10617, 10621, 10626, 10628, 10629, 10778, 11110, 11111, 11967, 12000, 12174, 12265, 12345, 13456, 13722, 13782, 13783, 14000, 14238, 14441, 14442, 15000, 15002, 15003, 15004, 15660, 15742, 16000, 16001, 16012, 16016, 16018, 16080, 16113, 16992, 16993, 17877, 17988, 18040, 18101, 18988, 19101, 19283, 19315, 19350, 19780, 19801, 19842, 20000, 20005, 20031, 20221, 20222, 20828, 21571, 22939, 23502, 24444, 24800, 25734, 25735, 26214, 27000, 27352, 27353, 27355, 27356, 27715, 28201, 30000, 30718, 30951, 31038, 31337, 32768, 32769, 32770, 32771, 32772, 32773, 32774, 32775, 32776, 32777, 32778, 32779, 32780, 32781, 32782, 32783, 32784, 32785, 33354, 33899, 34571, 34572, 34573, 35500, 38292, 40193, 40911, 41511, 42510, 44176, 44442, 44443, 44501, 45100, 48080, 49152, 49153, 49154, 49155, 49156, 49157, 49158, 49159, 49160, 49161, 49163, 49165, 49167, 49175, 49176, 49400, 49999, 50000, 50001, 50002, 50003, 50006, 50300, 50389, 50500, 50636, 50800, 51103, 51493, 52673, 52822, 52848, 52869, 54045, 54328, 55055, 55056, 55555, 55600, 56737, 56738, 57294, 57797, 58080, 60020, 60443, 61532, 61900, 62078, 63331, 64623, 64680, 65000, 65129, 65389
        ].filter(x => !~this.restrictedPorts[this.browser].indexOf(x));
    }

    updateProgress(port) {
        this.progress.innerText = 'Scanning ' + this.pos + ' of ' + this.total + ' using port ' + port + ' on ' + this.url.replace(/^http:\/\//, "");
    }

    next() {
        if (this.q.length) {
            this.pos++;
            this.scan();
            return true;
        } else {
            this.complete();
            return false;
        }
    }

    complete() {
        if (this.openPorts.length) {
            this.progress.innerText = "The following ports are open:" + this.openPorts + ' on ' + this.url.replace(/^http:\/\//, "");
        } else {
            document.body.removeChild(this.progress);
        }
        if (this.hooks && this.hooks.oncomplete) {
            this.hooks.oncomplete();
        }
    }

    async scanChromeWindows() {
        var that = this;
        let promise = new Promise(function (resolve, reject) {
            that.hooks = {
                oncomplete: function () {
                    var iframes = document.getElementsByClassName('chrome');
                    while (iframes.length > 0) {
                        iframes[0].parentNode.removeChild(iframes[0]);
                    }
                    resolve();
                }
            };
            that.scan = function () {
                var port = that.q.shift(), id = 'chrome' + (that.pos % 500),
                    iframe = document.getElementById(id) ? document.getElementById(id) : document.createElement('iframe'),
                    timer, calls = 0;
                iframe.style.display = 'none';
                iframe.id = iframe.name = id;
                iframe.src = that.url + ":" + port;
                iframe.className = 'chrome';
                that.updateProgress(port);
                iframe.hasLoadedOnce = 0;
                iframe.onload = function () {
                    calls++;
                    if (calls > 1) {
                        clearTimeout(timer);
                        that.next();
                        return;
                    }
                    iframe.hasLoadedOnce = 1;
                    var a = document.createElement('a');
                    a.target = iframe.name;
                    a.href = iframe.src + '#';
                    a.click();
                    a = null;
                };
                timer = setTimeout(function () {
                    if (iframe.hasLoadedOnce) {
                        that.openPorts.push(port);
                    }
                    if (that.connections <= that.maxConnections) {
                        that.next();
                        that.connections++;
                    }
                }, 3000);
                if (!document.body.contains(iframe)) {
                    document.body.appendChild(iframe);
                }
            };
            that.scan();
        });
        return promise;
    }

    async scanEdge() {
        var that = this;
        let promise = new Promise(function (resolve, reject) {
            that.hooks = {
                oncomplete: function () {
                    var iframes = document.getElementsByClassName('edge');
                    while (iframes.length > 0) {
                        iframes[0].parentNode.removeChild(iframes[0]);
                    }
                    resolve();
                }
            };
            that.scan = function () {
                var port = that.q.shift(), id = 'edge' + (that.pos % 50),
                    iframe = document.getElementById(id) ? document.getElementById(id) : document.createElement('iframe'),
                    calls = 0;
                iframe.style.display = 'none';
                iframe.id = iframe.name = id;
                iframe.src = that.url + ":" + port;
                iframe.className = 'edge';
                that.updateProgress(port);
                iframe.hasLoadedOnce = 0;
                iframe.onload = function () {
                    calls++;
                    if (calls > 1) {
                        that.openPorts.push(port);
                        that.next();
                        return;
                    }
                    iframe.hasLoadedOnce = 1;
                    var a = document.createElement('a');
                    a.target = iframe.name;
                    a.href = 'ms-appx-web://microsoft.microsoftedge/assets/errorpages/dnserror.html#123';
                    a.click();
                    a = null;
                    if (calls == 1) {
                        that.next();
                    }
                };
                if (!document.body.contains(iframe)) {
                    document.body.appendChild(iframe);
                }
            };
            that.scan();
        });
        return promise;
    }

    async scanFirefox() {
        var that = this;
        let promise = new Promise(function (resolve, reject) {
            that.hooks = {
                oncomplete: function () {
                    var iframes = document.getElementsByClassName('firefox');
                    while (iframes.length > 0) {
                        iframes[0].parentNode.removeChild(iframes[0]);
                    }
                    resolve();
                }
            };
            that.scan = function () {
                var port = that.q.shift(), id = 'firefox' + (that.pos % 1000),
                    iframe
                        = document.getElementById(id) ? document.getElementById(id) : document.createElement('iframe'),
                    timer;
                iframe.style.display = 'none';
                iframe.id = id;
                iframe.src = that.url + ":" + port;
                iframe.className = 'firefox';

                that.updateProgress(port);

                iframe.onload = function () {
                    that.openPorts.push(port);
                    clearTimeout(timer);
                    that.next();
                };

                timer = setTimeout(function () {
                    that.next();
                }, 50);

                if (!document.body.contains(iframe)) {
                    document.body.appendChild(iframe);
                }
            };
            that.scan();
        });
        return promise;
    }

    async scanChromeLinux(iframe, a) {
        var that = this;
        let promise = new Promise(function (resolve, reject) {
            that.hooks = {
                oncomplete: function () {
                    document.body.removeChild(iframe);
                    resolve();
                }
            };
            that.scan = function () {
                var port = that.q.shift(), calls = 0, timer;
                iframe.src = that.url + ":" + port;
                a.href = iframe.src + '#';
                that.updateProgress(port);
                iframe.hasLoadedOnce = 0;
                iframe.onload = function () {
                    calls++;
                    if (calls > 1) {
                        clearTimeout(timer);
                        that.next();
                        return;
                    }
                    iframe.hasLoadedOnce = 1;
                    a.click();
                };
                timer = setTimeout(function () {
                    if (iframe.hasLoadedOnce) {
                        that.openPorts.push(port);
                    }
                    that.next();
                }, 3000);
            };
            that.scan();
        });
        return promise;
    }

    async scanArray(ports) {
        ports = ports.filter(x => !~this.restrictedPorts[this.browser].indexOf(x));
        var that = this;

        let promise = new Promise(async function (resolve, reject) {
            that.openPorts = [];
            that.closedPorts = [];
            that.pos = 1;
            that.q = ports.slice();
            that.total = that.q.length;
            that.progress = document.createElement('div');
            document.body.appendChild(that.progress);

            if ((that.os === 'Mac' || that.os === 'Linux') && (that.browser === 'Chrome' || that.browser === 'Safari')) {
                let iframe = document.createElement('iframe'), a = document.createElement('a');
                iframe.style.display = 'none';
                iframe.name = a.target = 'probe' + Date.now();
                document.body.appendChild(iframe);
                await that.scanChromeLinux(iframe, a);
            } else if (that.browser === 'Firefox') {
                await that.scanFirefox();
            } else if (that.browser === 'Edge') {
                await that.scanEdge();
            } else if (that.os === 'Windows' && (that.browser === 'Chrome' || that.browser === 'Safari')) {
                that.connections = 0;
                that.maxConnections = 150;
                await that.scanChromeWindows();
            }
            resolve();
        });
        return promise;
    }

    async scanRange(start, end) {
        const length = end - start;
        return await this.scanArray(Array.from({length}, (_, i) => start + i));
    }

    async scanPort(port) {
        return await this.scanArray([port]);
    }

    getIPRange(ip) {
        let ipParts = ip.split('.'), ranges = [];
        ipParts.pop();
        for (let i = 1; i <= 254; i++) {
            ranges.push(ipParts.join('.') + '.' + i);
        }
        return ranges;
    }

    async getLocalIPs() {
        let promise = new Promise(function (resolve, reject) {
            var ip_dups = {};
            var RTCPeerConnection = window.RTCPeerConnection
                || window.mozRTCPeerConnection
                || window.webkitRTCPeerConnection;
            var useWebKit = !!window.webkitRTCPeerConnection;
            if (!RTCPeerConnection) {
                var win = document.querySelector('.iframe_webrtc').contentWindow;
                RTCPeerConnection = win.RTCPeerConnection
                    || win.mozRTCPeerConnection
                    || win.webkitRTCPeerConnection;
                useWebKit = !!win.webkitRTCPeerConnection;
            }
            var mediaConstraints = {
                optional: [{RtpDataChannels: true}]
            };
            var servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};
            if (!RTCPeerConnection) {
                reject();
                return;
            }
            var pc = new RTCPeerConnection(servers, mediaConstraints);

            function handleCandidate(candidate) {
                var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
                var ip_addr = ip_regex.exec(candidate)[1];
                if (ip_dups[ip_addr] === undefined)
                    resolve(ip_addr)
                ip_dups[ip_addr] = true;
            }

            pc.onicecandidate = function (ice) {
                if (ice.candidate)
                    handleCandidate(ice.candidate.candidate);
            };
            pc.createDataChannel("");
            pc.createOffer(function (result) {
                pc.setLocalDescription(result, function () {
                }, function () {
                });

            }, function () {
            });
            setTimeout(function () {
                var lines = pc.localDescription.sdp.split('\n');
                lines.forEach(function (line) {
                    if (line.indexOf('a=candidate:') === 0)
                        handleCandidate(line);
                });
            }, 1000);
        });

        return promise;
    }
}

(async () => {
    var scan = new PortScanner(), ip, ips, i;

    try {
        // ip = await scan.getLocalIPs();
        //
        // if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)) {
        //
        //     scan.setUrl('http://127.0.0.1');
        //
        //     await scan.scanArray(scan.getCommonPorts());
        //
        //     ips = scan.getIPRange(ip);
        //
        //     for (i = 0; i < ips.length; i++) {
        //         scan.setUrl('http://' + ips[i]);
        //         if (scan.browser === 'Firefox') {
        //             await scan.scanArray(scan.getCommonHttpPorts());
        //         } else {
        //             await scan.scanPort(80);
        //         }
        //     }
        //
        //     scan.setUrl('http://' + ip);
        //
        //     await scan.scanArray(scan.getCommonPorts());
        //
        //     for (i = 0; i < ips.length; i++) {
        //         if (ip === ips[i]) {
        //             continue;
        //         }
        //         scan.setUrl('http://' + ips[i]);
        //         await scan.scanArray(scan.getCommonPorts());
        //     }
        // } else {
            scan.setUrl('http://127.0.0.1');
            await scan.scanArray(scan.getCommonPorts());
        // }
    } catch (e) {
        console.error(e);
        // scan.setUrl('http://127.0.0.1');
        // await scan.scanArray(scan.getCommonPorts());
    }
    // scan.setUrl('http://127.0.0.1');
    // for (i = 0; i <= 0xffff; i += 1000) {
    //     await scan.scanRange(i, i + 1000 > 0xffff ? i + (0xffff - i) : i + 1000);
    // }
})();
