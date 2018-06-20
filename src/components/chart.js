//chart is separated component as it is repeated in code several times
//chart itself do not use data (just take it from the weather_list) so it is a component, not a  container

import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
  return  _.round(_.sum(data)/data.length);
}

export default (props)=> {
  return(
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color}></SparklinesLine>
        <SparklinesReferenceLine type='avg'/>
      </Sparklines>
    <div>{average(props.data)} {props.units}</div>
    </div>
  )
}