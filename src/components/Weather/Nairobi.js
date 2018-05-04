import React, { Component } from 'react';



class Nairobi extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            loading: true
        }
    }

    componentDidMount(){
        fetch("https://api.openweathermap.org/data/2.5/group?id=184745&units=metric&appid=e77c9e2b0aad781c6ee58517d004e4e0")
        .then(resultado => resultado.json().then(dados => this.setState(dados)));

    }


    
  render() {
      
    return (

      <section className="card-nairobi">
        <div>
        { 
            this.state.list.map((item, indice) => {
                this.date = new Date(item.dt * 1000);
                this.hours = this.date.getHours();
                this.minutes = this.date.getMinutes();
                this.seconds = this.date.getSeconds();
                this.ampm = this.hours >= 12 ? 'PM' : 'AM';
                this.hours = this.hours % 12;
                this.hours = this.hours ? this.hours : 12;
                this.minutes = this.minutes < 10 ? '0'+ this.minutes : this.minutes;
                this.seconds = this.seconds < 10 ? '0'+ this.seconds : this.seconds;


                return (
                    <div key={indice}>
                    <h1>{item.name}, {item.sys.country}</h1>
                    <h2 className={ ( 
                        item.main.temp <= 5 ? "blue-weather" : 
                        item.main.temp <= 25 ? "orange-weather" : 
                        "red-weather" 
                    ) }>

                        <span>{Math.round(item.main.temp)}&deg;</span>
                    </h2>

                    <section className="date">
                            Updated at {this.hours}:{this.minutes}:{this.seconds} {this.ampm}
                    </section>

                    </div>
                    
                )
            })
        }
        </div>
        
      </section>
    );
  }
}

export default Nairobi;
