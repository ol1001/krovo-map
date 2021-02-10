import {ResponsiveBubble} from '@nivo/circle-packing'
import {data} from '../by-type-data';
import './Charts.css';

export const BubbleChart = () => {
    return (
        <div className='bubble-container'>
            <div className='bubble'>
                <ResponsiveBubble
                    root={data}
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}
                    identity="name"
                    value="loc"
                    colorBy="name"
                    colors={{scheme: 'reds'}}
                    padding={6}
                    labelTextColor={{from: 'color', modifiers: [['darker', 0.9]]}}
                    borderWidth={4}
                    borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={12}
                />
            </div>
            <ul className="bubble-legend">
                {data.children.length ?
                    data.children.map(i => (
                            <li>
                                <span className='legend-circle' style={{backgroundColor: i.color}}/>
                                {i.name} - <b>{i.loc}</b>
                            </li>
                        )
                    ) : null}
            </ul>
        </div>
    )
}
