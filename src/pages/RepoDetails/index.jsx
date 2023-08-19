import { Box, IconButton, Typography } from "@mui/material";
import useStyles from "./index.style";
import { ArrowBack, ContentCopy } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const RepoDetails = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const repositoryDetails = location.state;

  const handleCopyRepositoryLink = () => {
    navigator.clipboard.writeText(repositoryDetails?.html_url);
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <>
      <IconButton onClick={handleBackButton}>
        <ArrowBack />
      </IconButton>
      <Box className={classes.container}>
        <Typography variant="h3" className={classes.heading} fontSize={28}>
          Repository details
        </Typography>
        <Box className={classes.repositoryDetails}>
          <img
            src={repositoryDetails?.owner?.avatar_url}
            className={classes.repositoryImage}
          />
          <Box className={classes.respositoryInformation}>
            <Typography>{repositoryDetails?.name}</Typography>
            <Typography className={classes.respositoryDescription}>
              {repositoryDetails?.description}
            </Typography>
            <Typography>
              Languages used: {repositoryDetails?.language ?? "Not Available"}
            </Typography>
          </Box>
          <Box ml="auto" display="flex" alignItems="center">
            <Typography>Repo Link</Typography>
            <IconButton onClick={handleCopyRepositoryLink}>
              <ContentCopy />
            </IconButton>
          </Box>
        </Box>
        <Box className={classes.additionalDetailsInfo}>
          <Box className={classes.card}>
            <Box>
              <Typography>Forks</Typography>
              <Typography>{repositoryDetails?.forks_count}</Typography>
            </Box>
          </Box>
          <Box className={classes.card}>
            <Box>
              <Typography>Open issues</Typography>
              <Typography>{repositoryDetails?.open_issues}</Typography>
            </Box>
          </Box>
          <Box className={classes.card}>
            <Box>
              <Typography>Watchers</Typography>
              <Typography>{repositoryDetails?.watchers}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RepoDetails;
