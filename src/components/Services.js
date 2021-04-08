import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed libero leo. Nulla vitae blandit quam. Phasellus faucibus luctus libero, vehicula fermentum leo cursus at. Vivamus pellentesque lobortis enim pharetra tempus. '
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed libero leo. Nulla vitae blandit quam. Phasellus faucibus luctus libero, vehicula fermentum leo cursus at. Vivamus pellentesque lobortis enim pharetra tempus. '
             
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed libero leo. Nulla vitae blandit quam. Phasellus faucibus luctus libero, vehicula fermentum leo cursus at. Vivamus pellentesque lobortis enim pharetra tempus. '
             
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed libero leo. Nulla vitae blandit quam. Phasellus faucibus luctus libero, vehicula fermentum leo cursus at. Vivamus pellentesque lobortis enim pharetra tempus. '
             
            }
        ]
    };
    render() {
        return (
            <section className="services">
            <div>
              <Title title="services"/>
              <div className="services-center">
                  {this.state.services.map((item,index) => {
                      return <article key={index} className="service">
                          <span>{item.icon}</span>
                          <h6>{item.title}</h6>
                          <p>{item.info}</p>
                          </article>
                  })}
              </div>

            </div>
            </section>
        );
    }
}
