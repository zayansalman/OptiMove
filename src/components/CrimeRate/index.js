import React from 'react'
class CrimeRate extends React.Component {

    
    state = {
        loading: true,
        ret: null,
        rat: null,
        stabed: null,
      };
    
      async componentDidMount() {
        var Cr1;
       // var Cr2;
        var Shank = false;
        const url = "https://data.police.uk/api/crimes-street/all-crime?poly=52.268,0.543:52.282,0.238:52.130,0.57002";
        const response = await fetch(url);
        const data = await response.json();
        var redbul= data.length;
        //var rarry = JSON.stringify(redbul);
        this.setState({ret: redbul, loading: false})
        Cr1=redbul;
        const url2 = "https://data.police.uk/api/crimes-street/all-crime?poly=51.5366,0.0758:52.794,0.238:52.130,0.478";
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        var monster = data2.length;
       // var NOCs= data[0];
        this.setState({rat: monster});
       // Cr2=monster;

        if(Cr1>500)
        {
            Shank=true;
            var outp="DANGER"
            this.setState({stabed: outp });
        }
        console.log(redbul);
        console.log(monster);
        console.log(Shank);
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
            <p>{this.state.ret}</p>
            <p>{this.state.rat}</p>
            <p>{this.state.stabed}</p>
            </body>
        );
      }
    



}
export default CrimeRate