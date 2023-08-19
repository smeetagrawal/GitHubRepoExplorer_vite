import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  searchBox: {
    color: "#9d9d9d",
    flexGrow: 1,
    "& div": {
      borderRadius: 8,
      border: 0,
      outline: 0,
      backgroundColor: "#F6F8FA",
      padding: 10,
    },
    "& input": {
      padding: "0",
      fontSize: 14,
      fontWeight: 500,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
  },
}));

export default useStyles;
