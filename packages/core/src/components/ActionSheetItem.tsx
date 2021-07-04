import * as React from "react";
import { View, StyleSheet, StyleProp, ViewStyle, Text } from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { ActionSheetI } from "../interfaces/ASItem";
import Touchable from "./Touchable";
import { COMPONENT_TYPES, createActionProp } from "@draftbit/types";

type Props = {
  displayText: string;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  feedback?: boolean;
  onPress?: (index?: number) => void;
} & ActionSheetI;

const ActionSheetItem: React.FC<Props> = ({
  displayText,
  style,
  textStyle,
  onPress = () => {},
  ...rest
}) => {
  return (
    <Touchable onPress={() => onPress()}>
      <View style={[styles.container, style]} {...rest}>
        <Text style={textStyle}>{displayText}</Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
});

export default withTheme(ActionSheetItem);

export const SEED_DATA = {
  name: "Action Sheet Item",
  tag: "ActionSheetItem",
  description: "An action sheet item component",
  category: COMPONENT_TYPES.basic,
  props: {
    onPress: createActionProp(),
  },
};
