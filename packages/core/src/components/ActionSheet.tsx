import * as React from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Animated,
  Modal,
  Text,
} from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
import Touchable from "./Touchable";
import {
  COMPONENT_TYPES,
  createBoolProp,
  createActionProp,
} from "@draftbit/types";

type Props = {
  children: React.ReactNode;
  visible?: boolean;
  cancelButtonText: string;
  onCancelPress?: () => void;
  cancelButtonStyle?: StyleProp<ViewStyle>;
  cancelButtonTextStyle?: StyleProp<ViewStyle>;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
} & IconSlot;

const ActionSheet: React.FC<Props> = ({
  children,
  visible = false,
  cancelButtonText = "Cancel",
  onCancelPress = () => {},
  cancelButtonStyle = {
    height: 50,
    borderRadius: 5,
    backgroundColor: "white",
  },
  cancelButtonTextStyle = {
    textColor: "Red",
  },
  style,
  ...rest
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <Animated.View style={[styles.container, style]} {...rest}>
        {children}
        <Touchable onPress={onCancelPress}>
          <View style={[cancelButtonStyle, { paddingTop: 50 }]}>
            <Text style={cancelButtonTextStyle}>{cancelButtonText}</Text>
          </View>
        </Touchable>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 24,
    paddingBottom: 50,
    position: "absolute",
  },
});

export default withTheme(ActionSheet);

export const SEED_DATA = {
  name: "Action  Sheet",
  tag: "ActionSheet",
  description: "An action sheet component",
  category: COMPONENT_TYPES.basic,
  props: {
    visible: createBoolProp({
      label: "visible",
      description: "Whether conponent is visible",
    }),
    onCancelPress: createActionProp(),
    onSelectItem: createActionProp(),
  },
};
