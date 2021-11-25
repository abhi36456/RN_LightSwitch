<!-- /////// react native project setup and run in android -->

1. clone the project in any folder
2. run command ```npm install```
3. create new file in android folder with (local.properties) name and
   add your system sdk path (sdk.dir=(sdk path))
for example:
```sdk.dir=/Users/mac/Library/Android/sdk/```
4. Install react-native - https://rlogicaltech.medium.com/how-to-install-react-native-on-mac-step-by-step-guide-1ac822aedd4f
5. open terminal inside in project and run commad (react-native run-android)
6. only for ubuntu system open new terminal again inside in project and run command (react-native start)

NOTE==== mobile debugging on (you can test in android real device)

<!-- ///////////////// react native project setup in ios -->

1. clone the project in any folder
2. run command ```npm install```
3. open termial in project root and go to ios folder (cd ios)
4. run command inside in ios folder (pod install). If you don't already have pod, do ```brew install cocoapods```
5. exit the ios folder (cd ..)
6. open terminal inside in project and run commad (react-native run-ios)



<!-- ///////////////// Create build in android////////// -->
1)enter in project root 
2)cd android ()
3)sudo ./gradlew clean (clean old build and refresh all code )
4)sudo ./gradlew assembleRelease (this cmd create build)
5)after successfull build  go to --> root project ----> open android folder -------> open app folder -------> open  build folder --------->   open output folder ------> open apk folder ------->and show app-release.apk (this is your apk file of app and you can upload this file on google drive)

thanks.