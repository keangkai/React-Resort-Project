import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail,FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
class Services extends Component {
  constructor(props) {
    super(props)

    this.state = {
      services : [
        {
          icon: <FaCocktail />,
          title: "free cocktail",
          info: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },
        {
          icon: <FaHiking />,
          title: "endless hiking",
          info: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },
        {
          icon: <FaShuttleVan />,
          title: "free shittle",
          info: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },
        {
          icon: <FaBeer />,
          title: "stroing beer",
          info: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },
      ]
    }
  }

  render() {
    return (
      <section className="services">
        <Title title="service"/>
        <div className="services-center">
          { this.state.services.map((item,index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })
          }
        </div>
      </section>
    )
  }
}

export default Services
