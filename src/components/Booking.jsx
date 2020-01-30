import React from 'react';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: window.location.pathname.replace(/\//g, ''),
      deal: '',
      prices: [],
      viewers: this.generateViewersMessage(),
      sessionCheckIn: 50,
      sessionCheckOut: 57,
      sessionChildren: 0,
      sessionAdults: 2
    }
  }

  generateViewersMessage() {
    let viewers = Math.floor(Math.random() * 10);
    if (viewers === 0) {
      return "Lowest prices for your stay";
    } else if (viewers === 1) {
      return `${viewers} person is viewing this hotel`;
    } else {
      return `${viewers} people are viewing this hotel`;
    }
  }

  componentDidMount() {
    console.log('inside')
    fetch('/api/booking/' + this.state.id, {
      method: 'POST',
      body: JSON.stringify({ checkIn: this.state.sessionCheckIn, checkOut: this.state.sessionCheckOut, adults: this.state.sessionAdults, children: this.state.sessionChildren }),
      headers: { 'Content-type': 'application/json' }
    })
      .then((data) => {
        return data.json()
      })
      .then((dataJson) => {
        this.setState({
          deal: dataJson.deal,
          prices: dataJson.prices
        })
      });
  }

  render() {
    console.log(this.state)
    return (
      <div id="bookingWidget" style={{ "width": 395, "height": 650, "backgroundColor": "white", "textAlign": "center", "borderRadius": 0, "boxShadow": "0 0 3px 0px rgba(0, 0, 0, 0.4)" }}>
        <div id="viewers" style={{ "height": "15px", "margin": "8px 0", "padding": "15px" }}>
          <div id="viewerMessage" style={{ "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#D91E18", "fontWeight": 700, "fontSize": "16px", "textAlign": "center" }}>
            <span style={{ "marginRight": 6 }}><i class="fas fa-user-friends"></i></span>
            <span>{this.state.viewers}</span>
          </div>
        </div>
        <div id="userInputs">
          <div id="dates" style={{ "marginBottom": 3 }}>
            <div id="checkInGreenBox" style={{ "display": "inline-block", "height": 44, "width": 176.5, "margin": "0 0 0 0px", "backgroundColor": "#00a680", "borderRadius": "3px", "border": "1px solid #d6d6d6" }}>
              <div id="checkInBox" style={{ "height": 44, "width": 166, "backgroundColor": "white", "float": "right" }}>
                <div style={{ "display": "inline-block", "height": 25, "width": 25, "color": "#767676", "fontSize": 18, "float": "left", "marginTop": 13, "marginLeft": 5, "marginRight": 5 }}><i class="far fa-calendar-alt"></i></div>
                <div style={{ "marginLeft": 30 }}>
                  <div style={{ "textAlign": "left", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "fontSize": 13, "color": "#4A4A4A", "marginBottom": 5, "marginTop": 5, "fontWeight": 300 }}>Check In</div>
                  <div style={{ "textAlign": "left", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "fontSize": 14, "color": "rgba(0, 0,. 0, 0.85)", "fontWeight": 600 }}>Thu, 01/30/20</div>
                </div>
              </div>
            </div>
            <div style={{ "width": 8, "display": "inline-block" }}></div>
            <div id="checkOutRedBox" style={{ "display": "inline-block", "textAlign": "left", "height": 44, "width": 176.5, "margin": "0 0 0 0px", "backgroundColor": "#D91E18", "borderRadius": "3px", "border": "1px solid #d6d6d6" }}>
              <div id="checkOutBox" style={{ "height": 44, "width": 166, "backgroundColor": "white", "float": "right" }}>
                <div style={{ "display": "inline-block", "height": 25, "width": 25, "color": "#767676", "fontSize": 18, "float": "left", "marginTop": 13, "marginLeft": 10, "marginRight": 3 }}><i class="far fa-calendar-alt"></i></div>
                <div style={{ "marginLeft": 30 }}>
                  <div style={{ "textAlign": "left", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "fontSize": 13, "color": "#4A4A4A", "marginBottom": 5, "marginTop": 5, "fontWeight": 300 }}>Check In</div>
                  <div style={{ "textAlign": "left", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "fontSize": 14, "color": "rgba(0, 0,. 0, 0.85)", "fontWeight": 600 }}>Fri, 01/31/20</div>
                </div>
              </div>
            </div>




          </div>
          <div id="tripDetails" style={{ "display": "inline-block", "height": 42, "width": 363, "backgroundColor": "white", "borderRadius": "3px", "border": "1px solid #d6d6d6" }}>
            <div style={{ "display": "inline-block", "height": 25, "width": 25, "color": "#767676", "fontSize": 18, "float": "left", "marginTop": 13, "marginLeft": 8, "marginRight": 8 }}><i class="fas fa-user-friends"></i></div>
            <div style={{ "marginLeft": 30 }}>
              <div style={{ "textAlign": "left", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "fontSize": 13, "color": "#4A4A4A", "marginBottom": 5, "marginTop": 5, "fontWeight": 300 }}>Guests</div>
              <div style={{ "textAlign": "left", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "fontSize": 14, "color": "rgba(0, 0,. 0, 0.85)", "fontWeight": 600 }}>1 room, 2 adults, 0 children</div>
            </div>
          </div>
        </div>
        <div style={{ "height": 8 }}></div>
        <div id="hotelPromo" style={{ "display": "inline-block", "height": 42, "width": 363, "margin": " 0 0 0 0px", "backgroundColor": "white", "borderRadius": "5px", "border": "1px solid #D91E18" }}>
          <div id="hotelDeal">
            <div style={{ "margin": 10 }}>
              <span style={{ "color": "#D91E18", "marginRight": 8 }}><i class="fas fa-tag"></i></span>
              <span style={{ "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#D91E18", "fontWeight": 600, "fontSize": "15px", "textAlign": "center" }}>Hotel direct offer!</span>
              <span style={{ "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#767676", "fontWeight": 500, "fontSize": "15px", "textAlign": "center", "marginLeft": 8 }}>{this.state.deal}</span>
            </div>
          </div>
        </div>
        <div id="bigQuotes">
          <div id="siteQuote" style={{ "height": 88, "width": 363, "borderBottom": "1px solid #d6d6d6", "display": "inline-block", "align": "center" }}>
            <div style={{ "float": "left", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "width": 100, "height": 41, "color": "purple", "marginLeft": 15, "marginTop": 20, "fontSize": 30, "display": "inline-block" }}><i class="fas fa-skull"></i>.com</div>
            <button style={{ "float": "right", "display": "inline-block", "padding": "8px 16px", "height": 42, "width": 120, "fontWeight": 700, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "border": "1px solid transparent", "borderRadius": 2, "fontSize": 14, "textAlign": "center", "cursor": "pointer", "borderColor": "#fc0 #e4a000 #e4a000 #fc0", "backgroundColor": "rgb(255, 204, 0)", "color": "black", "marginTop": 20 }}>View Deal</button>
            <div style={{ "float": "right", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "width": 80, "height": 41, "color": "black", "marginLeft": 15, "marginTop": 25, "fontSize": 24, "display": "inline-block", "fontWeight": 600 }}>$585</div>
          </div>

          <div id="siteQuote" style={{ "height": 88, "width": 363, "borderBottom": "1px solid #d6d6d6", "display": "inline-block", "align": "center" }}>
            <div style={{ "float": "left", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "width": 100, "height": 41, "color": "orange", "marginLeft": 15, "marginTop": 20, "fontSize": 30, "display": "inline-block" }}><i class="fas fa-plane"></i>.com</div>
            <button style={{ "float": "right", "display": "inline-block", "padding": "8px 16px", "height": 42, "width": 120, "fontWeight": 700, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "border": "1px solid transparent", "borderRadius": 2, "fontSize": 14, "textAlign": "center", "cursor": "pointer", "borderColor": "#fc0 #e4a000 #e4a000 #fc0", "backgroundColor": "rgb(255, 204, 0)", "color": "black", "marginTop": 20 }}>View Deal</button>
            <div style={{ "float": "right", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "width": 80, "height": 41, "color": "black", "marginLeft": 15, "marginTop": 25, "fontSize": 24, "display": "inline-block", "fontWeight": 600 }}>$585</div>
          </div>

          <div id="siteQuote" style={{ "height": 88, "width": 363, "borderBottom": "1px solid #d6d6d6", "display": "inline-block", "align": "center" }}>
            <div style={{ "float": "left", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "width": 100, "height": 41, "color": "blue", "marginLeft": 15, "marginTop": 20, "fontSize": 30, "display": "inline-block" }}><i class="fas fa-space-shuttle"></i>.com</div>
            <button style={{ "float": "right", "display": "inline-block", "padding": "8px 16px", "height": 42, "width": 120, "fontWeight": 700, "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "border": "1px solid transparent", "borderRadius": 2, "fontSize": 14, "textAlign": "center", "cursor": "pointer", "borderColor": "#fc0 #e4a000 #e4a000 #fc0", "backgroundColor": "rgb(255, 204, 0)", "color": "black", "marginTop": 20 }}>View Deal</button>
            <div style={{ "float": "right", "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "width": 80, "height": 41, "color": "black", "marginLeft": 15, "marginTop": 25, "fontSize": 24, "display": "inline-block", "fontWeight": 600 }}>$585</div>
          </div>



        </div>


        <div id="smallQuotes">
          <div id="siteQuotes"><div>
          </div>
            <div id="disclaimer">
              <div id="disclaimerText"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Booking;


{/* <div id="bookingWidget" style={{ "width": 395, "height": 500, "backgroundColor": "white", "textAlign": "center", "borderRadius": 0, "boxShadow": "0 0 3px 0px rgba(0, 0, 0, 0.4)" }}>
<div id="viewers" style={{ "height": "44px", "margin": "8px 0","padding":"15px" }}>
  <div id="viewerMessage" style={{ "fontFamily": "Arial,Tahoma,Bitstream Vera Sans,sans-serif", "color": "#D91E18", "fontWeight": 700, "fontSize":"16px", "textAlign": "center"}}>
    <span style={{"marginRight": 6}}><i class="fas fa-user-friends"></i></span>
    <span>{this.state.viewers}</span>
  </div>
</div>
<div id="userInputs">
  <div id="dates">
    <div id="checkInGreenBox" style={{"display":"inline-block", "height":44, "width":176.5, "margin": "0 0 0 8px", "backgroundColor":"#00a680", "borderRadius":"3px", "border": "1px solid #d6d6d6"}}></div>

    <div id="checkOutRedBox" style={{"display":"inline-block", "height":44, "width":176.5, "margin": "0 0 0 8px", "backgroundColor":"#D91E18", "borderRadius":"3px", "border": "1px solid #d6d6d6"}}></div>
  </div>
  <div id="visitors"></div>
</div>
<div id="hotelPromo">
  <div id="hotelDeal"></div>
</div>
<div id="bigQuotes">
  <div id="siteQuote"></div>
  <div id="siteQuote"></div>
  <div id="siteQuote"></div>
</div>
<div id="smallQuotes">
  <div id="siteQuotes"><div>
  </div>
    <div id="disclaimer">
      <div id="disclaimerText"></div>
    </div>
  </div>
</div>
</div> */}