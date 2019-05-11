import React from 'react'
import { getCandies } from '../reducers'
import { connect } from 'react-redux'
export class AllCandies extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getCandies()
  }

  render() {
    return (
      <div>
        {
          this.props.candies.map(candy => {
            return (
              <ul key={candy.id} >
                <li>{candy.name}</li>
              </ul>
            )
          })
        }
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  candies: state.candies
})
const mapDispatchToProps = dispatch => ({
  getCandies: () => dispatch(getCandies())
})
export const Candies = connect(mapStateToProps, mapDispatchToProps)(AllCandies)
