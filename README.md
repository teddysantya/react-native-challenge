# React Native code challenge

**Timeline app**  

![sample](./sample.gif)

## Mission

Here are the tasks you must complete:

- Complete timeline application (like twitter) in accordance with the design (image above)
  - Fetch posts from server
  - Pagination
  - Pull to refresh
  - Display post with avatar image
  - Implement custom hooks in order to manage posts 
  - Consider performance optimization
  - Refactor the code to be more readable
  - Add source code comments to be more readable

## Rules

NOT ALLOWED

- Remove existing source code
- Change the API server and db.json

ALLOWED
- You can use JavaScript or TypeScript
- Change the design to have better UI and UX
- Modify existing source code
- Create new modules/methods/components/hooks
- Add new packages

## Setup

### Expo
We use Expo for this project.
Setup Expo environment (expo-cli, simulator or Expo GO app) following the instruction.

[https://docs.expo.dev/get-started/installation/](https://docs.expo.dev/get-started/installation/)

### Yarn
install modules by yarn command

```
cd react-native-challenge
yarn install
```

### Run on simulator

```
# run on iOS simulator
yarn ios

# run on Android simulator
yarn android
```

### Run server

Run the API server with JSON Server.
```
yarn server
```

## API

After starting up JSON Server, you can use these APIs.

```
// fetch all posts
http://localhost:3001/posts

// fetch posts by page 
http://localhost:3001/posts?_page=2
```

## Hiring Criteria

We will evaluate your skills based on criteria as below.

- Complete all functionalities
- Use custom hooks properly
- Performance optimization is taken into account
- Rendering should be optimized
- Components are properly divided
- Add source code comments to be more readable
- Good naming convention (filenames, functions and variables)
- High maintenance source code
- Error handling