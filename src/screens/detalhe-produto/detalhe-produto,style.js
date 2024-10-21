import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerFoto: {
    alignItems: "center",
  },
  foto: {
    height: 150,
  },
  containerBack: {
    position: "absolute",
    top: 30,
    left: 15,
  },
  back: {
    width: 35,
    height: 35,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
  },
  headerTextos: {
    flex: 1,
  },
  nome: {
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    color: COLORS.dark_gray,
    marginBottom: 2,
  },
  descricao: {
    fontSize: FONT_SIZE.md,
    color: COLORS.medium_gray,
  },
  valor: {
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    color: COLORS.dark_gray,
    marginBottom: 2,
    marginTop: 20,
  },
  headerObs: {
    width: "100%",
    padding: 10,
  },
  multiline: {
    flex: 1,
    backgroundColor: COLORS.light_gray,
    padding: 10,

    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.gray,
    minHeight: 250,
    textAlignVertical: "top",
    marginTop: 15,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  imgQtd: {
    width: 30,
    height: 30,
  },
  qtd: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "bold",
    color: COLORS.dark_gray,
    width: 35,
    textAlign: "center",
  },
  footerBtn: {
    flex: 1,
    marginLeft: 15,
    marginRight: 5,
  },
};
