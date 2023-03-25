import react from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function Project(props) {
  return (
    <div style={props.styles.carousel}>
      <Paper style={props.styles.card}>
        <div>
          <h2 style={props.styles.cardText}>{props.project.title}</h2>
          <span style={props.styles.cardText}>{props.project.description}</span>
          <a style={props.styles.cardText} href={props.project.link}>
            Check it out
          </a>
        </div>
      </Paper>
    </div>
  );
}
