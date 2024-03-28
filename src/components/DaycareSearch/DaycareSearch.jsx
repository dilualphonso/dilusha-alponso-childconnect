import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';



function DaycareSearch (){


    return (
        <div>

              <div>
<input  name='searching' className='warehouses__search' type="text" placeholder="Search..." />
                    </div>

{/* <div style={ {height:"80vh"}}>
                    <GoogleMapReact
        bootstrapURLKeys={{ key:"AIzaSyAzEQgX_hi-_Qnv6aWWIQDAdcLYnFPqQSQ" }}
        defaultCenter={{
            lat: 10.99835602,
            lng: 77.01502627
        }}
        defaultZoom={14}
      >

      </GoogleMapReact>
      </div> */}
        </div>
    )
}
export default DaycareSearch