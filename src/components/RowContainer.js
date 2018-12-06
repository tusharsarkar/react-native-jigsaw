import * as React from "react";
import { View } from "react-native";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES } from "../core/component-types";

class RowContainer extends React.Component {
  render() {
    const {
      theme: { spacing },
      style,
      children
    } = this.props;

    return (
      <View style={[{ paddingHorizontal: spacing.gutters }, style]}>
        {children}
      </View>
    );
  }
}

export default withTheme(RowContainer);

export const SEED_DATA = {
  name: "Row Container",
  tag: "RowContainer",
  description: "A container component with gutter padding",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {
    width: 375,
    height: 100
  },
  props: {}
};
