
export const MessageHelper = {
    origin: window.location.ancestorOrigins && window.location.ancestorOrigins.length ? window.location.ancestorOrigins[0] : undefined,

    /**
     * Send Message from Iframe to Parent.
     */
    sendToParent: (name: string, data: any) => {
        console.log('send origin - ' + MessageHelper.origin);
        let winRef = window as any;
        if (parent && parent.window) {
            winRef = parent.window;
        }
        winRef.postMessage({
            name,
            data
        }, MessageHelper.origin);
    },

    /**
     * Send Message from Parent to Iframe.
     */
    sendToChild: (name: string, data: any, iframe: any) => {
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(name, data);
        }
    },

    /**
     * Subscribe to Message event on window.
     */
    receive: (name: string, handler: (data: any) => void) => {
        const winRef = window as any;

        if (winRef.addEventListener) {
            winRef.addEventListener('message', (msg: any) => {
                console.log('receive origin - ' + msg.origin);
                if (msg && msg.origin) {
                    MessageHelper.origin = msg.origin;
                }
                if (msg && msg.data && msg.data.name === name) {
                    handler(msg.data.data);
                }
            }, false);
        } else {
            winRef.attachEvent('onmessage', (msg) => {
                if (msg && msg.origin) {
                    MessageHelper.origin = msg.origin;
                }
                if (msg && msg.data && msg.data.name === name) {
                    handler(msg.data.data);
                }
            });
        }
    }
}
