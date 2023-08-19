import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  container: {
    padding: "32px 64px",
  },
  cardContainer: {
    display: "grid",
    gap: "32px",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  },
}));

export default useStyles;
