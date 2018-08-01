import React from 'react';
import PropTypes from 'prop-types';

const Details = ({room, details}) => (
  <div>
    { details.appointmentExists &&
      <div id="single-room__meeting-title">
        <span id="single-room__next-up">
          {details.nextUp}
        </span>
        {room.Appointments[0].Subject}
      </div>
    }
  </div>
);

const Time = ({room, details}) => (
  <div id="single-room__meeting-time">
    { details.timesPresent &&
      new Date(parseInt(room.Appointments[0].Start, 10)).toLocaleTimeString([], {weekday: 'short', hour: '2-digit', minute: '2-digit'}) + ' - ' + new Date(parseInt(room.Appointments[0].End, 10)).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    }
  </div>
)

const Organizer = ({room, details}) => {
  return(
    <div id="single-room__meeting-organizer">
      {details.appointmentExists &&
        room.Appointments[0].Organizer
      }
    </div>
  );
};

const RoomStatusBlock = ({ config, details, room }) => (
  <div className={room.Busy ? 'columns small-8 left-col busy' : 'columns small-8 left-col open'}>
    <div id="single-room__room-name">{room.Name}</div>
    <div id="single-room__room-status">{room.Busy ? config.statusBusy : config.statusAvailable}</div>
    {/* { details.appointmentExists ?
      <div id="single-room__meeting-title">
        <span id="single-room__next-up">
          {details.nextUp}
        </span>
        {room.Appointments[0].Subject}
      </div>
    :
      ''
    }
    <div id="single-room__meeting-time">
      { details.timesPresent ?
        new Date(parseInt(room.Appointments[0].Start, 10)).toLocaleTimeString([], {weekday: 'short', hour: '2-digit', minute: '2-digit'}) + ' - ' + new Date(parseInt(room.Appointments[0].End, 10)).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
      :
        ''
      }
    </div>
    { details.appointmentExists ?
      <div id="single-room__meeting-organizer">
        {room.Appointments[0].Organizer}
      </div>
    :
      ''
    } */}
    <Details room={room} details={details} />
    <Time room={room} details={details} />
    <Organizer room={room} details={details} />

  </div>
);

RoomStatusBlock.propTypes = {
  room: PropTypes.array,
  details: PropTypes.object,
  config: PropTypes.object
}

export default RoomStatusBlock;
