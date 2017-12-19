import moment from 'moment';

export function timeDuration(time){
  let now = moment(new Date());
  let start = moment(time);
  let duration = moment.duration(now.diff(start));
  let days = duration.days();
  let hours = duration.hours();
  let minutes = duration.minutes();
  let seconds = duration.seconds();
  let timeSince = '';
  if(parseInt(hours, 10) < 1){
    timeSince = minutes+' min '+seconds+' sec';
  }
  else if(parseInt(hours, 10) < 24){
    timeSince = hours+' hr '+minutes+' min';
  }
  else{
    timeSince = days+' days ';
  }
  return timeSince;
}