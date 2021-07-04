/**
 * This is an interface for a hybrid component.
 *
 */
import React from "react";
import { ViewProps, StyleProp, ImageStyle } from "react-native";

import { Subtract } from "utility-types";

type Props = {
  displayName: string;
  style?: StyleProp<ImageStyle>;
  onSelect?: Function;
} & ViewProps;

export type ASItemI = React.ComponentType<Props>;

export interface ActionSheetI {
  ASItem: ASItemI;
}

export const injectActionSheetItem =
  <P extends ActionSheetI>(
    Component: React.ComponentType<P>,
    ASItem: ASItemI
  ) =>
  (props: Subtract<P, ActionSheetI>) =>
    React.createElement(Component, { ...(props as P), ASItem });
