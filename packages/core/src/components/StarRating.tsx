import * as React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
import Touchable from "./Touchable";

import {
  COMPONENT_TYPES,
  createStaticNumberProp,
  createNumberProp,
  createBoolProp,
  createActionProp,
} from "@draftbit/types";

type Props = {
  starSize?: number;
  maxStars?: number;
  rating?: number;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  feedback?: boolean;
  onStarPress?: (rating?: number) => void;
} & IconSlot;

const StarRating: React.FC<Props> = ({
  Icon,
  starSize = 16,
  maxStars = 5,
  rating = 0,
  theme,
  style,
  feedback = false,
  onStarPress = () => {},
  ...rest
}) => {
  const ratingRounded = Math.round(rating * 2) / 2;
  return (
    <View style={[styles.container, style]} {...rest}>
      {[...Array(maxStars)].map((_, i) =>
        feedback ? (
          <Touchable key={`${i}`} onPress={() => onStarPress(i + 1)}>
            <Icon
              key={i}
              name={"MaterialIcons/star"}
              size={starSize}
              color={rating > i ? theme.colors.primary : theme.colors.divider}
            />
          </Touchable>
        ) : (
          <Icon
            key={i}
            name={
              ratingRounded - i === 0.5
                ? "MaterialIcons/star-half"
                : "MaterialIcons/star"
            }
            size={starSize}
            color={
              ratingRounded > i ? theme.colors.primary : theme.colors.divider
            }
          />
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default withTheme(StarRating);

export const SEED_DATA = {
  name: "Star Rating",
  tag: "StarRating",
  description: "A star rating component",
  category: COMPONENT_TYPES.basic,
  props: {
    starSize: createStaticNumberProp({
      label: "Star size",
      description: "Size of each individual star",
      defaultValue: 16,
      min: 8,
      max: 36,
      step: 1,
    }),
    maxStars: createStaticNumberProp({
      label: "Max stars",
      description: "The max number of stars",
      defaultValue: 5,
      min: 0,
      max: 10,
      step: 1,
    }),
    rating: createNumberProp({
      label: "Rating",
      description: "The number of stars that should be colored in",
      min: 0,
      max: 10,
      step: 1,
    }),
    feedback: createBoolProp({
      label: "feedback",
      description: "Whether conponent id designed for feedback",
    }),
    onStarPress: createActionProp(),
  },
};
