// wallparse@gmail.com, James Dickson 2019.
// License: GPL v2.0

import React, { Component } from 'react';


class YellowvizComponent extends Component {

  constructor(props) 
  {
    super(props);
  } 

  componentDidMount() 
  {
    //console.log("componentDidMount");
    this.props.renderComplete();
  }

  
  componentWillUnmount() 
  {
    //console.log("componentWillUnmount");
  }  

  componentDidUpdate() 
  {
    //console.log("componentDidUpdate");
    this.props.renderComplete();
  }
  

  render() 
  {
    console.log("render");
    const strPage = this.props.website;
    
    console.log("page_" +strPage);
    
    if(strPage != null && strPage.indexOf("/api/yellowiframeviz/") != 0)
    {
      return (<div>NOT ALLOWED! Only allows starting with /api/yellowiframeviz/</div>)
    }
  
    if(strPage != null && strPage.indexOf("..") != 0)
    {
      return (<div>NOT ALLOWED! Only allows starting with /api/yellowiframeviz/</div>)
    }

    return (
      <iframe width="100%" height="100%" src={strPage}></iframe>
    );	  
  }
}


export function YellowvisWrapper(props) {
  return (
    <YellowvizComponent
      website={props.vis.params.webpage}
      renderComplete={props.renderComplete}
    />
  );
}
