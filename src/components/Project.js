import { Paper, Button } from "@mui/material";
import { GoTelescope } from "react-icons/go";
import ConfigIcon from "./ConfigIcon";
export default function Project(props) {
  return (
    <div style={props.styles.carousel}>
      <Paper style={props.styles.card}>
        <div>
          <h2 style={props.styles.cardText}>{props.project.title}</h2>
          <span style={props.styles.cardText}>
            Click The Telescope to Explore!
          </span>
          <a style={props.styles.cardText} href={props.project.link}>
            <ConfigIcon>
              <GoTelescope />
            </ConfigIcon>
          </a>
        </div>
      </Paper>
    </div>
  );
}
