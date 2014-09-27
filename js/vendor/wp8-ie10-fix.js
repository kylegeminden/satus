/**
 * http://mattstow.com/responsive-design-in-ie10-on-windows-phone-8.html
 * https://gist.github.com/stowball/4617428
 * http://timkadlec.com/2013/01/windows-phone-8-and-device-width/
 */

(function() {
    if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode("@-ms-viewport{width:auto!important}")
        );
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
})();
