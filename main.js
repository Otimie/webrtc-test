const platformClient = require('platformClient');

const client = platformClient.ApiClient.instance;

client.setEnvironment(platformClient.PureCloudRegionHosts.ap_southeast_2);

const clientId = 'c09753f7-587a-43b8-875e-f060c8dd3272';
const redirectUri = 'https://djlh1c0cndn6z.cloudfront.net/';

client.loginImplicitGrant(clientId, redirectUri).then(() => {
	const sdk = new window.PureCloudWebrtcSdk({
		accessToken: client.authData.accessToken,
		environment: 'mypurecloud.com.au'
	});
	sdk.initialize();
});
