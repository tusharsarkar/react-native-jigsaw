/* @flow */

import * as React from "react"
import { Slider as NativeSlider } from "react-native"
import { withTheme } from "../core/theming"
import type { Theme } from "../types"
import { FORM_TYPES, COMPONENT_TYPES, FIELD_NAME } from "../core/component-types"

type Props = {
  disabled?: boolean,
  maximumValue?: number,
  minimumValue?: number,
  step?: number,
  onValueChange: () => void,
  value: number,
  style?: any,
  /**
   * @optional
   */
  theme: Theme
}

class Slider extends React.Component {
  render() {
    const { style, theme, ...props } = this.props
    const { colors } = theme

    return (
      <NativeSlider
        minimumTrackTintColor={colors.primary}
        {...props}
        style={[{ alignSelf: "stretch" }, style]}
      />
    )
  }
}

export default withTheme(Slider)

export const SEED_DATA = {
  name: "Slider",
  tag: "Slider",
  description: "A component used to set a value in a range",
  category: COMPONENT_TYPES.formControl,
  preview_image_url: "{CLOUDINARY_URL}/Control_Slider.png",
  supports_list_render: false,
  props: {
    disabled: {
      label: "Disabled",
      description: "Whether the slider is disabled",
      editable: true,
      required: false,
      type: FORM_TYPES.boolean,
      value: null
    },
    maximumValue: {
      label: "Maximum value",
      description: "The maximum value of the slider",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 0,
      max: 1000000,
      step: 1,
      precision: 0,
      value: 10
    },
    minimumValue: {
      label: "Minimum value",
      description: "The minimum value of the slider",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: -1000000,
      max: 1000000,
      step: 1,
      precision: 0,
      value: 0
    },
    step: {
      label: "Step",
      description: "The amount the value should change per step",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 0,
      max: 100,
      step: 0.01,
      precision: 2,
      value: null
    },
    fieldName: {
      ...FIELD_NAME,
      value: "sliderValue",
      handlerPropName: "onValueChange"
    }
  },
  layout: {
    width: 375,
    height: 24
  }
}
