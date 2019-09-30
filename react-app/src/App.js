import React, { Component } from "react";
//import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Programme from "./components/programme/Programme";
import About from "./components/about/About";
import News from "./components/news/News";
import Review from "./components/review/Review";
import Anniversary from "./components/anniversary/Anniversary";
import Contact from "./components/contact/Contact";
import Live from "./components/live/Live";
import Event from "./components/event/Event";
import NewsArticle from "./components/news/NewsArticle";

// Admin components
import Admin from "./components/admin/Admin";
import AdminEvents from "./components/admin/tables/AdminEvents";
import AdminPosts from "./components/admin/tables/AdminPosts";
import AdminSchedule from "./components/admin/tables/AdminSchedule";
import AdminVenues from "./components/admin/tables/AdminVenues";
import AdminGeneral from "./components/admin/tables/AdminGeneral";
import AdminUsers from "./components/admin/tables/AdminUsers";
import AdminReview from "./components/admin/tables/AdminReview";
import AdminSettings from "./components/admin/tables/AdminSettings";


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/om-oss" component={About} />
          <Route exact path="/nyheter" component={News} />
          <Route path="/nyheter/:year" component={News} />
          <Route path="/tilbakeblikk/:reviewId" component={Review} />
          <Route path="/jubileum" component={Anniversary} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/program" component={Programme} />
          <Route path="/live" component={Live} />
          <Route path="/arrangement/:eventId" component={Event} />
          <Route path="/artikkel/:newsId" component={NewsArticle} />

          <Route path="/admin" component={Admin} />
          <AdminRoute exact path="/admin/events" component={AdminEvents} />
          <AdminRoute path="/admin/events/:year" component={AdminEvents} />
          <AdminRoute exact path="/admin/posts" component={AdminPosts} />
          <AdminRoute path="/admin/posts/:year" component={AdminPosts} />
          <AdminRoute path="/admin/schedule" component={AdminSchedule} />
          <AdminRoute path="/admin/venues" component={AdminVenues} />
          <AdminRoute path="/admin/general" component={AdminGeneral} />
          <AdminRoute path="/admin/users" component={AdminUsers} />
          <AdminRoute path="/admin/review" component={AdminReview} />
          <AdminRoute path="/admin/settings" component={AdminSettings} />
        </div>
      </BrowserRouter>
    );
  }
}
let jwt = localStorage.getItem('login-jwt');

const AdminRoute = ({ component: Component, ...rest }) => (//redirect user to loginpage if he is not logged in
  <Route {...rest} render={(props) => (
    jwt
      ? <Component {...props} />
      : <Redirect to='/admin' />
  )} />
)
export default App;
