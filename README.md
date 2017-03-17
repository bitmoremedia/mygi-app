# mygi-app
MyGi Health App

## Install

Ensure you have the React Native local environ dependencies installed (e.g. XCode and Android Studio - [link to getting started](https://facebook.github.io/react-native/docs/getting-started.html) )

## Install Node Modules

```
$ yarn install
or
$ npm install
```

### Run on iOS

No need to open XCode, just run:

```
$ react-native run-ios
```

### Run on Android

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

- android > app > build > outputs > apk


### Beyond JS

Below is a list of tasks that were required in the building of this app that went beyond just writing React JS code:

| Task          | Description           | URL  |
| ------------- | --------------------- | ---- |
| Icons         | The app uses react-native-vector-icons which required some manual adjustments in order to add the Icon font files as assets to the respective iOS and Android ecosystems. Running `$ react-native link` seemed to do the trick however it added multiple icon files and as we are currently only using the Ionicon fonts, the unused fonts were then manually removed. | [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) |
| App Icon | These was generated using a fantastic Yeoman based CLI tool which is a subset of  [generator-rn-toolbox](https://github.com/bamlab/generator-rn-toolbox) and requires 'imagemagick' to be installed locally in order to generate the icons with `$ yo rn-toolbox:assets --icon src/config/img/my-gi-icon.png` | [Generate Icons](https://github.com/bamlab/generator-rn-toolbox/blob/master/generators/assets/README.md) |
| Splash Screen | Used the same CLI tool as the App Icon but with command `$ yo rn-toolbox:assets --splash src/config/img/my-gi-splash.png`. Note to make it take effect I seemingly had to open XCode and in General settings clear the Launch Screen File, select Use Asset Catalog then Import after which you can select LaunchImage | [Generate Icons](https://github.com/bamlab/generator-rn-toolbox/blob/master/generators/assets/README.md) |
