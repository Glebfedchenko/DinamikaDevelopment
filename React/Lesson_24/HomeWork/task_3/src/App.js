import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';


const Users = {
  users: [
    { first_name: "Matthew", last_name: "Phillips", email: "mphillips0@myspace.com", gender: "Male", ip_address: "14.241.172.154", id: 23468 },
    { first_name: "Larry", last_name: "Weaver", email: "lweaver1@slideshare.net", gender: "Male", ip_address: "126.139.9.128", id: 89078 },
    { first_name: "Barbara", last_name: "Tucker", email: "btucker2@cbc.ca", gender: "Female", ip_address: "92.195.229.16", id: 56435 },
    { first_name: "Jonathan", last_name: "Cook", email: "jcook3@fc2.com", gender: "Male", ip_address: "187.79.225.71", id: 78908 },
    { first_name: "Jean", last_name: "Flores", email: "jflores4@last.fm", gender: "Female", ip_address: "222.197.158.249", id: 67653 },
    { first_name: "Kimberly", last_name: "Nelson", email: "knelson5@nifty.com", gender: "Female", ip_address: "111.174.89.57", id: 83425 },
    { first_name: "Willie", last_name: "Banks", email: "wbanks6@abc.net.au", gender: "Male", ip_address: "97.0.19.154", id: 99873 },
    { first_name: "Michael", last_name: "King", email: "mking7@w3.org", gender: "Male", ip_address: "149.114.62.6", id: 34239 }],
  all: function () { return this.users },
  get: function (id) {
    const isUser = p => p.id === id
    return this.users.find(isUser)
  }
}

const ListView = () => (
  <div>
    <ul>
      {
        Users.all().map(p => (
          <li key={p.id}>
            <Link to={`/listView/${p.id}`}>{p.first_name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const TableView = () =>(
<div>
  <table style={{border:'1px solid red'}}>
    {
      Users.all().map(p=>(
        <td key={p.id}>
        <Link to={`/tableView/${p.id}`}>{p.first_name}</Link>
        </td>
    ))
    }
  </table>
</div>

)

const User = (props) => {
  const user = Users.get(
    parseInt(props.match.params.id, 10)
  )
  if (!user) {
    return <div>User not found</div>
  }
  return (
    <div>
      <h1>{user.first_name} {user.last_name} (#{user.id})</h1>
      <h2>Gender: {user.gender}</h2>
      <Link to='/listView'>Back</Link>
    </div>
  )
}

const User2 = (props) => {
  const user = Users.get(
    parseInt(props.match.params.id, 10)
  )
  if (!user) {
    return <div>User not found</div>
  }
  return (
    <div>
      <h1>{user.first_name} {user.last_name} (#{user.id})</h1>
      <h2>Gender: {user.gender}</h2>
      <Link to='/listView'>Back</Link>
    </div>
  )
}


const Roster = () => (
  <Switch>
    <Route exact path='/listView' component={ListView} />
    <Route exact path='/tableView' component={TableView}></Route>
    <Route path='/listView/:id' component={User} />
    <Route path='/tableView/:id' component={User2}/>
  </Switch>
)

const Home = () => (
  <div>
    <h1>This is Home Page!</h1>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/listView' component={Roster} />
      <Route path='/tableView' component={Roster}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>

      <button><Link to='/'>Home</Link></button>
      <button><Link to='/listView'>ListView</Link></button>
      <button><Link to='/tableView'>TableView</Link></button>
    </nav>
  </header>
)


class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
