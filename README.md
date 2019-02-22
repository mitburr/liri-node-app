# liri-node-app
![](liriDemonstration.webm)

Language
Interpretation
Recognition
Interface
Bot 

=========================================================================================

I took a picture of the three commands running. The fourth command I couldn't get to work. I was able to pull the arguments and parse them into an array, but the array elements couldn't be used as an argument. This is demonstrated in the app as well. 

=========================================================================================
large demonstration photo showing random.txt
![overall demonstration](liriDemonstrationPhoto.png)
=========================================================================================
![spotify-this-song example](liriDemonstration/52590425_1003897299806539_5400510178846048256_n.png)
spotify example
=========================================================================================
![movie-this example](liri-node-app/liriDemonstration/52595944_334732230471631_2957853194031464448_n.png)
movie example
=========================================================================================
![concert-this example](liri-node-app/liriDemonstration/52813738_246506562967392_7685506778309591040_n.png)
concert-this example
=========================================================================================
![do-what-it-says error](liriDemonstration/do-what-it-saysError.png)
In the other examples you can see the variableArray defined from the random.txt file. For some reason I can't pass the elements of the array to the spotify function. They are undefined even before I put them in the function (the first console.log is in the if statement at the bottom). Must be something to do with the read function adding things to the array in a weird format :| .
