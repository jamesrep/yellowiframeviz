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
    this.props.renderComplete();
  }

  
  componentWillUnmount() 
  {
  }  

  componentDidUpdate() 
  {
    this.props.renderComplete();
  }
  

  render() 
  {
    const strPage = this.props.website;

    if(strPage == null) 
    {
      return (<div>page url cannot be null</div>);
    }
    
    if(strPage.indexOf("/api/yellowiframeviz/") != 0)
    {
      return (<div>NOT ALLOWED:1 Only allows starting with /api/yellowiframeviz/</div>)
    }
  
    if(strPage.indexOf("..") >= 0)
    {
      return (<div>NOT ALLOWED:2 Only allows starting with /api/yellowiframeviz/</div>)
    }

    if(strPage.toLowerCase().indexOf("%2f") >= 0)
    {
      return (<div>NOT ALLOWED:3  Only allows starting with /api/yellowiframeviz/</div>)
    }

    if(strPage.toLowerCase().indexOf("%u") >= 0)
    {
      return (<div>NOT ALLOWED:4 Only allows starting with /api/yellowiframeviz/</div>)
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
