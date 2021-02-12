import { ResponsiveSankey } from '@nivo/sankey'
import {data} from '../data/addresses-data';
import './Charts.css';

export const SankeyChart = () => {
    return (
        <div className='sankey-container'>
            <div className='sankey'>
                <ResponsiveSankey
                    data={data}
                    margin={{ top: 40, right: 160, bottom: 40, left: 150 }}
                    align="justify"
                    colors={{ scheme: 'category10' }}
                    nodeOpacity={1}
                    nodeThickness={18}
                    nodeInnerPadding={3}
                    nodeSpacing={18}
                    nodeBorderWidth={0}
                    nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
                    linkOpacity={0.5}
                    linkHoverOthersOpacity={0.1}
                    enableLinkGradient={true}
                    labelPosition="outside"
                    labelOrientation="horizontal"
                    labelPadding={16}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
                    legends={[
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            translateX: 30,
                            translateY: 250,
                            itemWidth: 100,
                            itemHeight: 14,
                            itemDirection: 'left-to-right',
                            itemsSpacing: 2,
                            itemTextColor: '#999',
                            symbolSize: 14,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </div>
    )
}
