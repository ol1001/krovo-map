import { ResponsiveBubble } from '@nivo/circle-packing'
import './Charts.css';

export const BubbleChart = () => {
    const root = {
        "name": "Термінові доставки крові",
        "color": "#86eae9",
        "children": [

            {
                "name": "Дитяче онко",
                "loc": 6
            },
            {
                "name": "Доставка крові",
                "loc": 5
            },
            {
                "name": "Доросле онко",
                "loc": 11
            },
            {
                "name": "На операцію",
                "loc": 6
            },
        ]
    };
    return (
        <div className='bubble'>
            <ResponsiveBubble
                root={root}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                identity="name"
                value="loc"
                colorBy="name"
                colors={{ scheme: 'reds' }}
                padding={6}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 0.9 ] ] }}
                borderWidth={2}
                borderColor={{ from: 'color' }}
                //labelTextColor="#fff"
                defs={[
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'none',
                        color: 'inherit',
                        rotation: -45,
                        lineWidth: 8,
                        spacing: 9
                    }
                ]}
                //fill={[ { match: { depth: 1 }, id: 'lines' } ]}
                animate={true}
                motionStiffness={90}
                motionDamping={12}
            />
        </div>
    )
}
