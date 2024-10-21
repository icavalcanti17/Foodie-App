import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  containerBack: {
    position: "absolute",
    top: 6,
    left: 0,
  },
  titulo: {
    fontSize: FONT_SIZE.md,
    color: COLORS.dark_gray,
    textAlign: "center",
  },
  valores: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 4,
  },
  valor: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
  },
  total: {
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    color: COLORS.dark_gray,
  },
};
