import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
  },
  media: {
    paddingTop: "56.25%", // 16:9
    objectFit: "cover",
    maxheight: "200px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: "2.3vmin",
  },
}));
