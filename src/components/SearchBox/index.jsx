import { InputAdornment, TextField } from "@mui/material";
import { Close, Search as SearchIcon } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useState } from "react";
import useStyles from "./index.style";

const SearchBox = (props) => {
  const { placeholder, defaultValue, onChange, onClear } = props;
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState(defaultValue);

  const handleOnChange = (event) => {
    onChange(event.target.value);
    setSearchValue(event.target.value);
  };

  const onClearSearchInput = () => {
    setSearchValue("");
    onClear();
  };

  return (
    <TextField
      placeholder={placeholder}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: searchValue?.length ? (
          <InputAdornment position="end" style={{ cursor: "pointer" }}>
            <Close onClick={onClearSearchInput} />
          </InputAdornment>
        ) : null,
      }}
      value={searchValue}
      defaultValue={defaultValue}
      onChange={handleOnChange}
      className={classes.searchBox}
    />
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  searchValue: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
};

SearchBox.defaultProps = {
  onChange: () => {},
  onClear: () => {},
};

export default SearchBox;
