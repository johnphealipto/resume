import { StyleSheet } from "@react-pdf/renderer";
import { COLORS } from "./assets/colors";

export const GLOBAL_STYLES = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white,
    color: COLORS.dark,
    fontFamily: "Rubik",
    paddingVertical: 15,
    paddingHorizontal: 25,
    lineHeight: 1.25,
  },
  subtitle: {
    fontSize: 11.5,
  },
  text: {
    fontSize: 10,
    opacity: 0.75,
  },
});
