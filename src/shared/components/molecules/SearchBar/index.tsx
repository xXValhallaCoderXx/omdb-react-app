import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

import { Input, Button } from "shared/components/atoms";

const useStyles = makeStyles((theme) => ({
  searchBtn: {
    height: "100%",
  },
  searchWrapper: {
    position: "sticky",
    top: 60,
  },
}));

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  loading?: boolean;
}

const SearchBar: React.FC<IProps> = ({ onChange, value, loading }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.searchWrapper}>
      <Grid item xs={9} sm={10}>
        <Input
          size="small"
          variant="outlined"
          placeholder="Enter movie title..."
          fullWidth
          inputProps={{
            style: { fontStyle: "italic", fontWeight: 500 },
          }}
          value={value}
          onChange={onChange}
          icon={<SearchIcon color="primary" />}
        />
      </Grid>
      <Grid item xs={3} sm={2}>
        <Button
          loading={loading}
          className={classes.searchBtn}
          fullWidth
          variant="contained"
          color="secondary"
          type="submit"
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
