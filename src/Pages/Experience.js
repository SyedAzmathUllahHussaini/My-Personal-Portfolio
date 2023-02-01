import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import {IoIosSchool} from "react-icons/io"
import {MdWork} from "react-icons/md"

export default function Experience() {
  return (
    <div className='experience'>
    <VerticalTimeline lineColor='#3e497a'>
    <VerticalTimelineElement
    className='vertical-timeline-element--experience'
    date='2022-2023'
    iconStyle={{background:"#e9d35b", color:"#fff"}}
    icon={<MdWork/>}>
<h3 className='vertical-timeline-element-title'>Frontend Developer</h3>
 </VerticalTimelineElement>
            <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='2018-2022'
            iconStyle={{background:"#3e497a", color:"#fff"}}
            icon={<IoIosSchool/>}>
        <h2>Bachelor's of Engineering</h2>
        <h3 className='vertical-timeline-element-title'>Osmania University, Hyderabad, Telangana,India </h3>
                 </VerticalTimelineElement>
            <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='2016-2018'
            iconStyle={{background:"#3e497a", color:"#fff"}}
            icon={<IoIosSchool/>}>
        <h2>Intermediate </h2>
        <h3 className='vertical-timeline-element-title'>Narayana Junior College, Hyderabad, Telangana,India </h3>
         </VerticalTimelineElement>
        </VerticalTimeline> 
        </div>
  )
}
