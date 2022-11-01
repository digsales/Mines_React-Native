# Mines

### Setting up project

    npx create-expo-app mines
    
### Initializing app

    npm start

### Functional component

```js
import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

export default props => {
  return (
    <>
      <Text style={Estilo.fontG}>
        
      </Text>
    </>
  )

};
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
