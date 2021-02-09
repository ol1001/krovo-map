import { ResponsiveCalendar } from '@nivo/calendar';
import {data} from '../calendar-data'

export const CalendarChart = () => {
    return (
        <div className='calendar-container'>
            <div style={{height: '600px', width: '1050px'}}>
                <ResponsiveCalendar
                    data={data}
                    from="2019-07-01"
                    to="2021-12-31"
                    emptyColor="#fef5f0"
                    colors={['#fde0d2', '#fcbba1', '#fb9272', '#fa6a4a']}
                    margin={{top: 40, right: 40, bottom: 40, left: 40}}
                    yearSpacing={60}
                    yearLegendPosition="before"
                    yearLegendOffset={20}
                    monthBorderWidth={0}
                    monthBorderColor="#ffffff"
                    daySpacing={2}
                    dayBorderWidth={0}
                    dayBorderColor="#ffffff"
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'row',
                            translateY: 36,
                            itemCount: 4,
                            itemWidth: 42,
                            itemHeight: 36,
                            itemsSpacing: 14,
                            itemDirection: 'right-to-left'
                        }
                    ]}
                />
            </div>
        </div>
    )
}
