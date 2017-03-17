# mygi-app
MyGi Health App

## Run the app

Ensure you have the React Native local environ dependencies installed (e.g. XCode and Android Studio - [link to getting started](https://facebook.github.io/react-native/docs/getting-started.html) )

### iOS

No need to open XCode, just run:

```
$ react-native run-ios
```

### Android

Open android virtual device manager

```
$ android avd
```

Start a simulator from the device manager, then run the below in a new terminal window

```
$ react-native run-android
```

## Release

See the [docs](https://facebook.github.io/react-native/docs/running-on-device.html#building-your-app-for-production) for how to release on iOS and Android.

### iOS

For iOS it involves updating the 'Scheme' for the app in XCode from 'Develop' to 'Release'

### Android

For Android it involves using a signed SDK, see (these docs)[https://facebook.github.io/react-native/docs/signed-apk-android.html]

Once this set up is done, the following can be run to generate a standalone release build for Android

```
$ cd android && ./gradlew assembleRelease
```

This will generate a release apk file that can be found at:

-- android > app > build > outputs > apk
