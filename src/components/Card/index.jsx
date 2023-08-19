import { Box, Typography } from "@mui/material";
import useStyles from "./index.style";
import PropTypes from "prop-types";

const Card = (props) => {
  const { imageUrl, title, description, id } = props;
  const classes = useStyles();

  return (
    <Box className={classes.card} id={id}>
      <Box className={classes.cardContent}>
        <img
          src={imageUrl}
          className={classes.cardImage}
          alt="Organization repository image"
        />
        <Typography variant="subtitle1" className={classes.cardTitle}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};

export default Card;
