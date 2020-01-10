/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import AppBar from '@material-ui/core/AppBar';
import Map from 'components/Map';
import styled from 'styled-components';
import InfoDrawer from 'components/InfoDrawer';
import 'mapbox-gl/dist/mapbox-gl.css';
import MenuDrawer from 'components/MenuDrawer';


const MainContainer = styled.div`
  min-height: 100%;
  min-width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  background: #f2f7fb;
`;

const StyledGrid = styled(Grid)`
  position: absolute;
  min-height: 100%;
`;


  // Styles for NavBar
  const NavBar = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    };
    this.updateLocationState = this.updateLocationState.bind(this);
  }

  updateLocationState(mapInfo){
    this.setState({
      latitude: mapInfo.latitude,
      longitude: mapInfo.longitude,
      zoom: mapInfo.zoom
    })
  }

  render(){
    return (
      <MainContainer>
        <StyledGrid container>
          <Grid item xs={12}>
          <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none'}}>
              <Toolbar>

                  <MenuDrawer />



                <Typography variant="h6" className={NavBar.title}>
                  <a href="http://localhost:3000/">HeatStress</a>
                </Typography>



                <IconButton edge="start" className={NavBar.menuButton} color="inherit" aria-label="menu">
                  <ArrowLeftIcon fontSize="large" style={{align:'right'}}/>
                </IconButton>
              </Toolbar>
            </AppBar>
          </Grid>
        </StyledGrid>
        <StyledGrid container>
          <Grid item xs={11}>
          <Map mapMoveHandler={this.updateLocationState}/>
          </Grid>
          <Grid item xs={1}>
            <InfoDrawer lat={this.state.latitude} lon={this.state.longitude} zm={this.state.zoom} >
            </InfoDrawer>
          </Grid>
        </StyledGrid>
      </MainContainer>
    );
  };
}

export default App;
