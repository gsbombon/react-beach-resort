import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info: "Just because a cocktail is alcohol-free doesn't mean it can't be fun and delicious. These tasty alcohol-free mocktails bring all of the fun without the booze; they taste great, and they're perfect for parties and other occasions when you want to feel festive. "
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: "Welcome to Endless Hikes, a travelogue about some of the great tracks, trails and tramps that are available in New Zealand, Australia and Iceland."
             
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info: "provides free shuttle bus service between airline terminals, the Rental Car Center, the Water Transportation dock and Airport Station on the MBTA Blue Line."
             
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: "There’s nothing more refreshing than cracking open a cold beer on a hot summer afternoon. But for the few among us who have found themselves trapped in the endless cycle of craft-beer elitism."
             
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
