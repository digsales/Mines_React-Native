# Mines

### Setting up project

    npx create-expo-app mines
    
### Initializing app

    npm start

### Functional component

```js
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      
    </View>
  )

};

const styles = StyleSheet.create({
 container: {
   flex: 1
 },
});

```

### User snippet for functional component

```js
{
  "Functional Component": {
    "scope": "javascript,typescript",
    "prefix": "functionalComponent",
    "body": [
      "import React from 'react';",
      "import { View, StyleSheet } from 'react-native';",
      "",
      "export default props => {",
      "  return (",
      "    <View style={styles.container}>",
      "      $1",
      "    </View>",
      "  )",
      "",
      "};",
      "",
      "const styles = StyleSheet.create({",
      " container: {",
      "   flex: 1",
      " },",
      "});"
    ],
    "description": "Log output to console"
  }
}

```
