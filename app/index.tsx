import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Filas de botones */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">50 x 50</ThemeText>
        <ThemeText variant="h2">250</ThemeText>
      </View>
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton label="C" onPress={() => console.log("C")} blackText color={Colors.darkGray} />
        <CalculatorButton label="+/-" onPress={() => console.log("+/-")} blackText color={Colors.darkGray} />
        <CalculatorButton label="del" onPress={() => console.log("del")} blackText color={Colors.darkGray} />
        <CalculatorButton label="÷" onPress={() => console.log("÷")} />
      </View>
    </View>
  );
};

export default CalculatorApp;
