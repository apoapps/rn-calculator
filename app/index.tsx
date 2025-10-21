import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">50 x 50</ThemeText>
        <ThemeText variant="h2">250</ThemeText>
      </View>
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton label="C" onPress={() => console.log("C")} blackText color={Colors.lightGray} />
        <CalculatorButton label="+/-" onPress={() => console.log("+/-")} blackText color={Colors.lightGray} />
        <CalculatorButton label="del" onPress={() => console.log("del")} blackText color={Colors.lightGray} />
        <CalculatorButton label="÷" color={Colors.orange} onPress={() => console.log("÷")} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => console.log("7")} blackText={false} />
        <CalculatorButton label="8" onPress={() => console.log("8")} blackText={false} />
        <CalculatorButton label="9" onPress={() => console.log("9")} blackText={false} />
        <CalculatorButton label="X" color={Colors.orange} onPress={() => console.log("X")} blackText={false} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => console.log("4")} blackText={false} />
        <CalculatorButton label="5" onPress={() => console.log("5")} blackText={false} />
        <CalculatorButton label="6" onPress={() => console.log("6")} blackText={false} />
        <CalculatorButton label="-" color={Colors.orange} onPress={() => console.log("-")} blackText={false} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => console.log("1")} blackText={false} />
        <CalculatorButton label="2" onPress={() => console.log("2")} blackText={false} />
        <CalculatorButton label="3" onPress={() => console.log("3")} blackText={false} />
        <CalculatorButton label="+" color={Colors.orange} onPress={() => console.log("+")} blackText={false} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="0" onPress={() => console.log("0")} blackText={false} doubleSize />
        <CalculatorButton label="." onPress={() => console.log(".")} blackText={false} />
        <CalculatorButton label="=" color={Colors.orange} onPress={() => console.log("=")} blackText={false} />
      </View>
    </View>
  );
};

export default CalculatorApp;
