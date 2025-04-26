function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "zalo.me") ||
        dnsDomainIs(host, "zaloapp.com") ||
        dnsDomainIs(host, "chat.zalo.me") ||
        shExpMatch(host, "*.zalo.me") ||
        shExpMatch(host, "*.zaloapp.com")) {
        return "DIRECT";
    }
    return "PROXY 10.220.3.18:3128";
}
