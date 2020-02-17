export async function get_local_ip_addresses() {
    const rtc_peer_connection = new RTCPeerConnection({iceServers: []});
    const ip_addresses = new Set();

    await new Promise(async (resolve, reject) => {
        rtc_peer_connection.createDataChannel('');

        await rtc_peer_connection.setLocalDescription(await rtc_peer_connection.createOffer());

        const timeout_id = setTimeout(() => resolve(ip_addresses), 500);

        rtc_peer_connection.onicecandidate = event => {
            if (event.candidate === null)
                return;

            clearTimeout(timeout_id);
            ip_addresses.add(event.candidate.candidate.split(' ')[4]);
            setTimeout(() => resolve(ip_addresses), 500);
        };
    });

    rtc_peer_connection.localDescription.sdp.split('\n').forEach(line => {
        // TODO: It is sick that it won't work if I add `$` at the end! WTF?
        // TODO: Do a regex check to see if it is actually an IP address.
        const match = /^a=candidate:\d+ \d+ [^ ]+ \d+ (?<ip_address>[^ ]+) .*/.exec(line);
        if (match !== null) {
            ip_addresses.add(match.groups.ip_address);
        }
    });

    return ip_addresses;
}
