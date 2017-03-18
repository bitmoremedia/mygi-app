# mygi-app
MyGi - health tracking App for iOS and Android built with React Native. Coming soon to an app store near you

![App Screens](/docs/MyGi-App-ScreenCast.gif?raw=true "App Screens")

## Notable Dependencies

| Module | Version         | Comment           | Resource Links  |
| ------------- | --------------------- | ---- |
| react-native | 0.42.0 | React Native build for iOS and Android with an entirely shared code-base across the two platforms | [React Native](https://facebook.github.io/react-native/) |
| react-navigation | 1.0.0.-beta.6  | It does the job quite well, and the API is a pleasure to work with - however the keen eye can still tell the navigation is JS based rather than native e.g. the header transitions can be juddery. I also had to put a hack in to stop 'double tap' of certain items adding the target nav screen to the stack twice | [React  Navigation](https://github.com/react-community/react-navigation) |
| react-native-vector-icons | 4.0.0 | For the in app icons - currently utilises the Ionicons icon set - see Beyond JS section below for more info | [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) [Ionicons](http://ionicframework.com/docs/v2/ionicons/) |
| styled-components | 1.4.3 | Used in most places throughout the app - tho there are still some legacy inline stylesheet based components that could do with refactoring to styled-components. Provides a nice separation in our components between style and function. I also applied a particular 'DisplayName_' convention in each styled-component file which made finding and debugging CSS rules via the React Native Debugger (see below) a breeze | [Styled Components](https://github.com/styled-components/styled-components) |
| redux | 3.6.0 | For state management along with its cousins react-redux (v5.0.1) and redux-thunk (v2.1.0) | [redux](https://github.com/reactjs/redux) [react-redux](https://github.com/reactjs/react-redux) [redux-thunk](https://github.com/gaearon/redux-thunk) |
| redux-persist | 4.4.2 | For persisting the state in the native app storage (AsyncStorage). Applied as redux middleware | [redux-persist](https://github.com/rt2zz/redux-persist) |
| moment | 2.17.1 | A must have for any/all date based logic in the app | [Moment JS](http://momentjs.com/) |

### Useful Tool

[React Native Debugger](https://github.com/jhen0409/react-native-debugger) - really useful Chrome app that provides React / Redux / Dev Tools. And enables tweaking of

## Install

Ensure you have the React Native local environ dependencies installed (e.g. XCode and Android Studio - [see getting started](https://facebook.github.io/react-native/docs/getting-started.html)) then run:

```
$ yarn install
or
$ npm install
```

### Run on iOS Emulator

No need to open XCode, just run:

```
$ react-native run-ios
```

### Run on Android Emulator

Open android virtual device manager

```
$ android avd
```

Start a simulator from the device manager, then run the below in a new terminal window

```
$ react-native run-android
```

## Release

See the [docs](https://facebook.github.io/react-native/docs/running-on-device.html#building-your-app-for-production) for how to release on iOS and Android. (Note: for this project you can cherry pick the last commit on the `release-properties` branch to apply the relevant release properties to the project)

### iOS

For iOS it involves updating the 'Scheme' for the app in XCode from 'Develop' to 'Release'

### Android

For Android it involves using a signed SDK, see [these docs](https://facebook.github.io/react-native/docs/signed-apk-android.html) (Note: the keystore passwords are not included in this repository)

Once this set up is done, the following can be run to generate a standalone release build for Android

```
$ cd android && ./gradlew assembleRelease
```

This will generate a release apk file that can be found at:

- android > app > build > outputs > apk

### Beyond JS

Below is a list of some of the tasks that were required in the build of this app that went beyond just writing React JS code:

| Task          | Description           | Resource Links  |
| ------------- | --------------------- | ---- |
| Icons         | The app uses react-native-vector-icons which required some manual adjustments in order to add the Icon font files as assets to the respective iOS and Android ecosystems. Running `$ react-native link` seemed to do the trick however it added multiple icon files and as we are currently only using the Ionicon fonts, the unused fonts were then manually removed. | [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) |
| App Icon | These was generated using a fantastic Yeoman based CLI tool which is a subset of  [generator-rn-toolbox](https://github.com/bamlab/generator-rn-toolbox) and requires 'imagemagick' to be installed locally in order to generate the icons with `$ yo rn-toolbox:assets --icon src/config/img/my-gi-icon.png` | [Generate Icons](https://github.com/bamlab/generator-rn-toolbox/blob/master/generators/assets/README.md) |
| Splash Screen | Used the same CLI tool as the App Icon but with command `$ yo rn-toolbox:assets --splash src/config/img/my-gi-splash.png`. Note to make it take effect I seemingly had to open XCode and in General settings clear the Launch Screen File, select Use Asset Catalog then Import after which you can select LaunchImage | [Generate Splash Screens](https://github.com/bamlab/generator-rn-toolbox/blob/master/generators/assets/README.md) |
