import React from "react";
import { Input, Card } from "react-native-elements";

export default class Login extends React.Component {
  render() {
    return (
      <Card>
        <Input label="email@example.com" />
        <Input label="*************" />
      </Card>
    );
  }
}
