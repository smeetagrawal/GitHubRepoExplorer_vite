import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  container: {
    padding: "32px 64px",
  },
  heading: {
    textAlign: "center",
  },
  repositoryDetails: {
    marginTop: 32,
    display: "flex",
    gap: 24,
  },
  respositoryInformation: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  respositoryDescription: {
    maxWidth: "50%",
  },
  repositoryImage: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
  },
  additionalDetailsInfo: {
    marginTop: 32,
    display: "flex",
    gap: 24,
  },
  card: {
    display: "flex",
    flex: 1,
    padding: "16px 24px",
    boxShadow: "0 5px 22px 0 rgba(0, 0, 0, 0.06)",
    alignItems: "center",
    borderRadius: 8,
  },
}));

export default useStyles;
