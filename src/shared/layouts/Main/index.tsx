import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Navbar } from "shared/components/organisms";

interface IProps {
  mobile?: boolean;
  movieID?: string;
  children: any;
  style?: any;
}

const useStyles = makeStyles((theme) => ({
  height: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    height: "100%",
  },
  content: {
    minHeight: "100vh",
    backgroundColor: theme.palette.secondary.main,
  },
  childContent: {
    marginTop: theme.spacing(5),
  },
}));

const MainLayout: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const { children, mobile, movieID } = props;
  const handleMaxWidth = () => (isLarge ? "lg" : "sm");
  return (
    <div className={classes.content}>
      <Navbar movieID={movieID} mobile={mobile} />
      <Container maxWidth={handleMaxWidth()} className={classes.childContent}>
        {children}
      </Container>
    </div>
  );
};

export default MainLayout;
