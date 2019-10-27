import React from 'react'
class PtoGeoCord extends React.Component {

    
    state = {
        loading: true,
        Lat1: null,
        Long1: null,
        Lat2: null,
        Long2: null,
        
      };
    
      async componentDidMount() {
    
        const url = "http://api.postcodes.io/postcodes/" + "UB83PH";
        const response = await fetch(url);
        const data = await response.json();
        var cord1= JSON.stringify(data);
        //var cord1="HAE"
        var rarry = cord1.split('"');
        var LongitudeCord1 = (rarry[24]).slice(1,-1);
        var LatitudeCord1 = (rarry[26]).slice(1,-1);

        this.setState({Lat1: LatitudeCord1,Long1: LongitudeCord1, loading: false})
        const url2 = "http://api.postcodes.io/postcodes/"+"E11LP";
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        var cord2 = JSON.stringify(data2);

        var rarry2 = cord2.split('"');
        var LongitudeCord2 = (rarry2[24]).slice(1,-1);
        var LatitudeCord2 = (rarry2[26]).slice(1,-1);
      
        this.setState({Lat2: LatitudeCord2, Long2: LongitudeCord2});
       
        console.log("DEATH");
        console.log("SLOW");
       // console.log(Shank);
      }
    
      render() {
        // if (this.state.loading) {
        //   return <div>loading...</div>;
        // }
    
        // if (!this.state.person) {
        //   return <div>didn't get a person</div>;
        // }
        return (

            
          <body>
            <p>latitude point 1 {this.state.Lat1}</p>
            <p>longitude point 1 {this.state.Long1}</p>
            <p>latitude point 2 {this.state.Lat2}</p>
            <p>longitude point 2 {this.state.Long2}</p>
         </body>
        );
      }
    



}
export default PtoGeoCord