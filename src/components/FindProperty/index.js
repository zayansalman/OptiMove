import React from 'react'
// import { FINDPROPERTY } from '../../constants/routes';
    var convert = require('xml-js');

// var async       = require('async');
// // var querystring = require('querystring');
    var request     = require('request');


// var api_key	= "7g9ec8djypkpaeee8s3s55fj"
// var latitude = "51.5329450669969" 
// var longitude = "51.5040309330031"


// var radius = "1" //miles
// var order_by = "price"
// var ordering = "descending"
// var listing_status = "rent" //rent or sale
// var include_sold = "0"
// var include_rented = "0"
// var minimum_price = "" //GBP
// var maximum_price = "" //GBP
// var minimum_beds = "2"
// var maximum_beds = "2"

// var convert = require('xml-js');


class FindProperty extends React.Component {
states
    render() {
        return (execute());
    }


}

function execute(){
    // const url2 = {
    //     url : 'http://api.zoopla.co.uk/api/v1/property_listings.xml',
    //     api_key: '7g9ec8djypkpaeee8s3s55fj',
    //     latitude : '51.5329450669969',
    //     longitude : '51.5040309330031',
    //     radius : '1', //miles,
    //     json:true

    // };

    var url = "http://api.zoopla.co.uk/api/v1/property_listings.xml?postcode=EC2M7PY&radius=1&order_by=price&api_key=7g9ec8djypkpaeee8s3s55fj";
    // var url = "http://api.zoopla.co.uk/api/v1/property_listings.xml?latitude=" + latitude + "&longitude=" + longitude + "&radius=" + radius + "&api_key=" + api_key;

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false); // false for synchronous request
    // xmlHttp.responseType = 'json';
    xmlHttp.send();
    var xml = xmlHttp.responseText;
    var result = convert.xml2json(xml, {compact: false, spaces: 4});
    // var result = request.get(url);

    var displayable_address = (xml.split('<displayable_address>'));

    for (var i in displayable_address) {
        displayable_address[i] = (displayable_address[i].substring(0, displayable_address[i].indexOf("</")) )
    }

    var details_url = (xml.split('<details_url>'));
    for (var i in details_url) {
        details_url[i] = (details_url[i].substring(0, details_url[i].indexOf("</")) )
    }

    console.log(displayable_address);
    console.log(details_url);

    return result;

}

export default FindProperty

