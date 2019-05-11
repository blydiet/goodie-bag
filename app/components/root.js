import React from 'react'
import { Candies } from './AllCandies'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'


const Root = () => {
  return (
    <div>

      <nav>
        <HashRouter>
          <Link to="/candies">Candies</Link>
        </HashRouter>
      </nav>

      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <HashRouter>
          <Switch>
            <Route exact path="/candies" component={Candies} />
            <Route exact path="/" component={Candies} />
          </Switch>
        </HashRouter>
      </main>
    </div >
  )
}

export default Root
