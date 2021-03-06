### React-Native Template CD

![Screenshots](https://s3.amazonaws.com/colorfuldots/products/Screenshot+2019-03-22+07.55.56.png)

### Updates 03/23/2019
- Uses latest React Native (0.59.1)
- Added React Hooks example
- Added basic theming options
- Added a basic component example
- Added Size Matters to control sizes on all devices
- Added Responsive Font to control font sizes on all devices
- Added React Navigation and some additional Screens

### Roadmap

- Add Crashlytics
- Add Fabric
- Add Firebase / Firestore
- Add Redux
- Add Fastlane

### Requirements

- `sudo gem install cocoapods`
- `yarn global add react-native-cli`

### Instructions

To start a new React Native Project, simply run:

`react-native init <appName> --template cd`

Then, when finished:
- `cd <appName>`
- `yarn start`

### Launch Simulator / Emulator:

IOS Simulator:

- `cd <appName>`
- `react-native run-ios --simulator="iPhone X"`

Android Emulator:

- `cd <appName>`
- `react-native run-android`

### Features

- [x] TypeScript
- [ ] Redux - WIP
- [ ] Firebase - WIP
- [x] React-Navigation
- [ ] Fastlane - WIP
- [ ] Crashlytics - WIP
- [ ] Fabric - WIP
- [x] Prettier
- [x] TSLint
- [x] Jest

### Additional Setup

- You may need to link some dependencies
- `react-native link react-native-gesture-handler`

### Pod Setup

- `cd ios/"`
- `pod init && pod install"`

### Issues

- Pull Requests are helpful, fix it and ship it. 
- Isssues regarding: `null is not an object ( evaluating 'RNGestureHandlerModule.Direction')` - find solution here: https://github.com/kmagiera/react-native-gesture-handler/issues/494
- Issues regarding `Error: Unable to resolve module `./index` - just close metro and run `npm run start --reset-cache` or `yarn start --reset-cache` and you should be up and running. 

### Author

- [Colorful Dots, LLC](https://colorfuldots.com)
- [Eric David Smith - LinkedIn](https://www.linkedin.com/in/erictherobot)
- [@erictherobot](https://twitter.com/erictherobot)

### MIT License

Copyright (c) 2018 Colorful Dots, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
