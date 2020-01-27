const platformClient = require('platformClient');

const client = platformClient.ApiClient.instance;

client.setEnvironment(platformClient.PureCloudRegionHosts.ap_southeast_2);

const clientId = 'c09753f7-587a-43b8-875e-f060c8dd3272';
const redirectUri = 'https://otimie.github.io/webrtc-test/index.html';

client.loginImplicitGrant(clientId, redirectUri).then(() => {
	console.log('HERE!!!');
	const sdk = new window.PureCloudWebrtcSdk({
		accessToken: client.authData.accessToken,
		environment: 'mypurecloud.com.au'
	});
	sdk.initialize();
});


var conversationsApi = new platformClient.ConversationsApi();

function placeAPhoneCall(phoneNumber) {
	var body = {
		phoneNumber: phoneNumber,
	};

	conversationsApi.postConversationsCalls(body).then(function(result){
		console.log("call placed successfully");
		console.log(result);
	}).catch(function(error){
		console.error("Error Placing call", error);
	});
}
