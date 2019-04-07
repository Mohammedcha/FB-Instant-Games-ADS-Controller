# Instant Game ADS-Controller

Learn how to integrate <code>Fb audience network</code> with <code>instant games</code> / games built with <code>HTML5 & JavaScript</code>


</br>


<strong>1.</strong> Ads-Contoller file should be placed in the main folder of the game (the same folder that contains index.html)


</br>


<strong>2.</strong> Start by importing the <code>AdsController</code> by adding this line in the <code>body</code> of your index file

<pre>
<script src="AdsController.js"></script>
</pre>


</br>

<strong>2.</strong> Open AdsController.js file and replace the <code>xxxxxxxxxxxx_xxxxxxxxxxxx</code> with your Interstitial & Rewarded Video IDs

<pre>
const INTERSTITIAL_PLACEMENT_ID = 'xxxxxxxxxxxx_xxxxxxxxxxxx'; //*-------- Interstitial -------*//
const REWARDED_PLACEMENT_ID = 'xxxxxxxxxxxx_xxxxxxxxxxxx'; //*-------- Rewarded Video -----*//
</pre>


</br>


<strong>3.</strong> Start Pre-loading your ADS by calling 

<pre>
LoadRewarded();
LoadInter();
</pre>


</br>


<strong>4.</strong> Ads can be shown anywhere you want by calling this function 

<pre>
ShowRewarded();
</pre>
<pre>
ShowInter();
</pre>

</br>

<pre>
<script>
	window.setInterval(LoadInter, 10000); // Load Interstitial in 10s 
	window.setInterval(ShowInter, 15000); // Show Interstitial in 15s 

	window.setInterval(LoadRewarded, 16000); // Load RewardedVideo in 16s 
	window.setInterval(ShowRewarded, 32000); // Show RewardedVideo in 32s 
</script>

</pre>


<strong>NB :</strong> Do not call the Interstitial & Rewarded Video functions at the same time & same place !
