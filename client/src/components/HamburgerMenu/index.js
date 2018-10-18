import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

class HamburgerMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}>
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}>
          <MenuItem onClick={this.handleClose}>
            <Typography variant="subtitle1" align="left">
              <Button component={Link} to="/challenge">
                Challenge
              </Button>
            </Typography>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Typography variant="subtitle1" align="justify">
              <Button component={Link} to="/events">
                Events
              </Button>
            </Typography>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Typography variant="subtitle1" align="justify">
              <Button component={Link} to="/Create">
                Create
              </Button>
            </Typography>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default HamburgerMenu;
