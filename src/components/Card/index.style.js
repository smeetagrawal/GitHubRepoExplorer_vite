import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  card: {
    border: "1px solid #efefef",
    cursor: "pointer",
    boxShadow: "0px 5px 22px rgb(0 0 0 / 9%)",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  cardContent: {
    padding: "20px 20px",
  },
  cardImage: {
    width: "64px",
    height: "64px",
    padding: 12,
    borderRadius: "50%",
  },
  cardTitle: {
    margin: "12px 0",
  },
}));

export default useStyles;
