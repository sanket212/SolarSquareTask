# Student Dashboard App - README

This document provides instructions for setting up and running the Student Dashboard application.

## 1. Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js:**  Version 16 or higher is recommended.  Download from [nodejs.org](https://nodejs.org/).
*   **npm** (Node Package Manager): Usually installed with Node.js. Check version with `npm -v`. Version 8 or higher is recommended.
*   **Yarn** (Alternative Package Manager): Highly recommended for faster and more consistent dependency management. Install globally with `npm install -g yarn`.
*   **Java Development Kit (JDK):** Required for Android development.  Version 11 or higher is recommended.  Download from [Oracle](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) or [AdoptOpenJDK](https://adoptopenjdk.net/).  Set the `JAVA_HOME` environment variable.
*   **Android Studio:**  Required for Android development.  Download from [developer.android.com](https://developer.android.com/studio).  Configure the `ANDROID_HOME` environment variable and accept Android SDK licenses.
*   **Xcode:**  Required for iOS development.  Available on macOS from the App Store.  You'll need to have a valid Apple Developer account to run on a real iOS device.
*   **React Native CLI:** Install globally with `npm install -g react-native-cli`.  (This project is *not* using Expo.)

## 2. Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

    Replace `<repository_url>` with the URL of the GitHub repository.  Replace `<project_directory>` with the name of the directory where the project was cloned.

2.  **Install dependencies:**

    It is highly recommended to use Yarn for dependency management.

    ```bash
    yarn install
    ```

    Alternatively, you can use npm:

    ```bash
    npm install
    ```

3.  **iOS Pod Installation (if developing for iOS):**

    Navigate to the `ios` directory and install CocoaPods dependencies:

    ```bash
    cd ios
    pod install
    cd ..
    ```

    If you encounter errors during `pod install`, try updating CocoaPods:

    ```bash
    gem install cocoapods
    pod repo update
    pod install --repo-update
    ```

## 3. Running the Application

### Android

1.  **Start the Metro bundler:**

    ```bash
    yarn start
    # OR
    npm start
    ```

2.  **Run the app on an Android device or emulator:**

    ```bash
    yarn android
    # OR
    npm run android
    ```

    Make sure you have an Android emulator running (e.g., using Android Studio) or a physical Android device connected and properly configured.

### iOS

1.  **Start the Metro bundler:**

    ```bash
    yarn start
    # OR
    npm start
    ```

2.  **Run the app on an iOS simulator or device:**

    ```bash
    yarn ios
    # OR
    npm run ios
    ```

    Make sure you have Xcode installed and configured.  You might need to select a development team in Xcode (under Signing & Capabilities) to run the app on a device.

## 4. Dependencies

Key dependencies used in this project:

*   `react-native`: The core React Native framework.
*   `@react-navigation/native`:  For screen navigation.
*   `@react-navigation/stack`:  For stack-based navigation.
*   `@react-native-async-storage/async-storage`:  For local data persistence.
*   `react-native-reanimated`:  For animations.
*   `react-native-gesture-handler`:  For gesture handling.
*   `react-native-screens`:  For native screen optimization.
*   `react-native-safe-area-context`:  For handling safe areas on different devices.
*   `@react-native-community/masked-view`: For masking views.
*   `react-native-toast-message`:  For displaying toast notifications.

See `package.json` for a complete list of dependencies.

## 5. Troubleshooting

*   **"Unable to resolve module..." errors:**
    *   Make sure you have installed all dependencies with `yarn install` or `npm install`.
    *   Try clearing the Metro bundler cache: `yarn start -- --reset-cache` or `npm start -- --reset-cache`.
    *   If the issue persists, try deleting the `node_modules` directory and reinstalling dependencies.
    *   Rebuild the native app ( `yarn android` or `yarn ios`).
*   **Android emulator issues:**
    *   Ensure the emulator is running correctly in Android Studio.
    *   Check that `ANDROID_HOME` is set correctly in your environment variables.
*   **iOS build errors:**
    *   Make sure you have selected a development team in Xcode.
    *   Try cleaning the build folder in Xcode (Product -> Clean Build Folder).
    *   Ensure you have run `pod install` in the `ios` directory.  If that fails, try `pod repo update` first.
*   **AsyncStorage issues:**
    *   Make sure `@react-native-async-storage/async-storage` is correctly installed and linked.
    *   Check for import errors in your JavaScript/TypeScript code.
*   **React Native version mismatch:**
    *   Ensure your global `react-native-cli` version is compatible with the `react-native` version in your project's `package.json`. It is usually better to use the version of react-native that is installed locally in your project. You can run `npx react-native <command>` to use the local version.


