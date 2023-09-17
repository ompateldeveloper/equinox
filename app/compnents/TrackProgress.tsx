"use client"
export default function TrackProgress({handleRange}:any) {


    return (
          <div className='track-progress'>
              <input type="range" name="" defaultValue='0' id="" min="0" max="1000" onChange={handleRange} className=""></input>
          </div>
    )
}
