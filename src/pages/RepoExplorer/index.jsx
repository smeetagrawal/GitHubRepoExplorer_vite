import { Box, Typography } from "@mui/material";
import Card from "../../components/Card";
import SearchBox from "../../components/SearchBox";
import useStyles from "./index.style";
import { getGithubRepository as getGithubRepositoryApi } from "../../services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const RepoExplorer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [search, setSearch] = useState("");

  const handleCardClick = (event) => {
    const parent = event.target.closest("[id*='card_']");
    if (parent) {
      const [, repositoryId, repositoryIndex] = parent.id.split("_");
      navigate(`/repository/details/${repositoryId}`, {
        state: repositories[repositoryIndex],
      });
    }
  };

  const getOrganizationRepositories = async () => {
    try {
      const { data: response } = await getGithubRepositoryApi("godaddy", "");
      setRepositories(response);
    } catch (error) {
      setErrorMessage(error?.response?.data?.message ?? "Something went wrong");
    }
  };

  const handleOnSearch = (value) => {
    setSearch(value);
    const filteredRepositories = repositories.filter((repo) =>
      repo.name?.toLowerCase().includes(value?.toLowerCase())
    );
    setRepositories(filteredRepositories);
  };

  const optimizedSearch = _.debounce(handleOnSearch, 500);

  const handleSearchClear = () => {
    setSearch("");
    getOrganizationRepositories();
  };

  useEffect(() => {
    getOrganizationRepositories();
  }, []);

  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant="h1" fontSize={28} fontWeight={700}>
          Github Repository
        </Typography>
        <Typography variant="caption" fontWeight={500}>
          Explore the github repository of godaddy
        </Typography>
      </Box>

      <Box my={6} display="flex">
        <SearchBox
          defaultValue={search}
          onChange={optimizedSearch}
          onClear={handleSearchClear}
          placeholder="Search by name"
        />
      </Box>

      <Box mt={6}>
        {errorMessage ? (
          <>
            <Typography variant="h4">
              There is some error while fetching repository data
            </Typography>
            <Typography variant="h5">{`Error: ${errorMessage}`}</Typography>
          </>
        ) : (
          <Box className={classes.cardContainer} onClick={handleCardClick}>
            {repositories?.map((respository, repositoryIndex) => (
              <Card
                key={respository.id}
                id={`card_${respository.id}_${repositoryIndex}`}
                imageUrl={respository?.owner?.avatar_url}
                title={respository?.name}
                description={respository?.description}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RepoExplorer;
