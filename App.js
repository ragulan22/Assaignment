import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import EnterPinView from "./components/EnterPinView";
import ResetPassword from "./components/ResetPassword";

export default class App extends Component {
  state = {
    pin: "",
    attempt: 3,
    errorInfo: "",
    toggleView: true,
    validPin: "7890",
    blocked: false
  };

  handleInputPin = async number => {
    await this.setState({ pin: this.state.pin + number }, () =>
      console.log(this.state.pin)
    )
    if (
      (await this.state.pin.length) === 4 && (await this.state.pin) === this.state.validPin) {
      await this.setState({ errorInfo: "Success" });
      await this.setState({ pin: "" });
      await this.setState({ attempt: 3}
      );
    } else if ((await this.state.pin.length) === 4) {
      if ((await this.state.attempt) === 3) {
        await this.setState({ errorInfo: "PIN incorrect" });
        await this.setState({ pin: "" });
        await this.state.attempt--;
      }
      if ((await this.state.attempt) === 2) {
        await this.setState({
          errorInfo: "PIN incorrect. Next incorrect attempt will block you."
        });
        await this.setState({ pin: "" });
        await this.state.attempt--;
      }
      if ((await this.state.attempt) <= 1) {
        await this.setState({
          errorInfo: "You are currently block from our system"
        });
        await this.setState({ pin: "" });
        await this.state.attempt--;
        return;
      }
    }
  };

  handleClearPin = () => {
    this.setState({ pin: "" });
  };

  toggleViewFunc = () => {
    this.setState({ toggleView: !this.state.toggleView });
  };

  resetPin = () => {
    this.setState({ validPin: " " });
  };

  renderLogin = () => {
    if (this.state.toggleView === true) {
      return (
        <View style={styles.loginContainer}>
          <Text style={styles.title}>
            Enter <Text style={{ fontWeight: "bold" }}>PIN</Text> to unlock
          </Text>

          <EnterPinView pinLength={this.state.pin.length} />

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              width: "80%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: "red",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {this.state.errorInfo}
            </Text>
          </View>
          <View style={{ marginTop: 30, width: "80%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                padding: 10
              }}
            >
              <TouchableOpacity onPress={() => this.handleInputPin("1")}>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 80,
                    backgroundColor: "#bebebe"
                  }}
                >
                  <Text style={{ fontSize: 20 }}>1</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.handleInputPin("2")}>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 80,
                    backgroundColor: "#bebebe"
                  }}
                >
                  <Text style={{ fontSize: 20 }}>2</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.handleInputPin("3")}>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 80,
                    backgroundColor: "#bebebe"
                  }}
                >
                  <Text style={{ fontSize: 20 }}>3</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                padding: 10
              }}
            >
              <TouchableOpacity onPress={() => this.handleInputPin("4")}>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 80,
                    backgroundColor: "#bebebe"
                  }}
                >
                  <Text style={{ fontSize: 20 }}>4</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.handleInputPin("5")}>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 80,
                    backgroundColor: "#bebebe"
                  }}
                >
                  <Text style={{ fontSize: 20 }}>5</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.handleInputPin("6")}>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 80,
                    backgroundColor: "#bebebe"
                  }}
                >
                  <Text style={{ fontSize: 20 }}>6</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                padding: 10
              }}
            >
              <TouchableOpacity onPress={() => this.handleInputPin("7")}>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 80,
                    backgroundColor: "#bebebe"
                  }}
                >
                  <Text style={{ fontSize: 20 }}>7</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.handleInputPin("8")}>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 80,
                    backgroundColor: "#bebebe"
                  }}
                >
                  <Text style={{ fontSize: 20 }}>8</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.handleInputPin("9")}>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 80,
                    backgroundColor: "#bebebe"
                  }}
                >
                  <Text style={{ fontSize: 20 }}>9</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 35
                  }}
                >
                  <Text style={{ fontSize: 20 }} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.handleInputPin("0")}>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    marginLeft: 10,
                    paddingRight: 20,
                    borderRadius: 80,
                    backgroundColor: "#bebebe"
                  }}
                >
                  <Text style={{ fontSize: 20 }}>0</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.handleClearPin()}>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20
                  }}
                >
                  <View style={{}}>
                    <Image
                      style={{ width: 40, height: 40 }}
                      source={require("./components/sources/images.jpg")}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>Forgot PIN?</Text>
            <TouchableOpacity onPress={() => this.toggleViewFunc()}>
              <Text>Tap here to reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#9d3262",
            height: 300
          }}
        >
          <Image
            style={{ width: 70, height: 70 }}
            source={require("./components/sources/IEG_key_blue.png")}
          />
        </View>
        {this.renderLogin()}
        {this.state.toggleView === false ? (
          <ResetPassword
            toggleViewFunc={this.toggleViewFunc.bind(this)}
            resetPin={this.resetPin.bind(this)}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9d3262"
  },
  loginContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
    margin: 15,
    borderRadius: 5,
    backgroundColor: "#fafafa",
    elevation: 2
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
