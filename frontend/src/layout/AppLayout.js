 //All relevant imports
import React from "react"
  import PropTypes from "prop-types"
  import { Switch, Route, Redirect } from "react-router-dom"

  //Perfect Scrollbar
  import "perfect-scrollbar/css/perfect-scrollbar.css"
  import PerfectScrollbar from "perfect-scrollbar"

  // MaterialUI
  import withStyles from "@material-ui/core/styles/withStyles"

  //Components
  import Header from "../components/Header/Header"
  import Footer from "../components/Footer/Footer"
  import Sidebar from "../components/Sidebar/Sidebar"

  //import dashboard routes
  import sidebarRoutes from "../routes/sidebarRoutes"

  //import style
  import appLayoutStyle from "./appLayoutStyle"

  // import image from "../sidebar-3.jpg"
  // import logo from "assets/img/reactlogo.png"
  import EventPage from "../events/EventPage"



const logo = 'https://png.icons8.com/ultraviolet/150/000000/batman-new.png';
const image = 'http://identity-mag.com/wp-content/uploads/2017/08/party-in-barcelona.jpg';

const switchRoutes = (
  <Switch>
    <Route path='/app/myevents/:id' component={EventPage} />
    {sidebarRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />
      return <Route path={prop.path} component={prop.component} key={key} />
    })}
  </Switch>
)

class AppLayout extends React.Component {

  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  getRoute() {
    return this.props.location.pathname !== "/maps"
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel)
    }
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0
      if(this.state.mobileOpen){
        this.setState({mobileOpen: false})
      }
    }
  }

  render() {
    const { classes, ...rest } = this.props
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={sidebarRoutes}
          logoText={"Eventech.io"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={sidebarRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer /> : null}
        </div>
      </div>
    )
  }


}

export default withStyles(appLayoutStyle)(AppLayout)