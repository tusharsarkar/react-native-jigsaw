import * as React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  PressableProps,
  Platform,
} from "react-native";
import { withTheme } from "../core/theming";
import Icon from "./Icon";
import themeT from "../styles/DefaultTheme";

import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
} from "../core/component-types";

type Props = {
  disabled?: boolean;
  loading?: boolean;
  size?: number;
  bgColor?: string;
  iconColor?: string;
  iconName?: string;
  onPress: () => void;
  theme: typeof themeT;
  IconOverride: typeof Icon;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

const FAB: React.FC<Props> = ({
  onPress,
  disabled,
  loading,
  bgColor = "#5a45ff",
  iconColor = "#FFF",
  iconName = "add",
  style,
  theme,
  size = 50,
  IconOverride = null,
  ...props
}) => {
  const SelectedIcon = IconOverride || Icon;

  const backgroundColor = bgColor || theme.colors.primary;
  const textColor = iconColor || theme.colors.strong;

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: "hidden",
      }}
    >
      <Pressable
        onPress={onPress}
        disabled={disabled || loading}
        android_ripple={{
          color: "#333",
          radius: size / 4,
        }}
        style={({ pressed }) => {
          return [
            styles.button,
            {
              opacity: pressed ? 0.75 : 1,
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor,
            },
            style,
          ];
        }}
        {...props}
      >
        <View style={styles.icon}>
          {!loading ? (
            <ActivityIndicator size="small" color={textColor} />
          ) : (
            <SelectedIcon name={iconName} size={28} color={textColor} />
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      web: {
        cursor: "pointer",
      },
    }),
  },
  // @ts-ignore
  icon: {
    ...Platform.select({
      web: {
        userSelect: "none",
      },
    }),
  },
});

export default withTheme(FAB);

export const SEED_DATA = [
  {
    name: "FAB",
    tag: "FAB",
    category: COMPONENT_TYPES.button,
    description:
      "A Floating Action Button, typically used in Material Design apps",
    layout: {},
    props: {
      icon: {
        group: GROUPS.basic,
        label: "Icon",
        description: "Name of the icon",
        editable: true,
        required: true,
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.ASSET,
        defaultValue: "MaterialIcons/add",
      },
      bgColor: {
        group: GROUPS.basic,
        label: "Bg Color",
        description: "Override the background color of the button",
        editable: true,
        required: false,
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        defaultValue: "#5a45ff",
      },
      iconColor: {
        group: GROUPS.basic,
        label: "Icon Color",
        description: "Override the background color of the button",
        editable: true,
        required: false,
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        defaultValue: "#FFF",
      },
      onPress: {
        group: GROUPS.basic,
        label: "Action",
        description: "Action to execute when button pressed",
        editable: true,
        required: false,
        formType: FORM_TYPES.action,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
      },
    },
  },
];
