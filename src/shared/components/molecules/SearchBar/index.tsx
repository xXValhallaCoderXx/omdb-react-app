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
  leftContent: {
    padding: theme.spacing(5),
  },
}));

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchBar: React.FC<IProps> = ({ onChange, value }) => {
  const classes = useStyles();
  return (
    // <Grid container spacing={3}>
    //   <Grid item md={10}>
    //     <Input
    //       variant="outlined"
    //       placeholder="Enter movie title..."
    //       fullWidth
    //       value={value}
    //       onChange={onChange}
    //       icon={<SearchIcon />}
    //     />
    //   </Grid>
    //   <Grid item md={2}>
    //     <Button
    //       className={classes.searchBtn}
    //       fullWidth
    //       variant="contained"
    //       type="submit"
    //     >
    //       Submit
    //     </Button>
    //   </Grid>
    // </Grid>
    <Grid container spacing={2} className={classes.searchWrapper}>
      <Grid item xs={8}>
        <Input
          size="small"
          variant="outlined"
          placeholder="Enter movie title..."
          fullWidth
          value={value}
          onChange={onChange}
          icon={<SearchIcon />}
        />
      </Grid>
      <Grid item xs={4}>
        <Button fullWidth variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
