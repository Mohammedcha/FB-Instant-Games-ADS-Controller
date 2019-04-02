//*=================================================*//
//*-------------------------------------------------*//
//*----------------- Facebook ----------------------*//
//*--------------- Instant Game --------------------*//
//*--------------- AdsController -------------------*//
//*-------------- By Mohammed Cha ------------------*//
//*-------------- Re-Skinning grp ------------------*//
//*-------------------------------------------------*//
//*=================================================*//


const INTERSTITIAL_PLACEMENT_ID = 'xxxxxxxxxxxx_xxxxxxxxxxxx'; //*-------- Interstitial -------*//
const REWARDED_PLACEMENT_ID = 'xxxxxxxxxxxx_xxxxxxxxxxxx'; //*-------- Rewarded Video -----*//

// LoadRewarded();
// LoadInter();


// ShowRewarded();
// ShowInter();

	
//*=================================================*//
//*-------------------------------------------------*//
//*----------------- Facebook ----------------------*//
//*--------------- Instant Game --------------------*//
//*--------------- AdsController -------------------*//
//*-------------- By Mohammed Cha ------------------*//
//*-------------- Re-Skinning grp ------------------*//
//*-------------------------------------------------*//
//*=================================================*//

var preloadedRewardedVideo;
var preloadedInterstitial;

//*=================================================*//
//*-------- Interstitial ADS By Mohammed Cha -------*//
//*=================================================*//

//*-------- Load Interstitial --------*//
function LoadInter() {
	var supportedAPIs = FBInstant.getSupportedAPIs();
	if (supportedAPIs.includes('getInterstitialAdAsync')){
		preloadedInterstitial = null;
		FBInstant.getInterstitialAdAsync(
			INTERSTITIAL_PLACEMENT_ID,
		).then(function(interstitial) {
			preloadedInterstitial = interstitial;
			return preloadedInterstitial.loadAsync();
		}).then(function() {
			console.log('Interstitial preloaded')
		}).catch(function(err){
			console.error('Interstitial failed to preload: ' + err.message);
		});
	} else {
		displayError('Ads not supported in this session');
	}
}         
//*-------- Show Interstitial --------*//
function ShowInter() {
preloadedInterstitial.showAsync()
	.then(function () {
		console.log('Interstitial ad finished successfully');
	})
	.catch(function (e) {
		console.error(e.message);
	});
}

//*=================================================*//
//*-------- Rewarded Video ADS By Mohammed Cha -----*//
//*=================================================*//

//*-------- Load Rewarded --------*//
function LoadRewarded() {
	var supportedAPIs = FBInstant.getSupportedAPIs();
	if (supportedAPIs.includes('getRewardedVideoAsync')){
		preloadedRewardedVideo = null;
		FBInstant.getRewardedVideoAsync(
			REWARDED_PLACEMENT_ID
		).then(function(rewarded) {
		  preloadedRewardedVideo = rewarded;
		  return preloadedRewardedVideo.loadAsync();
		}).then(function() {
			console.log('Rewarded Video preloaded')
		}).catch(function(err){
			console.error('Rewarded Video failed to preload: ' + err.message);
		});
	} else {
		displayError('Ads not supported in this session');
	}
}
//*-------- Show Rewarded --------*//
function ShowRewarded() {
preloadedRewardedVideo.showAsync()
	.then(function () {
		console.log('Rewarded Video ad finished successfully');
	})
	.catch(function (e) {
		console.error(e.message);
	});
}

//*=================================================*//
//*-------------------------------------------------*//
//*----------------- Facebook ----------------------*//
//*--------------- Instant Game --------------------*//
//*--------------- AdsController -------------------*//
//*-------------- By Mohammed Cha ------------------*//
//*-------------- Re-Skinning grp ------------------*//
//*-------------------------------------------------*//
//*=================================================*//