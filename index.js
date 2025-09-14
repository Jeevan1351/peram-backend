const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.get('/.well-known/assetlinks.json', (req, res) => {
    return res.json([{
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
            namespace: "android_app",
            package_name: "com.user.mobile.rozana",
            sha256_cert_fingerprints: [
                "38:92:82:39:08:D4:BD:C3:96:E9:A1:D6:A3:5A:60:E6:35:B0:E0:F1:1E:F1:63:F0:0D:39:45:79:2F:85:6F:12"
            ]
        }
    }])
});

app.listen(3000, () => {
    console.log('Server listening to port 3000')
});
