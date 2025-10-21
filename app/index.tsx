import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
  const {
    //Props
    formula,
    number,
    prevNumber,
    //methods
    buildNumber
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">{prevNumber}</ThemeText>
      </View>
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton label="C" onPress={() => buildNumber("C")} blackText color={Colors.lightGray} />
        <CalculatorButton label="+/-" onPress={() => buildNumber("+/-")} blackText color={Colors.lightGray} />
        <CalculatorButton label="del" onPress={() => buildNumber("del")} blackText color={Colors.lightGray} />
        <CalculatorButton label="÷" color={Colors.orange} onPress={() => buildNumber("÷")} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => buildNumber("7")} blackText={false} />
        <CalculatorButton label="8" onPress={() => buildNumber("8")} blackText={false} />
        <CalculatorButton label="9" onPress={() => buildNumber("9")} blackText={false} />
        <CalculatorButton label="X" color={Colors.orange} onPress={() => buildNumber("X")} blackText={false} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => buildNumber("4")} blackText={false} />
        <CalculatorButton label="5" onPress={() => buildNumber("5")} blackText={false} />
        <CalculatorButton label="6" onPress={() => buildNumber("6")} blackText={false} />
        <CalculatorButton label="-" color={Colors.orange} onPress={() => buildNumber("-")} blackText={false} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => buildNumber("1")} blackText={false} />
        <CalculatorButton label="2" onPress={() => buildNumber("2")} blackText={false} />
        <CalculatorButton label="3" onPress={() => buildNumber("3")} blackText={false} />
        <CalculatorButton label="+" color={Colors.orange} onPress={() => buildNumber("+")} blackText={false} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="0" onPress={() => buildNumber("0")} blackText={false} doubleSize />
        <CalculatorButton label="." onPress={() => buildNumber(".")} blackText={false} />
        <CalculatorButton label="=" color={Colors.orange} onPress={() => buildNumber("=")} blackText={false} />
      </View>
    </View>
  );
};

export default CalculatorApp;
